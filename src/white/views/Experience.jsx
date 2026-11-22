"use client";

import { education, experience, images, photos, stats } from "../data";
import { CountUp, Reveal } from "../editorial/motion";
import { ButtonLink, ContactBand, Intro, JobPhotos, PageHeader, stagger } from "../editorial/ui";
import { useCvUrl } from "../hooks";

export default function Experience({ jobPhotos = {} }) {
  const cvUrl = useCvUrl(images.cv);

  return (
    <>
      <PageHeader
        trail={[{ name: "Experience", href: "/experience" }]}
        media={photos.seminar}
        title="Experience & education"
        lede="The roles, companies and studies that shaped how I build software, from client work to enterprise SaaS."
      >
        <ButtonLink href="/resume" internal>
          One-page résumé
        </ButtonLink>
        <ButtonLink href={cvUrl} variant="secondary" download="Pappu_Dey_CV.pdf">
          Download CV
        </ButtonLink>
      </PageHeader>

      {/* =============================== 01 work ============================= */}
      <section className="et-section" aria-labelledby="work-experience">
        <div className="et-container">
          <Intro index="01" title="Work experience" id="work-experience" />
          <ol className="et-jobs">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.org} className="et-job" delay={stagger(i)}>
                <p className="label-lg et-job__period">{job.period}</p>
                <div>
                  <div className="et-job__head">
                    <h3 className="h4">{job.role}</h3>
                    <span className="body-sm et-job__loc">{job.location}</span>
                  </div>
                  <p className="body-md et-job__org">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="et-link">
                        {job.org}
                      </a>
                    ) : (
                      job.org
                    )}{" "}
                    · {job.type}
                  </p>
                  <p className="body-md et-job__summary">{job.description}</p>
                  <ul className="et-bullets body-md et-job__highlights">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <p className="label-lg et-job__stack">{job.stack}</p>
                  <JobPhotos job={job} photos={jobPhotos[job.photoFolder]} />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================= 02 education ========================== */}
      <section className="et-section" aria-labelledby="education">
        <div className="et-container">
          <Intro index="02" title="Education" id="education" />
          <ul className="et-edu__list">
            {education.map((e, i) => (
              <Reveal as="li" key={e.institution} className="et-edu__item" delay={stagger(i)}>
                <span>
                  <span className="h5">{e.institution}</span>
                  <span className="body-md et-muted">{e.degree}</span>
                  <span className="body-sm et-muted et-edu__note">{e.note}</span>
                </span>
                <span className="label-lg et-edu__period">{e.period}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================ 03 at a glance ========================= */}
      <section className="et-section" aria-labelledby="glance">
        <div className="et-container">
          <Intro index="03" title="At a glance" id="glance" />
          <Reveal as="dl" className="et-hero__stats et-statbar">
            {stats.map((s) => (
              <div key={s.label} className="et-hero__stat">
                <dt className="label-lg">{s.label}</dt>
                <dd className="h1">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
