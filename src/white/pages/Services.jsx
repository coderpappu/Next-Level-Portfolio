import { Helmet } from "react-helmet";
import { Chip, GlyphLink, PageTitle, Section } from "../ui";
import { process, profile, services, techStack } from "../data";

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

    <Section title="What I Build">
      <div className="space-y-12">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">{s.title}</h3>
            <p className="text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="How I Engineer">
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
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Technology Stack">
      <div className="space-y-6">
        {techStack.map((group) => (
          <div key={group.label}>
            <h3 className="mb-2 text-base font-semibold">{group.label}</h3>
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

    <Section title="Start a Project">
      <p className="text-sm">
        Have something in mind? Book a free 15-minute discovery call, or send
        the details over and I will come back with an approach and a rough
        timeline.
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <GlyphLink href={profile.calendly}>Book a Discovery Call</GlyphLink>
        <GlyphLink href="/contact" internal>
          Send a Message
        </GlyphLink>
      </div>
    </Section>
  </>
);

export default Services;
