import { absoluteUrl, SITE } from "../white/seo";

export const dynamic = "force-static";

/* Open to every crawler, including AI assistants (GPTBot, ClaudeBot,
   PerplexityBot…): being citable by them is a goal for a personal site. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
