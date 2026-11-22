import JsonLd from "../../white/editorial/JsonLd";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import About from "../../white/views/About";

const description =
  "Pappu Dey, software engineer and founder in Chattogram, Bangladesh: his background, the SaaS platforms he has built, his journey and quick facts.";

export const metadata = pageMeta({ title: "About", description, path: "/about" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ type: "AboutPage", path: "/about", name: "About Pappu Dey", description }),
          breadcrumbSchema([{ name: "About", path: "/about" }]),
        )}
      />
      <About />
    </>
  );
}
