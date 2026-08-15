import { Helmet } from "react-helmet";
import { Chip, GlyphLink, PageTitle, Section } from "../ui";
import { process, profile, projects, services, techStack } from "../data";

/* Only two of the six services have a shipped project that demonstrates
   them directly — AI Automation, DevOps, API, and Hardware are real
   capabilities but don't have a dedicated case study yet, so they get no
   "Shipped" line rather than a stretched or invented one. */
const RELATED_PROJECT_IDS = {
  "SaaS & Web Applications": ["e-clearance", "codex-lms", "mini-dokan"],
  "Android Mobile Apps": ["cribo-health-app"],
};
const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

const Services = () => (
  <>
    <Helmet>
      <title>Services | Pappu Dey</title>
      <meta
        name="description"
        content="What Pappu Dey builds: SaaS and web applications, Android apps, AI automation, DevOps and cloud infrastructure, APIs, and hardware integration."
      />
    </Helmet>

    <PageTitle lede="One engineer, every layer — web, mobile, cloud, AI, and hardware. Here is what Pappu Dey builds and how the work runs.">
      Pappu Dey&apos;s Services &amp; Capabilities
    </PageTitle>

    <Section title="What I Build" bold>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => {
          const related = (RELATED_PROJECT_IDS[s.title] || [])
            .map((id) => projectById[id])
            .filter(Boolean);
          return (
            <div
              key={s.title}
              className="flex flex-col gap-2 rounded-md border border-[color:var(--w-border)] p-5"
            >
              <span
                className="text-xs tabular-nums text-[color:var(--w-sep)]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium">{s.title}</h3>
              <p className="text-sm">{s.description}</p>
              {related.length > 0 ? (
                <p className="mt-1 text-sm">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--w-muted)]">
                    Shipped
                  </span>
                  {" — "}
                  {related.map((p, idx) => (
                    <span key={p.id}>
                      <GlyphLink href={p.live}>{p.name}</GlyphLink>
                      {idx < related.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>

    <Section title="How I Engineer" bold>
      <div className="space-y-4">
        {process.map((step, i) => (
          <div key={step.title} className="flex gap-4">
            <span
              className="w-8 flex-none text-sm text-[color:var(--w-sep)]"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-medium">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Technology Stack" bold>
      <div className="grid gap-6 md:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.label}>
            <h3 className="mb-2 text-base font-medium">{group.label}</h3>
            <ul className="flex list-none flex-wrap gap-1 p-0">
              {group.items.map((t) => (
                <li key={t}>
                  <Chip aria-label={`Technology: ${t}`}>{t}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Start a Project" bold>
      <p className="text-sm">
        Have something in mind? Book a free 15-minute discovery call, or send
        the details over and I will come back with an approach and a rough
        timeline.
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <GlyphLink href={profile.calendly} primary>
          Book a Discovery Call
        </GlyphLink>
        <GlyphLink href="/contact" internal secondary>
          Send a Message
        </GlyphLink>
      </div>
    </Section>
  </>
);

export default Services;
