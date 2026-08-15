import { Helmet } from "react-helmet";
import { ProjectHoverCard } from "../HoverCard";
import {
  images,
  now,
  practice,
  professionalProfiles,
  profile,
  projects,
  skills,
  socials,
  stats,
  experience,
  testimonials,
} from "../data";
import { Reveal } from "../motion";
import {
  Chip,
  GlyphLink,
  IconButton,
  CellMeter,
  LocationPill,
  RingAvatar,
  SectionHead,
} from "../ui";

/* How often each technology appears across the shipped projects. Derived from
   the real project list, so it can never drift from what is actually there. */
const stackFrequency = (() => {
  const counts = new Map();
  projects.forEach((p) =>
    p.stack.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)),
  );
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8);
})();

const featuredQuote = testimonials[0];

/*
 * Section 03 has three stored layouts. Flip this one word to switch:
 *   "columns"   — three verb-led columns
 *   "readout"   — compact label/value status board
 *   "statement" — one bold headline plus supporting prose
 * All three render from `now` in data.js, so none can go stale.
 */
const NOW_LAYOUT = "readout";

const Home = () => (
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

    {/* ================================ hero ================================ */}
    <header className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
      <div className="w-full flex-1 space-y-5">
        <div className="space-y-1">
          <h1
            className="text-3xl font-medium leading-tight md:text-4xl"
            id="pappu-dey"
          >
            {profile.name}
          </h1>
          <p className="text-base text-[color:var(--w-tertiary)] md:text-lg">
            {profile.roleA}{" "}
            <span className="text-[color:var(--w-sep)]">/</span>{" "}
            {profile.roleB}
          </p>
        </div>

        <p className="w-prose max-w-[548px] text-sm">{profile.intro}</p>

        <div className="flex flex-wrap items-center gap-2">
          <LocationPill
            label={profile.location}
            timezone="UTC+6"
            href={profile.mapsUrl}
          />
        </div>

        {/* Two clusters with a hairline between: profiles on the left, ways to
            reach me on the right. Eight identical squares in one run gave no
            clue that they do different kinds of thing. */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1 print:hidden">
          {["profiles", "contact"].map((group, gi) => (
            <div key={group} className="flex items-center gap-4">
              {gi > 0 ? (
                <span
                  className="hidden h-5 w-px sm:block"
                  style={{ backgroundColor: "var(--w-border)" }}
                  aria-hidden="true"
                />
              ) : null}
              <ul
                className="flex list-none gap-2 text-sm"
                aria-label={group === "profiles" ? "Profiles" : "Get in touch"}
              >
                {socials
                  .filter((s) => s.group === group)
                  .map((s) => (
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
            </div>
          ))}
        </div>

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
        size={180}
      />
    </header>

    {/* ============================= 01 what i do ============================ */}
    {/* Width choreography across the page: 896 · 896 · 548 · 5:3 · 896 · 548 ·
        5:3 · 896. Never more than two consecutive sections at one width, and
        the 316px rail recurs so its whitespace reads as structure. */}
    <Reveal as="section">
      <SectionHead
        index="01"
        title="What I Do"
        id="what-i-do"
        action={{ href: "/about", label: "Full bio", internal: true }}
      />
      {/* No lead paragraph here: it opened with the same clause as the hero
          intro two screens up, and capping it to a readable measure left half
          the row empty. The three rows below say it with evidence instead. */}
      <div className="space-y-6">
        {practice.map((item, i) => (
          <div
            key={item.title}
            className="grid gap-x-8 gap-y-1 md:grid-cols-[1.75rem_12rem_1fr]"
          >
            <span
              className="hidden text-[11px] tabular-nums text-[color:var(--w-sep)] md:block"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-sm font-medium text-[color:var(--w-heading)]">
              {item.title}
            </h3>
            <p className="w-prose text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Reveal>

    {/* ============================ 02 selected work ========================= */}
    <Reveal as="section">
      <SectionHead
        index="02"
        title="Selected Work"
        id="work"
        action={{ href: "/projects", label: "All projects", internal: true }}
      />
      {/* Rows run to the card's padding edge (-mx-12) so the hover wash meets
          the border instead of dying 36px short of it. */}
      <ol className="-mx-3 list-none p-0 md:-mx-12">
        {projects.slice(0, 5).map((p, i) => (
          <li key={p.id}>
            <ProjectHoverCard project={p} className="block">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-4 rounded-md px-3 py-3.5 transition-colors hover:bg-[color:var(--w-hover)] md:grid-cols-[1.75rem_minmax(0,13rem)_1fr_auto] md:px-12"
              >
                <span
                  className="text-[11px] tabular-nums text-[color:var(--w-sep)] transition-colors group-hover:text-[color:var(--w-muted)]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-sm font-medium text-[color:var(--w-heading)]">
                  {p.name}
                </span>
                <span className="hidden truncate text-[11px] text-[color:var(--w-muted)] md:block">
                  {p.category}
                </span>
                <span className="text-[11px] tabular-nums text-[color:var(--w-muted)]">
                  {p.year}
                </span>
              </a>
            </ProjectHoverCard>
          </li>
        ))}
      </ol>
    </Reveal>

    {/* ================================ 03 now =============================== */}
    {/* First narrowing of the page — 548px is 65 characters at 14px, the top of
        the comfortable measure. It reads as an aside after two wide sections. */}
    <Reveal as="section">
      <SectionHead index="03" title={`Now — ${now.updated}`} id="now" />

      {/* No measure cap here — it is a single 75-character line, well inside
          the readable range, so capping it only forced a wrap. */}
      <p className="mb-7 text-sm">{now.lead}</p>

      {NOW_LAYOUT === "columns" ? (
        /* Stored version: runs horizontally where 01 and 02 run vertically —
           same grid, rotated, so three consecutive sections do not stripe. */
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-3">
          {now.items.slice(0, 3).map((col) => (
            <div key={col.mode}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--w-muted)]">
                {col.mode}
              </p>
              <h3 className="mt-2 text-sm font-medium text-[color:var(--w-heading)]">
                {col.subject}
              </h3>
              <p className="w-prose mt-2 text-sm">{col.text}</p>
            </div>
          ))}
        </div>
      ) : NOW_LAYOUT === "readout" ? (
        /* Status readout — one row per current thread of work. */
        <div className="space-y-4">
          {now.items.map((col) => (
            <div
              key={col.mode}
              className="grid gap-x-8 gap-y-0.5 md:grid-cols-[7rem_1fr]"
            >
              <p className="pt-[3px] text-[10px] uppercase tracking-[0.16em] text-[color:var(--w-muted)]">
                {col.mode}
              </p>
              <p className="w-prose text-sm">
                <span className="font-medium text-[color:var(--w-heading)]">
                  {col.subject}
                </span>
                <span className="text-[color:var(--w-sep)]"> — </span>
                {col.short}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Statement: headline carries the single most interesting fact, prose
           carries the rest. Headline sits at 20px — below section 04's 28px
           stats, so the page still has only one top-of-scale moment. */
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-[minmax(0,20rem)_1fr]">
          <h3 className="text-xl font-medium leading-7 tracking-[-0.01em] text-[color:var(--w-heading)]">
            {now.headline}
          </h3>
          <p className="w-prose max-w-[548px] text-sm">{now.prose}</p>
        </div>
      )}
    </Reveal>

    {/* =============================== 04 signal ============================= */}
    <Reveal as="section">
      <SectionHead index="04" title="Signal" id="signal" />

      {/* The one permitted scale jump on the page: 28px against a body of 14. */}
      <dl className="mb-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="w-display block text-[28px] font-semibold leading-8 tabular-nums tracking-[-0.01em] text-[color:var(--w-heading)]">
                {s.value}
              </span>
              <span className="mt-1 block text-[11px] text-[color:var(--w-muted)]">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-[color:var(--w-muted)]">
          Technology use across shipped projects
        </p>
        {/* Same chart form in both columns. `grid-flow-col` with four explicit
            rows fills top-to-bottom down the left column and continues down the
            right, so the ranking still reads in order — a plain grid-cols-2
            would zig-zag it across rows. */}
        <div className="grid gap-x-8 gap-y-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-4">
          {stackFrequency.map(([tech, count]) => (
            <CellMeter
              key={tech}
              label={tech}
              value={count}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </Reveal>

    {/* ============================= 05 trajectory =========================== */}
    <Reveal as="section">
      <SectionHead
        index="05"
        title="Trajectory"
        id="trajectory"
        action={{
          href: "/experience",
          label: "Full history",
          internal: true,
        }}
      />
      <ol className="list-none space-y-0 p-0">
        {experience.map((job) => (
          <li key={job.org} className="group/row flex gap-4 md:gap-6">
            <span className="w-24 shrink-0 pt-3 text-xs tabular-nums text-[color:var(--w-muted)] md:w-32">
              {job.period}
            </span>
            {/* The rule stretches to the row's height, so the last row's 28px
                of bottom padding made the timeline trail into empty space.
                Dropping that padding on the final row ends the line on the
                last entry. */}
            <span
              className="relative w-px shrink-0 bg-[color:var(--w-border)]"
              aria-hidden="true"
            >
              <span
                className="absolute left-1/2 top-[18px] h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: "var(--w-heading)" }}
              />
            </span>
            {/* Location is pinned right so each entry spans the full column
                instead of trailing off mid-container. */}
            {/* One line per role — the full description, highlights, and dates
                live on /experience, linked from this section head. */}
            <div className="flex-1 pb-7 pt-2.5 group-last/row:pb-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-medium text-[color:var(--w-heading)]">
                  {job.role}
                </h3>
                <span className="shrink-0 text-xs text-[color:var(--w-muted)]">
                  {job.location}
                </span>
              </div>
              <p className="text-sm">{job.org}</p>
              <p className="w-prose mt-1.5 text-sm">{job.summary}</p>
              <p className="mt-1.5 text-[11px] text-[color:var(--w-muted)]">
                {job.stack}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>

    {/* =============================== 06 skills ============================= */}
    <Reveal as="section">
      <SectionHead
        index="06"
        title="Toolkit"
        id="toolkit"
        action={{ href: "/services", label: "What I build", internal: true }}
      />
      {/* Full width — the 548px cap is a *reading measure*, and chips are not
          reading text. Capping them only manufactured an empty right half.
          Outlined rather than filled: twelve near-black pills were the heaviest
          mass on a page whose whole argument is restraint. */}
      <ul className="flex list-none flex-wrap gap-1.5 p-0" aria-label="Skills">
        {skills.map((s) => (
          <li key={s}>
            <Chip aria-label={`Skill: ${s}`}>{s}</Chip>
          </li>
        ))}
      </ul>
    </Reveal>

    {/* =============================== 07 voices ============================= */}
    <Reveal as="section">
      <SectionHead
        index="07"
        title="Voices"
        id="voices"
        action={{
          href: "/testimonials",
          label: "Read all",
          internal: true,
        }}
      />
      {/* The rail returns here — second appearance is what makes it structure. */}
      <figure className="grid gap-x-8 gap-y-4 md:grid-cols-[minmax(0,548px)_minmax(0,316px)]">
        {/* The opening quote is hung back by exactly 1ch so the first word of
            the quotation sits on the same left edge as every other paragraph. */}
        <blockquote
          className="text-base leading-7 text-[color:var(--w-heading)] md:text-lg md:leading-8"
          style={{ textIndent: "-0.6em" }}
        >
          <span aria-hidden="true" className="text-[color:var(--w-sep)]">
            “
          </span>
          {featuredQuote.quote}
          <span aria-hidden="true" className="text-[color:var(--w-sep)]">
            ”
          </span>
        </blockquote>
        <figcaption className="text-[11px] text-[color:var(--w-muted)] md:pt-2">
          <span className="block text-sm text-[color:var(--w-heading)]">
            {featuredQuote.name}
          </span>
          {featuredQuote.title}
        </figcaption>
      </figure>
    </Reveal>

    {/* ============================== 08 elsewhere =========================== */}
    <Reveal as="section">
      <SectionHead index="08" title="Elsewhere" id="elsewhere" />
      <ul className="flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm">
        {professionalProfiles.map((p) => (
          <li key={p.href}>
            <GlyphLink href={p.href}>{p.label}</GlyphLink>
          </li>
        ))}
      </ul>
    </Reveal>

    {/* ================================ contact ============================== */}
    {/* The page's one full-bleed moment: a band that meets both card borders,
        which also removes the last nested rounded box. */}
    <Reveal as="section">
      <div className="w-full-bleed md:grid md:grid-cols-[minmax(0,548px)_minmax(0,316px)] md:gap-x-8">
        <div>
          <h2 className="text-lg font-medium">Building something?</h2>
          <p className="w-prose mt-2 text-sm">
            Tell me what you are working on. I reply with an approach and a
            rough timeline, usually within a day.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-y-2 text-sm md:mt-1">
          <GlyphLink href="/contact" internal>
            Send a message
          </GlyphLink>
          <GlyphLink href={profile.calendly}>Book a 15-min call</GlyphLink>
          <GlyphLink href="/resume" internal>
            View résumé
          </GlyphLink>
        </div>
      </div>
    </Reveal>
  </>
);

export default Home;
