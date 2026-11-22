import JsonLd from "../../white/editorial/JsonLd";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Contact from "../../white/views/Contact";

const description =
  "Contact Pappu Dey, software engineer in Chattogram, Bangladesh. Book a free 15-minute call or send a project brief; replies usually within a day.";

export const metadata = pageMeta({ title: "Contact", description, path: "/contact" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ type: "ContactPage", path: "/contact", name: "Contact Pappu Dey", description }),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        )}
      />
      <Contact />
    </>
  );
}
