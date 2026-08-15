import { Helmet } from "react-helmet";
import { GlyphLink, PageTitle, Section } from "../ui";
import {
  aboutParagraphs,
  expertise,
  fastFacts,
  images,
  professionalProfiles,
  profile,
  stats,
} from "../data";

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

const About = () => (
  <>
    <Helmet>
      <title>About | Pappu Dey</title>
      <meta
        name="description"
        content="Pappu Dey is a Bangladeshi software engineer and founder building multi-tenant SaaS platforms, web applications, and AI automation systems from Chattogram, Bangladesh."
      />
    </Helmet>

    <PageTitle lede="Read about Pappu Dey's engineering background, the products he has built, and the studio he founded.">
      About Pappu Dey
    </PageTitle>

    <img
      src={images.workstation}
      alt="Pappu Dey at his workstation in Chattogram"
      loading="lazy"
      className="w-full rounded border border-[color:var(--w-border)] object-cover"
    />

    <Section title="Biography">
      <div className="space-y-2 text-sm">
        {aboutParagraphs.map((p) => (
          <div key={p.id}>
            <Prose parts={p.parts} />
          </div>
        ))}
      </div>
    </Section>

    <Section title="By the Numbers">
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
    </Section>

    <Section title="Fast Facts">
      <ul className="space-y-4 text-sm">
        {fastFacts.map((f) => (
          <li key={f.label}>
            <strong className="text-[color:var(--w-heading)]">
              {f.label}:
            </strong>{" "}
            {f.value}
          </li>
        ))}
        <li>
          <strong className="text-[color:var(--w-heading)]">Expertise:</strong>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {expertise.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong className="text-[color:var(--w-heading)]">
            Important Links:
          </strong>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {professionalProfiles.map((p) => (
              <GlyphLink key={p.href} href={p.href}>
                {p.label}
              </GlyphLink>
            ))}
            <GlyphLink href={profile.calendly}>Book a Call</GlyphLink>
            <GlyphLink href={images.cv}>Download CV</GlyphLink>
          </div>
        </li>
      </ul>
    </Section>

    <Section title="My Journey">
      <div className="space-y-6 text-sm">
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            From client work to production systems
          </h3>
          <div>
            I started at Research Lab Chattogram building and deploying custom
            web applications, migrating legacy WordPress sites to React, and
            owning performance, security, and SEO. Ten-plus shipped projects in
            a year taught me more about real constraints than any tutorial
            could.
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            Founding Codex Devware
          </h3>
          <div>
            In 2022 I founded Codex Devware, a small software studio. Leading a
            team on client projects and the Codex LMS platform pushed me past
            web development into Android apps, DevOps pipelines, AI automation,
            and hardware integration for IoT.
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            Enterprise SaaS at Xceed Bangladesh
          </h3>
          <div>
            Since October 2024 I have been building an enterprise HRM SaaS
            platform at Xceed Bangladesh LTD — multi-tenant architecture, RBAC,
            payroll processing, and attendance, running real business
            operations for multiple organizations.
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default About;
