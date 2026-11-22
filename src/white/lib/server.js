/* Build-time (server-only) helpers shared by the app routes. */

import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { projects, services as localServices } from "../data";
import { formatPostDate, getAllPosts, getServiceDetails, readingTime } from "./blog";
import { slugify } from "./slugify";

/* Photo lists per role from public/experience/<folder>/, sorted by name.
   Read at build time, so dropping photos in a folder and rebuilding is all
   it takes. */
export function getJobPhotos() {
  const root = path.join(process.cwd(), "public", "experience");
  const out = {};
  if (!fs.existsSync(root)) return out;
  for (const folder of fs.readdirSync(root)) {
    const dir = path.join(root, folder);
    if (!fs.statSync(dir).isDirectory()) continue;
    out[folder] = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/experience/${folder}/${encodeURIComponent(f)}`);
  }
  return out;
}

/* Post summaries for cards: no markdown sent to the browser. */
export async function getPostSummaries() {
  const posts = await getAllPosts();
  return posts.map(toSummary);
}

export const toSummary = (p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt || "",
  tags: p.tags || [],
  cover: p.cover_image_url || null,
  publishedAt: p.published_at,
  date: formatPostDate(p.published_at),
  minutes: readingTime(p.content_md),
});

/* ------------------------------- services -------------------------------- */

/* Which shipped projects demonstrate a service. Only services with a real
   case study get one; the others get none rather than a stretched claim. */
const RELATED_PROJECT_IDS = {
  "saas-web-applications": ["e-clearance", "codex-lms", "mini-dokan"],
  "android-mobile-apps": ["cribo-health-app"],
};

/* Every service with a detail page. Admin-written pages from the API win;
   otherwise each local service gets a page built from the bundled data. */
export async function getServices() {
  const fromApi = await getServiceDetails();
  const list = fromApi.length
    ? fromApi
    : localServices.map((s) => ({ ...s, slug: slugify(s.title) }));
  return list.map((s) => ({
    slug: s.slug,
    title: s.title,
    description: s.description || "",
    seoTitle: s.seoTitle || null,
    seoDescription: s.seoDescription || null,
    image: s.image || null,
    html: s.contentMd ? marked.parse(s.contentMd) : "",
    related: (RELATED_PROJECT_IDS[s.slug] || [])
      .map((id) => projects.find((p) => p.id === id))
      .filter(Boolean)
      .map((p) => ({ id: p.id, name: p.name, category: p.category, live: p.live, year: p.year })),
  }));
}
