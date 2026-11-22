import JsonLd from "../../white/editorial/JsonLd";
import { getServices } from "../../white/lib/server";
import { absoluteUrl, breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Services from "../../white/views/Services";

const description =
  "What Pappu Dey builds: SaaS and web apps, Android apps, AI automation, DevOps and cloud, APIs and hardware integration, and how each project runs.";

export const metadata = pageMeta({ title: "Services", description, path: "/services" });

export default async function Page() {
  const services = await getServices();
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path: "/services", name: "Services by Pappu Dey", description }),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/services/${s.slug}`),
                name: s.title,
              })),
            },
          },
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
        )}
      />
      <Services services={services} />
    </>
  );
}
