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

    <PageTitle lede="Browse the roles, studios, and studies that shaped how Pappu Dey builds software.">
      Pappu Dey&apos;s Experience &amp; Education
    </PageTitle>

    <Section title="Work Experience">
      <div className="space-y-12">
        {experience.map((job) => (
          <div key={job.org} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-base font-semibold">{job.role}</h3>
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

    <Section title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <article key={e.institution}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold">{e.institution}</h3>
                <p className="text-sm">{e.degree}</p>
              </div>
              <span className="flex-none text-sm">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-[color:var(--w-muted)]">{e.note}</p>
          </article>
        ))}
      </div>
    </Section>

    <Section title="At a Glance">
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-2xl font-bold text-[color:var(--w-heading)]">
                {s.value}
              </span>
              <span className="text-xs text-[color:var(--w-muted)]">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="text-sm">
        <GlyphLink href={images.cv}>Download full CV (PDF)</GlyphLink>
      </div>
    </Section>
  </>
);

export default Experience;
