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
/* Live site content — resolves admin-managed values from the backend when   */
/* VITE_API_BASE_URL is configured; every consumer falls back to its         */
/* bundled/static value otherwise (unset, or the API unreachable), so the    */
/* site never breaks. One shared cached fetch backs every hook below, so a   */
/* page pulling in more than one of them (e.g. Home's CV link + testimonial  */
/* photos) still only hits /api/public/site-content once.                   */
/* -------------------------------------------------------------------------- */

const API_BASE = import.meta.env.VITE_API_BASE_URL;
let siteContentPromise = null;

function fetchSiteContent() {
  if (!API_BASE) return Promise.resolve(null);
  if (!siteContentPromise) {
    siteContentPromise = fetch(`${API_BASE}/api/public/site-content`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch(() => null);
  }
  return siteContentPromise;
}

export function useCvUrl(fallback) {
  const [url, setUrl] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((data) => {
      if (cancelled) return;
      setUrl(data?.profile?.cv_url ? `${API_BASE}${data.profile.cv_url}` : fallback);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return url;
}

/* Testimonials with admin-uploaded photos — `avatar` is only present once a
   photo has actually been set for that person; callers fall back to a
   lettered avatar (see initialsOf in lib/initials.js) when it's absent,
   same as before this existed. */
export function useTestimonials(fallback) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((data) => {
      if (cancelled) return;
      if (!data?.testimonials?.length) {
        setItems(fallback);
        return;
      }
      setItems(
        data.testimonials.map((t) => ({
          ...t,
          avatar: t.avatar ? `${API_BASE}${t.avatar}` : null,
        })),
      );
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return items;
}

/* Services with admin-managed detail pages — `slug`/`contentMd`/`image` are
   only present once an admin has filled in the detail content for that
   service; a card with no slug stays exactly as it renders today (a plain,
   non-linked card), so this is additive, not a breaking change for anyone
   who hasn't written a detail page yet. */
export function useServices(fallback) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((data) => {
      if (cancelled) return;
      if (!data?.services?.length) {
        setItems(fallback);
        return;
      }
      setItems(
        data.services.map((s) => ({
          ...s,
          image: s.image ? `${API_BASE}${s.image}` : null,
        })),
      );
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return items;
}

/* Single service, looked up by slug for the /services/:slug detail page —
   no dedicated public endpoint for this exists since the aggregate payload
   already carries every service's full content. */
export function useService(slug) {
  const [state, setState] = useState({ service: null, loading: true });

  useEffect(() => {
    let cancelled = false;
    setState({ service: null, loading: true });
    fetchSiteContent().then((data) => {
      if (cancelled) return;
      const found = data?.services?.find((s) => s.slug === slug);
      setState({
        service: found
          ? { ...found, image: found.image ? `${API_BASE}${found.image}` : null }
          : null,
        loading: false,
      });
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return state;
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
