"use client";

import Link from "next/link";
import { process, techStack } from "../data";
import { Reveal } from "../editorial/motion";
import { ContactBand, Intro, PageHeader, pad, stagger, TertiaryLink } from "../editorial/ui";
import { servicesArt } from "../illustrations";

export default function Services({ services }) {
  return (
    <>
      <PageHeader
        trail={[{ name: "Services", href: "/services" }]}
        media={servicesArt}
        title="Services"
        lede="One engineer across every layer: web, mobile, cloud, AI and hardware. Here is what I build and how the work runs."
      />

      {/* ============================== 01 what i build ====================== */}
      <section className="et-section" aria-labelledby="what-i-build">
        <div className="et-container">
          <Intro index="01" title="What I build" id="what-i-build" />
          <ol className="et-index">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} className="et-index__row" delay={stagger(i)}>
                <span className="label-lg et-index__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3 className="h4">
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </h3>
                <div className="et-svc__body">
                  <p className="body-md">{s.description}</p>
                  {s.related.length > 0 ? (
                    <p className="body-sm et-svc__shipped">
                      <span className="label-lg">Shipped</span>{" "}
                      {s.related.map((p, idx) => (
                        <span key={p.id}>
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="et-link">
                            {p.name}
                          </a>
                          {idx < s.related.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  ) : null}
                  <TertiaryLink href={`/services/${s.slug}`} label="Learn more" internal />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ 02 how i engineer ====================== */}
      <section className="et-section" aria-labelledby="process">
        <div className="et-container">
          <Intro index="02" title="How I engineer" id="process" />
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

      {/* ============================== 03 stack ============================= */}
      <section className="et-section" aria-labelledby="stack">
        <div className="et-container">
          <Intro index="03" title="Technology stack" id="stack" />
          <div className="et-spec">
            {techStack.map((group, i) => (
              <Reveal key={group.label} className="et-spec__col" delay={stagger(i)}>
                <h3 className="label-lg et-spec__label">{group.label}</h3>
                <ul className="et-spec__list" aria-label={`${group.label} technologies`}>
                  {group.items.map((t) => (
                    <li key={t} className="body-lg">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Start a project"
        text="Book a free 15-minute discovery call, or send the details and I will come back with an approach and a rough timeline."
      />
    </>
  );
}
