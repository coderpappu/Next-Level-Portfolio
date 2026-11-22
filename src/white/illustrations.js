/* Isometric hairline illustrations (public/illustrations/, generated with
   the Editorial Taste iso.py tool) for topics that have no honest photo:
   services such as AI automation, DevOps and APIs, and blog articles. */

import { photos } from "./data";

const art = (name, width, height, alt) => ({
  kind: "illustration",
  src: `/illustrations/${name}.svg`,
  width,
  height,
  alt,
});

export const servicesArt = art("services", 695, 464, "Isometric drawing of six modules: web apps, mobile, AI, cloud, APIs and IoT");

/* Header image per service page: a real screenshot or photo where one
   exists, an illustration otherwise. */
const SERVICE_MEDIA = {
  "saas-web-applications": { ...photos.eClearance, kind: "photo" },
  "android-mobile-apps": { ...photos.criboApp, kind: "photo" },
  "hardware-integration": { ...photos.borderRobot, kind: "photo" },
  "ai-automation": art("ai-automation", 598, 404, "Isometric drawing of an automation flow: input, model, action"),
  "devops-cloud-infrastructure": art("devops-cloud-infrastructure", 460, 440, "Isometric drawing of three layers: code, CI/CD and cloud"),
  "api-development": art("api-development", 598, 404, "Isometric drawing of a request path: client, API, database"),
};
export const serviceMedia = (slug) => SERVICE_MEDIA[slug] || servicesArt;

/* Cover art per blog article (used when a post has no cover photo). */
const POST_ART = {
  "multi-tenant-saas-lessons-e-clearance": ["post-multi-tenant", 460, 440],
  "why-postgresql-and-prisma-are-my-default": ["post-postgres", 640, 432],
  "running-codex-devware-while-employed-full-time": ["post-founder", 598, 404],
  "what-icpc-taught-me-about-production-code": ["post-icpc", 529, 348],
};
export function postArt(post) {
  if (post.cover) return { kind: "photo", src: post.cover, width: 1200, height: 630, alt: "" };
  const [name, w, h] = POST_ART[post.slug] || ["article", 390, 308];
  return art(name, w, h, "");
}
