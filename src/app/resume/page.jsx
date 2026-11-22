import JsonLd from "../../white/editorial/JsonLd";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Resume from "../../white/views/Resume";

const description =
  "One-page résumé for Pappu Dey, software engineer and SaaS builder in Bangladesh: experience, projects, skills (React, Node.js, Laravel), education, awards.";

export const metadata = pageMeta({ title: "Résumé", description, path: "/resume" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ type: "ProfilePage", path: "/resume", name: "Pappu Dey — résumé", description }),
          breadcrumbSchema([{ name: "Résumé", path: "/resume" }]),
        )}
      />
      <Resume />
    </>
  );
}
