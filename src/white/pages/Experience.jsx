import { Helmet } from "react-helmet";
import { Badge, GlyphLink, PageTitle, Section } from "../ui";
import { education, experience, images, stats } from "../data";

const Experience = () => (
  <>
    <Helmet>
      <title>Experience | Pappu Dey</title>
      <meta
        name="description"
        content="Pappu Dey's work experience and education — Software Engineer at Xceed Bangladesh LTD, Founder of Codex Devware, and Web Application Developer at Research Lab Chattogram."
      />
    </Helmet>

    <PageTitle lede="Browse the roles, companies, and studies that shaped how Pappu Dey builds software.">
      Pappu Dey&apos;s Experience &amp; Education
    </PageTitle>

    <Section title="Work Experience" bold>
      <div className="space-y-12">
        {experience.map((job) => (
          <div key={job.org} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-base font-medium">{job.role}</h3>
                <p className="text-sm">
                  {job.org} · {job.type}
                </p>
              </div>
              <div className="flex flex-col items-start text-sm md:items-end">
                <Badge>{job.location}</Badge>
                <span className="mt-1">{job.period}</span>
              </div>
            </div>
            <p className="text-sm">{job.description}</p>
            <ul className="list-none space-y-1 p-0 my-3">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm leading-snug">
                  <span
                    className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[color:var(--w-sep)]"
                    aria-hidden="true"
                  />
                  <span className="w-prose">{h}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[color:var(--w-tertiary)]">
              Stack: {job.stack}
            </p>
            {job.url ? (
              <p className="mt-1 text-sm">
                <GlyphLink href={job.url}>{job.url}</GlyphLink>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>

    <Section title="Education" bold>
      <div className="space-y-4">
        {education.map((e) => (
          <article key={e.institution}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
              <div>
                <h3 className="text-base font-medium">{e.institution}</h3>
                <p className="text-sm">{e.degree}</p>
              </div>
              <span className="shrink-0 text-sm text-[color:var(--w-muted)]">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[color:var(--w-muted)]">{e.note}</p>
          </article>
        ))}
      </div>
    </Section>

    <Section title="At a Glance" bold>
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="w-display block text-[28px] font-semibold leading-8 tabular-nums tracking-[-0.01em] text-[color:var(--w-heading)]">
                {s.value}
              </span>
              <span className="text-xs text-[color:var(--w-muted)]">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-3 text-sm">
        <GlyphLink href="/resume" internal primary>
          One-page résumé
        </GlyphLink>
        <GlyphLink href={images.cv} secondary>
          Download full CV (PDF)
        </GlyphLink>
      </div>
    </Section>
  </>
);

export default Experience;
