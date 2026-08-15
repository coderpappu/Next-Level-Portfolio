import { useState } from "react";
import { Helmet } from "react-helmet";
import { ProjectHoverCard } from "../HoverCard";
import { Reveal } from "../motion";
import {
  Badge,
  Chip,
  GlyphLink,
  IconButton,
  LocationLine,
  MediaItem,
  RecordCard,
  RingAvatar,
  Section,
} from "../ui";
import {
  aboutParagraphs,
  awards,
  education,
  experience,
  images,
  knownFor,
  professionalProfiles,
  profile,
  projects,
  skills,
  socials,
  testimonials,
} from "../data";

const TABS = [
  { id: "career", label: "Career Story" },
  { id: "latest", label: "Latest Work" },
];

const Prose = ({ parts }) =>
  parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <GlyphLink key={i} href={part.href} internal={part.internal}>
        {part.text}
      </GlyphLink>
    ),
  );

const Home = () => {
  const [tab, setTab] = useState("career");

  return (
    <>
      <Helmet>
        <title>
          Pappu Dey — Software Engineer &amp; SaaS Builder | React, Node.js,
          Laravel
        </title>
        <meta
          name="description"
          content="Pappu Dey is a software engineer and founder from Chattogram, Bangladesh, building multi-tenant SaaS platforms, production web applications, and AI automation systems."
        />
      </Helmet>

      {/* ------------------------------- hero ------------------------------- */}
      <header className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="w-full flex-1 space-y-2">
          <h1 className="text-2xl font-bold" id="pappu-dey">
            {profile.headline}
          </h1>

          <p className="max-w-lg text-sm">{profile.intro}</p>

          <div className="my-4 text-sm" aria-label="Known for">
            <h2 className="text-lg font-medium">Known for</h2>
            <ul className="list-inside list-disc">
              {knownFor.map((item) => {
                const project = item.projectId
                  ? projects.find((p) => p.id === item.projectId)
                  : null;
                const link = (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                );
                return (
                  <li key={item.label}>
                    {/* Named products get a hover preview of the real thing. */}
                    {project ? (
                      <ProjectHoverCard project={project}>{link}</ProjectHoverCard>
                    ) : (
                      link
                    )}
                    {item.suffix}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="my-4 text-sm" aria-label="Professional profiles">
            <h2 className="text-lg font-medium">Professional Profiles</h2>
            <ul className="mt-2 flex flex-wrap space-x-4 space-y-2">
              {professionalProfiles.map((p) => (
                <li key={p.href}>
                  <GlyphLink href={p.href}>{p.label}</GlyphLink>
                </li>
              ))}
            </ul>
          </div>

          <LocationLine label={profile.location} href={profile.mapsUrl} />

          <ul
            className="flex w-full list-none gap-x-2 pt-1 text-sm print:hidden"
            aria-label="Contact links"
          >
            {socials.map((s) => (
              <li key={s.title}>
                <IconButton
                  icon={s.icon}
                  title={s.title}
                  href={s.href}
                  download={s.download}
                />
              </li>
            ))}
          </ul>

          <div className="hidden gap-x-2 text-sm print:flex print:text-[12px]">
            <span>{profile.email}</span>
            <span aria-hidden="true">/</span>
            <span>{profile.github}</span>
            <span aria-hidden="true">/</span>
            <span>{profile.linkedin}</span>
          </div>
        </div>

        <RingAvatar
          src={images.avatar}
          alt={`Portrait of ${profile.name}`}
          size={220}
        />
      </header>

      {/* --------------------------- tab control ---------------------------- */}
      <div className="flex justify-end space-x-3" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`cursor-pointer transition-colors ${
              tab === t.id ? "w-chip" : "w-chip-secondary"
            } !px-3 !py-1 !text-sm`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ------------------------- panel: career ---------------------------- */}
      <div
        id="panel-career"
        role="tabpanel"
        aria-labelledby="tab-career"
        hidden={tab !== "career"}
        className="space-y-12"
      >
        <Section id="about" title="About Me">
          <div className="space-y-2 text-sm">
            {aboutParagraphs.map((p) => (
              <div key={p.id}>
                <Prose parts={p.parts} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work Experience">
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

        <Section id="education" title="Education">
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
                <p className="mt-1 text-sm text-[color:var(--w-muted)]">
                  {e.note}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="flex list-none flex-wrap gap-1 p-0" aria-label="List of skills">
            {skills.map((s) => (
              <li key={s}>
                <Chip active aria-label={`Skill: ${s}`}>
                  {s}
                </Chip>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ------------------------- panel: latest ---------------------------- */}
      <div
        id="panel-latest"
        role="tabpanel"
        aria-labelledby="tab-latest"
        hidden={tab !== "latest"}
        className="space-y-12"
      >
        <Section title="Featured Projects">
          <div className="space-y-12">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <MediaItem
                  image={p.image}
                  title={p.name}
                  titleHref={p.live}
                  excerpt={p.description}
                  meta={p.year}
                  links={[
                    { label: "Live Site", href: p.live },
                    { label: "Source", href: p.repo },
                  ]}
                />
              </Reveal>
            ))}
          </div>
          <div className="text-sm">
            <GlyphLink href="/projects" internal>
              See all projects
            </GlyphLink>
          </div>
        </Section>

        <Section title="Recognition">
          <div className="space-y-12">
            {awards.map((a) => (
              <RecordCard
                key={a.title}
                title={a.title}
                subtitle={a.subtitle}
                meta={a.year}
                role={a.role}
                description={a.description}
                links={a.links}
              />
            ))}
          </div>
        </Section>

        <Section title="What Clients Say">
          <div className="space-y-12">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="space-y-2">
                <blockquote className="text-sm">{t.quote}</blockquote>
                <figcaption className="text-sm text-[color:var(--w-muted)]">
                  — {t.name}, {t.title}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-sm">
            <GlyphLink href="/testimonials" internal>
              Read all testimonials
            </GlyphLink>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home;
