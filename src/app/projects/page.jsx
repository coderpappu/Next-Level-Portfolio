import JsonLd from "../../white/editorial/JsonLd";
import { projects } from "../../white/data";
import { absoluteUrl, breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Projects from "../../white/views/Projects";

const description =
  "SaaS platforms, web and mobile apps shipped by Pappu Dey: E-Clearance, Dev Tools Hunt, Cribo Health, Codex LMS and more, with the stack behind each.";

export const metadata = pageMeta({ title: "Projects", description, path: "/projects" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ type: "CollectionPage", path: "/projects", name: "Projects by Pappu Dey", description }),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projects.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "CreativeWork",
                  name: p.name,
                  description: p.description,
                  url: p.live,
                  image: absoluteUrl(p.image),
                  dateCreated: p.year,
                  keywords: p.stack.join(", "),
                  creator: { "@id": absoluteUrl("/#person") },
                },
              })),
            },
          },
          breadcrumbSchema([{ name: "Projects", path: "/projects" }]),
        )}
      />
      <Projects />
    </>
  );
}
