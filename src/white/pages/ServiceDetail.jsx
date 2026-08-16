import { marked } from "marked";
import { useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { profile } from "../data";
import { useService } from "../hooks";
import { GlyphLink } from "../ui";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { service, loading } = useService(slug);

  const html = useMemo(() => {
    if (!service?.contentMd) return "";
    try {
      return marked.parse(service.contentMd);
    } catch {
      return "<p><em>Could not render this page.</em></p>";
    }
  }, [service]);

  if (loading) {
    return (
      <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
        Loading…
      </p>
    );
  }

  if (!service) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-[color:var(--w-muted)]">
          That service page doesn&apos;t exist, or isn&apos;t reachable right now.
        </p>
        <GlyphLink href="/services" internal>
          Back to Services
        </GlyphLink>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.seoTitle || service.title} | Pappu Dey</title>
        <meta
          name="description"
          content={service.seoDescription || service.description || ""}
        />
      </Helmet>

      <div className="space-y-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-xs text-[color:var(--w-muted)] hover:underline"
        >
          ← Back to Services
        </Link>

        <div>
          <h1 className="text-2xl font-semibold tracking-[-0.01em]">
            {service.title}
          </h1>
          {service.description ? (
            <p className="w-prose mt-2 max-w-[548px] text-sm text-[color:var(--w-muted)]">
              {service.description}
            </p>
          ) : null}
        </div>

        {service.image ? (
          <img
            src={service.image}
            alt=""
            className="w-full rounded-md border border-[color:var(--w-border)] object-cover"
          />
        ) : null}

        {html ? (
          <div
            className="w-blog-content w-prose text-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : null}

        <div className="flex flex-wrap gap-3 border-t border-[color:var(--w-border)] pt-6 text-sm">
          <GlyphLink href={profile.calendly} primary>
            Book a Discovery Call
          </GlyphLink>
          <GlyphLink href="/contact" internal secondary>
            Send a Message
          </GlyphLink>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
