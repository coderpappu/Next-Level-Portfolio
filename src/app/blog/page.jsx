import JsonLd from "../../white/editorial/JsonLd";
import { getPostSummaries } from "../../white/lib/server";
import { absoluteUrl, breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Blog from "../../white/views/Blog";

const description =
  "Articles by Pappu Dey on software engineering, multi-tenant SaaS architecture, PostgreSQL, and running a software company alongside a full-time engineering job.";

export const metadata = pageMeta({ title: "Blog", description, path: "/blog" });

export default async function Page() {
  const posts = await getPostSummaries();
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ type: "CollectionPage", path: "/blog", name: "Blog", description }),
            mainEntity: {
              "@type": "Blog",
              "@id": `${absoluteUrl("/blog")}#blog`,
              name: "Pappu Dey's blog",
              author: { "@id": absoluteUrl("/#person") },
              blogPost: posts.map((p) => ({
                "@type": "BlogPosting",
                headline: p.title,
                url: absoluteUrl(`/blog/${p.slug}`),
                datePublished: p.publishedAt,
              })),
            },
          },
          breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
        )}
      />
      <Blog posts={posts} />
    </>
  );
}
