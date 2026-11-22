/* ---------------------------------------------------------------------------
   Blog + services content for build time (server only).

   With a static export, every page is rendered once, at `next build`. These
   helpers fetch from the backend API when NEXT_PUBLIC_API_BASE_URL is set and
   reachable, and fall back to the built-in posts (postsFallback.js) when it
   is not, so the blog always has real, crawlable content. Publishing a new
   post from the admin panel means: rebuild, then upload out/.
   --------------------------------------------------------------------------- */

import { fallbackPosts } from "./postsFallback";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

async function apiGet(path) {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      signal: AbortSignal.timeout(4000),
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/* Prefixes a server-relative media path ("/uploads/posts/x.jpg") with the API
   origin so it resolves whether the site and API share a domain or not. */
export function resolveMediaUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE}${path}`;
}

const byNewest = (a, b) =>
  new Date(b.published_at).getTime() - new Date(a.published_at).getTime();

/* Every published post, newest first, each with its full markdown. */
export async function getAllPosts() {
  const list = await apiGet("/api/public/posts?page=1&pageSize=100");
  if (!list?.items?.length) return [...fallbackPosts].sort(byNewest);

  const full = await Promise.all(
    list.items.map(async (item) => {
      if (item.content_md) return item;
      const post = await apiGet(`/api/public/posts/${item.slug}`);
      return post ? { ...item, ...post } : item;
    }),
  );
  return full.sort(byNewest);
}

export async function getPost(slug) {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/* Services that have an admin-written detail page (slug + content). */
export async function getServiceDetails() {
  const data = await apiGet("/api/public/site-content");
  return (data?.services || [])
    .filter((s) => s.slug)
    .map((s) => ({ ...s, image: s.image ? resolveMediaUrl(s.image) : null }));
}

/* ------------------------------- formatting ------------------------------- */

export function formatPostDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/* Minutes to read, at ~220 words a minute. */
export function readingTime(markdown) {
  if (!markdown) return null;
  const words = markdown.replace(/[`#*_>[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
