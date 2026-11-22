import { notFound } from "next/navigation";
import JsonLd from "../../../white/editorial/JsonLd";
import { getServices } from "../../../white/lib/server";
import { absoluteUrl, breadcrumbSchema, graph, pageMeta } from "../../../white/seo";
import ServiceDetail from "../../../white/views/ServiceDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

async function find(params) {
  const { slug } = await params;
  const services = await getServices();
  return services.find((s) => s.slug === slug) || null;
}

export async function generateMetadata({ params }) {
  const service = await find(params);
  if (!service) return {};
  return pageMeta({
    title: service.seoTitle || `${service.title} services`,
    description:
      service.seoDescription ||
      (service.description.length > 130
        ? service.description
        : `${service.description} By Pappu Dey, Bangladesh.`),
    path: `/services/${service.slug}`,
  });
}

export default async function Page({ params }) {
  const service = await find(params);
  if (!service) notFound();
  const path = `/services/${service.slug}`;
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Service",
            "@id": `${absoluteUrl(path)}#service`,
            name: service.title,
            description: service.description,
            url: absoluteUrl(path),
            serviceType: service.title,
            provider: { "@id": absoluteUrl("/#person") },
            areaServed: "Worldwide",
          },
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        )}
      />
      <ServiceDetail service={service} />
    </>
  );
}
