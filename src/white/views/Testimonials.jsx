"use client";

import { photos, testimonials } from "../data";
import { Reveal } from "../editorial/motion";
import { ContactBand, PageHeader, stagger } from "../editorial/ui";
import { useTestimonials } from "../hooks";
import { initialsOf } from "../lib/initials";

export default function Testimonials() {
  const items = useTestimonials(testimonials);

  return (
    <>
      <PageHeader
        trail={[{ name: "Testimonials", href: "/testimonials" }]}
        media={photos.rlcTeam}
        title="What people say"
        lede="Colleagues, clients and institutions on working with me on SaaS platforms, web applications and mobile apps."
      />

      <section className="et-section" aria-label="Testimonials">
        <div className="et-container">
          <ul className="et-testimonials">
            {items.map((t, i) => (
              <li key={t.name}>
                <Reveal as="figure" className="et-testimonial" delay={stagger(i % 2)}>
                  <blockquote className="h5">
                    <span aria-hidden="true">“</span>
                    {t.quote}
                    <span aria-hidden="true">”</span>
                  </blockquote>
                  <figcaption className="et-quote__by">
                    {t.avatar ? (
                      <img src={t.avatar} alt="" className="et-avatar" />
                    ) : (
                      <span className="et-avatar" aria-hidden="true">
                        {initialsOf(t.name)}
                      </span>
                    )}
                    <span>
                      <span className="body-md et-quote__name">{t.name}</span>
                      <span className="label-lg et-muted">{t.title}</span>
                    </span>
                  </figcaption>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
