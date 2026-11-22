import JsonLd from "../../white/editorial/JsonLd";
import { absoluteUrl, breadcrumbSchema, graph, pageMeta } from "../../white/seo";
import Scanf from "../../white/views/Scanf";

const description =
  "Scanf is a free document scanner app by Pappu Dey: capture, crop, enhance and extract text, then export PDFs or images. No ads, no in-app purchases.";

export const metadata = pageMeta({
  title: "Scanf — free document scanner app",
  description,
  path: "/scanf-app-download",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "SoftwareApplication",
            name: "Scanf",
            description,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Android",
            softwareVersion: "1.0",
            url: absoluteUrl("/scanf-app-download"),
            author: { "@id": absoluteUrl("/#person") },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
          breadcrumbSchema([{ name: "Scanf", path: "/scanf-app-download" }]),
        )}
      />
      <Scanf />
    </>
  );
}
