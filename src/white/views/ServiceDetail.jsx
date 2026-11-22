"use client";

import { process } from "../data";
import { Reveal } from "../editorial/motion";
import { ButtonLink, ContactBand, Intro, PageHeader, pad, stagger } from "../editorial/ui";
import { serviceMedia } from "../illustrations";

export default function ServiceDetail({ service }) {
  return (
    <>
      <PageHeader
        trail={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
        title={service.title}
        lede={service.description}
        media={
          service.image
            ? { kind: "photo", src: service.image, width: 1200, height: 675, alt: service.title }
            : serviceMedia(service.slug)
        }
      />

      {/* Only when there is something to show: an empty section would leave a
          blank band under the header. */}
      {service.html || service.related.length > 0 ? (
        <section className="et-section" aria-label={service.title}>
          <div className="et-container">
            {service.html ? (
              <Reveal className="et-prose et-article" dangerouslySetInnerHTML={{ __html: service.html }} />
            ) : null}

            {service.related.length > 0 ? (
              <div className={service.html ? "et-svc__related is-spaced" : "et-svc__related"}>
                <Intro title="Shipped work" as="h2" />
                <ol className="et-index">
                  {service.related.map((p, i) => (
                    <Reveal as="li" key={p.id} className="et-index__row" delay={stagger(i)}>
                      <span className="label-lg et-index__num" aria-hidden="true">
                        {pad(i + 1)}
                      </span>
                      <h3 className="h4">{p.name}</h3>
                      <div className="et-svc__body">
                        <p className="body-md">
                          {p.category} · {p.year}
                        </p>
                        <ButtonLink href={p.live} variant="secondary">
                          Live site
                        </ButtonLink>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* How the work runs, so every service page answers "what happens next". */}
      <section className="et-section" aria-labelledby="how-it-runs">
        <div className="et-container">
          <Intro title="How the work runs" id="how-it-runs" />
          <ol className="et-steps">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={stagger(i)}>
                <span className="label-lg et-steps__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3 className="h4">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand title="Start a project" text={`Need help with ${service.title}? Book a free 15-minute call, or send the details and I will reply with an approach and a rough timeline.`} />
    </>
  );
}
