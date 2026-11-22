"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data";
import { Reveal } from "../editorial/motion";
import { ButtonLink, ContactBand, PageHeader } from "../editorial/ui";

const ALL_TECH = [...new Set(projects.flatMap((p) => p.stack))].sort();

export default function Projects() {
  const [selected, setSelected] = useState([]);

  const toggle = (tech) =>
    setSelected((cur) =>
      cur.includes(tech) ? cur.filter((t) => t !== tech) : [...cur, tech],
    );

  // A project matches when it uses every selected technology.
  const visible = useMemo(
    () =>
      selected.length === 0
        ? projects
        : projects.filter((p) => selected.every((t) => p.stack.includes(t))),
    [selected],
  );

  return (
    <>
      <PageHeader
        trail={[{ name: "Projects", href: "/projects" }]}
        title="Projects"
        lede="SaaS platforms, web applications and mobile apps I have designed, built and shipped for institutions, startups and my own company, each with the limit I deliberately left in."
      />

      <section className="et-section" aria-label="Project list">
        <div className="et-container">
          {/* ------------------------------ filter ---------------------------- */}
          <div className="et-filter">
            <div className="et-filter__head">
              <h2 className="label-lg">Filter by stack</h2>
              <p className="label-lg" aria-live="polite">
                {visible.length} of {projects.length} projects
              </p>
            </div>
            <ul className="et-chips">
              {ALL_TECH.map((tech) => (
                <li key={tech}>
                  <button
                    type="button"
                    className="et-chip"
                    aria-pressed={selected.includes(tech)}
                    onClick={() => toggle(tech)}
                  >
                    {tech}
                  </button>
                </li>
              ))}
              {selected.length > 0 ? (
                <li>
                  <button type="button" className="et-chip" onClick={() => setSelected([])}>
                    <X aria-hidden="true" />
                    Clear
                  </button>
                </li>
              ) : null}
            </ul>
          </div>

          {/* ------------------------------ records --------------------------- */}
          {visible.length === 0 ? (
            <div className="et-empty">
              <p className="h5">No project uses every selected technology.</p>
              <p className="body-md et-muted">Remove a filter to see more.</p>
              <button type="button" className="btn btn--secondary" onClick={() => setSelected([])}>
                Clear filters
              </button>
            </div>
          ) : (
            <ul className="et-records">
              {visible.map((p) => (
                <li key={p.id}>
                  <Reveal as="article" className="et-record" aria-labelledby={`project-${p.id}`}>
                    <div className="et-record__media">
                      <img
                        src={p.image}
                        alt={`${p.name}: ${p.category}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="et-record__text">
                      <p className="label-lg et-record__meta">
                        {p.category} · {p.year}
                      </p>
                      <h2 id={`project-${p.id}`} className="h3">
                        {p.name}
                      </h2>
                      <p className="body-sm et-record__role">{p.role}</p>
                      <p className="body-md">{p.description}</p>
                      {/* Naming what a system deliberately does not do. */}
                      {p.constraint ? (
                        <div className="et-limit">
                          <p className="label-lg">Known limit</p>
                          <p className="body-sm">{p.constraint}</p>
                        </div>
                      ) : null}
                      <ul className="et-tags" aria-label="Technologies">
                        {p.stack.map((t) => (
                          <li key={t} className="tag">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="et-btn-row">
                        <ButtonLink href={p.live}>Live site</ButtonLink>
                        <ButtonLink href={p.repo} variant="secondary">
                          Source
                        </ButtonLink>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <ContactBand
        title="Have a project like these?"
        text="Tell me what you are building. I reply with an approach and a rough timeline, usually within a day."
      />
    </>
  );
}
