"use client";

import { Download, Printer } from "lucide-react";
import { awards, education, experience, images, photos, profile, projects, techStack } from "../data";
import { Reveal } from "../editorial/motion";
import { PageHeader } from "../editorial/ui";
import { useCvUrl } from "../hooks";

const ICON = { width: 12, height: 12, strokeWidth: 1.5, "aria-hidden": true };

function Block({ label, children }) {
  return (
    <Reveal as="section" className="et-resume__section">
      <h2 className="label-lg et-resume__label">{label}</h2>
      {children}
    </Reveal>
  );
}

export default function Resume() {
  const cvUrl = useCvUrl(images.cv);

  return (
    <>
      <PageHeader
        trail={[{ name: "Résumé", href: "/resume" }]}
        media={photos.avatar}
        title={`${profile.name} — résumé`}
        lede={`${profile.roleA} & ${profile.roleB} · ${profile.location} · ${profile.email}`}
      >
        <button type="button" className="btn btn--primary" onClick={() => window.print()}>
          Print / save as PDF
          <Printer {...ICON} />
        </button>
        <a href={cvUrl} download="Pappu_Dey_CV.pdf" className="btn btn--secondary">
          Original PDF
          <Download {...ICON} />
        </a>
      </PageHeader>

      <section className="et-section" aria-label="Résumé">
        <div className="et-container et-resume">
          <Block label="Summary">
            <p className="body-lg et-resume__summary">
              Software engineer with 4+ years building production web applications and
              multi-tenant SaaS platforms. Currently architecting an enterprise HRM SaaS at
              Xceed Bangladesh LTD, and founder of Codex Devware. Comfortable across the whole
              stack (React and Next.js on the front, Node.js and Laravel behind it, PostgreSQL
              and Prisma underneath), plus Android, DevOps, AI automation and IoT hardware
              integration.
            </p>
          </Block>

          <Block label="Experience">
            {experience.map((job) => (
              <div key={job.org} className="et-resume__item">
                <div className="et-resume__head">
                  <h3 className="h5">
                    {job.role} — {job.org}
                  </h3>
                  <span className="label-lg et-resume__when">{job.period}</span>
                </div>
                <p className="body-md">{job.description}</p>
                <p className="label-lg">{job.stack}</p>
              </div>
            ))}
          </Block>

          <Block label="Selected projects">
            {projects.slice(0, 4).map((p) => (
              <div key={p.id} className="et-resume__item">
                <div className="et-resume__head">
                  <h3 className="h5">
                    {p.name} — {p.category}
                  </h3>
                  <span className="label-lg et-resume__when">{p.year}</span>
                </div>
                <p className="body-md">{p.description}</p>
                <p className="label-lg">
                  {p.stack.join(" · ")} · {p.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </p>
              </div>
            ))}
          </Block>

          <Block label="Technical skills">
            <dl className="et-facts">
              {techStack.map((group) => (
                <div key={group.label} className="et-facts__row">
                  <dt className="label-lg">{group.label}</dt>
                  <dd className="body-md">{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block label="Education">
            {education.map((e) => (
              <div key={e.institution} className="et-resume__item">
                <div className="et-resume__head">
                  <h3 className="h5">
                    {e.degree} — {e.institution}
                  </h3>
                  <span className="label-lg et-resume__when">{e.period}</span>
                </div>
              </div>
            ))}
          </Block>

          <Block label="Awards & recognition">
            {awards.map((a) => (
              <div key={a.title} className="et-resume__item">
                <div className="et-resume__head">
                  <h3 className="h5">{a.title}</h3>
                  <span className="label-lg et-resume__when">{a.year}</span>
                </div>
                <p className="body-md">
                  {a.subtitle}. {a.role}
                </p>
              </div>
            ))}
          </Block>
        </div>
      </section>
    </>
  );
}
