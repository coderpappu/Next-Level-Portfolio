import JsonLd from "../../white/editorial/JsonLd";
import { getJobPhotos } from "../../white/lib/server";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Experience from "../../white/views/Experience";

const description =
  "Pappu Dey's experience and education: Software Engineer at Xceed Bangladesh LTD, founder of Codex Devware, and web developer at Research Lab Chattogram.";

export const metadata = pageMeta({ title: "Experience", description, path: "/experience" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ type: "ProfilePage", path: "/experience", name: "Experience & education", description }),
          breadcrumbSchema([{ name: "Experience", path: "/experience" }]),
        )}
      />
      <Experience jobPhotos={getJobPhotos()} />
    </>
  );
}
