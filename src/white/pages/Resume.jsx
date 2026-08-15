import { Printer } from "lucide-react";
import { Helmet } from "react-helmet";
import {
  awards,
  education,
  experience,
  images,
  profile,
  projects,
  techStack,
} from "../data";
import { GlyphLink } from "../ui";

const Rule = ({ children }) => (
  <h2 className="mb-3 border-b border-[color:var(--w-border)] pb-1 text-xs uppercase tracking-[0.18em]">
    {children}
  </h2>
);

const Resume = () => (
  <div className="w-resume-page">
    <Helmet>
      <title>Résumé | Pappu Dey</title>
      <meta
        name="description"
        content="One-page résumé for Pappu Dey — Software Engineer and SaaS Builder in Chattogram, Bangladesh. React, Node.js, Laravel, PostgreSQL."
      />
    </Helmet>

    {/* ------------------------------- header ------------------------------- */}
    <header className="mb-8 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-sm">
          {profile.roleA} &amp; {profile.roleB} · {profile.location}
        </p>
        <p className="mt-1 text-xs text-[color:var(--w-muted)]">
          {profile.email} · {profile.site} · github.com/coderpappu ·
          linkedin.com/in/coderpappu
        </p>
      </div>

      <div className="w-no-print flex shrink-0 flex-col gap-2">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[color:var(--w-border)] bg-transparent px-3 py-2 text-xs text-[color:var(--w-text)] transition-colors hover:bg-[color:var(--w-hover)]"
        >
          <Printer className="h-3.5 w-3.5" aria-hidden="true" />
          Print / Save as PDF
        </button>
        <span className="text-center text-[11px] text-[color:var(--w-muted)]">
          <GlyphLink href={images.cv}>Original PDF</GlyphLink>
        </span>
      </div>
    </header>

    {/* ------------------------------- summary ------------------------------ */}
    <section className="mb-7">
      <Rule>Summary</Rule>
      <p className="text-sm">
        Software engineer with 4+ years building production web applications and
        multi-tenant SaaS platforms. Currently architecting an enterprise HRM
        SaaS at Xceed Bangladesh LTD, and founder of Codex Devware. Comfortable
        across the whole stack — React and Next.js on the front, Node.js and
        Laravel behind it, PostgreSQL and Prisma underneath — plus Android,
        DevOps, AI automation, and IoT hardware integration.
      </p>
    </section>

    {/* ------------------------------ experience ---------------------------- */}
    <section className="mb-7">
      <Rule>Experience</Rule>
      <div className="space-y-5">
        {experience.map((job) => (
          <div key={job.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-sm font-semibold">
                {job.role} — {job.org}
              </h3>
              <span className="text-xs text-[color:var(--w-muted)]">
                {job.period} · {job.location}
              </span>
            </div>
            <p className="mt-1 text-sm">{job.description}</p>
            <p className="mt-0.5 text-xs text-[color:var(--w-tertiary)]">
              Stack: {job.stack}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ------------------------------- projects ----------------------------- */}
    <section className="mb-7">
      <Rule>Selected Projects</Rule>
      <div className="space-y-3">
        {projects.slice(0, 4).map((p) => (
          <div key={p.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-sm font-semibold">
                {p.name} — {p.category}
              </h3>
              <span className="text-xs text-[color:var(--w-muted)]">
                {p.year}
              </span>
            </div>
            <p className="text-sm">{p.description}</p>
            <p className="text-xs text-[color:var(--w-tertiary)]">
              {p.stack.join(" · ")} · {p.live.replace(/^https?:\/\//, "")}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* -------------------------------- skills ------------------------------ */}
    <section className="mb-7">
      <Rule>Technical Skills</Rule>
      <dl className="space-y-1.5">
        {techStack.map((group) => (
          <div key={group.label} className="flex gap-3 text-sm">
            <dt className="w-32 shrink-0 font-semibold text-[color:var(--w-heading)]">
              {group.label}
            </dt>
            <dd className="flex-1">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>

    {/* ------------------------------ education ----------------------------- */}
    <section className="mb-7">
      <Rule>Education</Rule>
      <div className="space-y-2">
        {education.map((e) => (
          <div
            key={e.institution}
            className="flex flex-wrap items-baseline justify-between gap-x-4"
          >
            <h3 className="text-sm font-semibold">
              {e.degree} — {e.institution}
            </h3>
            <span className="text-xs text-[color:var(--w-muted)]">
              {e.period}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* -------------------------------- awards ------------------------------ */}
    <section>
      <Rule>Awards &amp; Recognition</Rule>
      <ul className="list-inside list-disc space-y-1 text-sm">
        {awards.map((a) => (
          <li key={a.title}>
            <strong className="font-semibold text-[color:var(--w-heading)]">
              {a.title}
            </strong>{" "}
            — {a.subtitle}, {a.year}. {a.role}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Resume;
