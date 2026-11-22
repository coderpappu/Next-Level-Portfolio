import JsonLd from "../../white/editorial/JsonLd";
import { breadcrumbSchema, graph, pageMeta, webPageSchema } from "../../white/seo";
import Awards from "../../white/views/Awards";

const description =
  "Awards earned by Pappu Dey: a Certificate of Achievement from Chattogram Polytechnic Institute for E-Clearance, and ICPC Asia Dhaka Regional 2024.";

export const metadata = pageMeta({ title: "Awards", description, path: "/awards" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/awards", name: "Awards & recognition", description }),
          breadcrumbSchema([{ name: "Awards", path: "/awards" }]),
        )}
      />
      <Awards />
    </>
  );
}
