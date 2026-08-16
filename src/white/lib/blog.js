import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/* Prefixes a server-relative media path ("/uploads/posts/x.jpg") with the API
   origin so it resolves whether the site and API share a domain or not. */
export function resolveMediaUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE || ""}${path}`;
}

/* Fetches the most recent published posts, `limit` at a time. Blog content
   has no static-file fallback (unlike the CV) — if VITE_API_BASE_URL isn't
   configured or the API is unreachable, callers get an empty list plus an
   `unavailable` flag so the UI can say so instead of silently showing nothing. */
export function usePosts({ page = 1, pageSize = 12 } = {}) {
  const [state, setState] = useState({
    posts: [],
    total: 0,
    loading: true,
    unavailable: !API_BASE,
  });

  useEffect(() => {
    if (!API_BASE) {
      setState({ posts: [], total: 0, loading: false, unavailable: true });
      return undefined;
    }

    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));

    fetch(`${API_BASE}/api/public/posts?page=${page}&pageSize=${pageSize}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (cancelled) return;
        setState({
          posts: data.items,
          total: data.total,
          loading: false,
          unavailable: false,
        });
      })
      .catch(() => {
        if (!cancelled) setState({ posts: [], total: 0, loading: false, unavailable: true });
      });

    return () => {
      cancelled = true;
    };
  }, [page, pageSize]);

  return state;
}

export function usePost(slug) {
  const [state, setState] = useState({ post: null, loading: true, notFound: false });

  useEffect(() => {
    if (!API_BASE) {
      setState({ post: null, loading: false, notFound: true });
      return undefined;
    }

    let cancelled = false;
    setState({ post: null, loading: true, notFound: false });

    fetch(`${API_BASE}/api/public/posts/${slug}`)
      .then((res) => {
        if (res.status === 404) return null;
        if (!res.ok) return Promise.reject(res);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ post: data, loading: false, notFound: !data });
      })
      .catch(() => {
        if (!cancelled) setState({ post: null, loading: false, notFound: true });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return state;
}

export function formatPostDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
