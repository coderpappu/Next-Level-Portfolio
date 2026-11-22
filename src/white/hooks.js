"use client";

import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Live site content: resolves admin-managed values from the backend in the   */
/* browser when NEXT_PUBLIC_API_BASE_URL is set. Every hook starts from the   */
/* bundled value (that is also what the static HTML contains), so the site    */
/* works and is fully crawlable with the API unset or down. One shared cached */
/* fetch backs all of them.                                                   */
/* -------------------------------------------------------------------------- */

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";
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

/* Admin-uploaded CV, falling back to the bundled PDF. */
export function useCvUrl(fallback) {
  const [url, setUrl] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((data) => {
      if (cancelled) return;
      if (data?.profile?.cv_url) setUrl(`${API_BASE}${data.profile.cv_url}`);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return url;
}

/* Testimonials with admin-uploaded photos. `avatar` is only present once a
   photo has been set; callers fall back to initials. */
export function useTestimonials(fallback) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((data) => {
      if (cancelled || !data?.testimonials?.length) return;
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
  }, []);

  return items;
}

/* -------------------------------------------------------------------------- */
/* Media query (SSR-safe: false until mounted)                                */
/* -------------------------------------------------------------------------- */

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
