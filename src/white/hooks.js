import { useCallback, useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Theme — light/dark, persisted, seeded from the OS preference               */
/* -------------------------------------------------------------------------- */

const STORAGE_KEY = "pd-theme";

export const readStoredTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode / storage disabled */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    const dark = theme === "dark";
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
    document.documentElement.classList.toggle("white-dark", dark);
    document.body.classList.toggle("white-dark", dark);

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", dark ? "#0a0c10" : "#ffffff");
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return { theme, setTheme, toggle };
}

/* -------------------------------------------------------------------------- */
/* Scroll reveal — adds `is-visible` once the element enters the viewport      */
/* -------------------------------------------------------------------------- */

export function useReveal(options) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/* -------------------------------------------------------------------------- */
/* Reading progress — 0..1 of the document scrolled                            */
/* -------------------------------------------------------------------------- */

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

/* -------------------------------------------------------------------------- */
/* Media query                                                                 */
/* -------------------------------------------------------------------------- */

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
