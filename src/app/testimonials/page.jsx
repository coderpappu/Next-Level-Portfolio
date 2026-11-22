import JsonLd from "../../white/editorial/JsonLd";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Testimonials from "../../white/views/Testimonials";

const description =
  "What colleagues, clients and institutions say about working with Pappu Dey on SaaS platforms, web applications and mobile apps.";

export const metadata = pageMeta({ title: "Testimonials", description, path: "/testimonials" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/testimonials", name: "Testimonials", description }),
          breadcrumbSchema([{ name: "Testimonials", path: "/testimonials" }]),
        )}
      />
      <Testimonials />
    </>
  );
}
