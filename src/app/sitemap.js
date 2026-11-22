import { getAllPosts } from "../white/lib/blog";
import { getServices } from "../white/lib/server";
import { absoluteUrl } from "../white/seo";

export const dynamic = "force-static";

/* Every indexable page, built from the same data as the pages themselves,
   so the sitemap can never list a page that does not exist. */
const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experience", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resume", priority: 0.7, changeFrequency: "monthly" },
  { path: "/awards", priority: 0.6, changeFrequency: "yearly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/scanf-app-download", priority: 0.5, changeFrequency: "monthly" },
];

export default async function sitemap() {
  const [posts, services] = await Promise.all([getAllPosts(), getServices()]);
  const newestPost = posts[0]?.published_at;
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: r.path === "/blog" && newestPost ? new Date(newestPost) : now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updated_at || p.published_at),
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
