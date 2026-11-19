/* ---------------------------------------------------------------------------
   Editorial Taste motion hooks: the fonts-ready gate and one shared
   IntersectionObserver. Kept apart from the components in motion.jsx so
   Vite fast refresh stays intact.
   --------------------------------------------------------------------------- */

import { useEffect, useState } from "react";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

/* Fonts (capped at 1.2s) gate the first reveal so word widths never shift
   mid-animation. Resolves instantly on later visits to the page. */
let readyPromise = null;
export function motionReady() {
  if (!readyPromise) {
    const fonts = document.fonts?.ready ?? Promise.resolve();
    const cap = new Promise((resolve) => setTimeout(resolve, 1200));
    readyPromise = Promise.race([fonts, cap]);
  }
  return readyPromise;
}

export function useMotionReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (prefersReduced()) {
      setReady(true);
      return undefined;
    }
    let alive = true;
    motionReady().then(() =>
      requestAnimationFrame(() => alive && setReady(true)),
    );
    return () => {
      alive = false;
    };
  }, []);
  return ready;
}

/* -------------------------------------------------------------------------- */
/* One shared observer for every reveal, plus a catch-up sweep so a jump       */
/* (End key, restored scroll) never leaves content above the fold hidden.      */
/* -------------------------------------------------------------------------- */

const pending = new Map(); // target element -> Set of callbacks
let observer = null;
let sweepTimer = 0;

function fire(target) {
  const callbacks = pending.get(target);
  if (!callbacks) return;
  pending.delete(target);
  observer?.unobserve(target);
  callbacks.forEach((cb) => cb());
}

function sweep() {
  pending.forEach((_, target) => {
    if (target.getBoundingClientRect().top < window.innerHeight * 0.88) {
      fire(target);
    }
  });
}

function onScroll() {
  window.clearTimeout(sweepTimer);
  sweepTimer = window.setTimeout(sweep, 120);
}

function watch(target, callback) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) fire(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  if (!pending.has(target)) {
    pending.set(target, new Set());
    observer.observe(target);
  }
  pending.get(target).add(callback);

  return () => {
    const callbacks = pending.get(target);
    if (!callbacks) return;
    callbacks.delete(callback);
    if (callbacks.size === 0) {
      pending.delete(target);
      observer?.unobserve(target);
    }
  };
}

/* Becomes true once, when the element (or its parent) enters the viewport. */
export function useInView(ref, { watchParent = false } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReduced() || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    // A fully clipped element (image unmask) can't be seen by the observer.
    const target = watchParent ? el.parentElement || el : el;
    let unwatch = null;
    let cancelled = false;
    motionReady().then(() => {
      if (cancelled) return;
      unwatch = watch(target, () => setInView(true));
      if (target.getBoundingClientRect().top < window.innerHeight * 0.88) {
        fire(target);
      }
    });
    return () => {
      cancelled = true;
      unwatch?.();
    };
  }, [ref, watchParent]);

  return inView;
}
