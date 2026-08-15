import { Helmet } from "react-helmet";
import { Chip, PageTitle, RecordCard, RecordList } from "../ui";
import { projects } from "../data";

const Projects = () => (
  <>
    <Helmet>
      <title>Projects | Pappu Dey</title>
      <meta
        name="description"
        content="Explore the SaaS platforms, web applications, and mobile apps Pappu Dey has designed, built, and shipped — E-Clearance, Dev Tools Hunt, Cribo Health, Codex LMS and more."
      />
    </Helmet>

    <PageTitle lede="Explore the SaaS platforms, web applications, and mobile apps Pappu Dey has designed, built, and shipped for institutions, startups, and his own studio.">
      Pappu Dey&apos;s Projects
    </PageTitle>

    <RecordList>
      {projects.map((p) => (
        <RecordCard
          key={p.id}
          title={p.name}
          subtitle={p.category}
          meta={p.year}
          role={p.role}
          description={p.description}
          links={[
            { label: "Live Site", href: p.live },
            { label: "Source", href: p.repo },
          ]}
        >
          <div className="relative">
            <img
              src={p.image}
              alt={`${p.name} screenshot`}
              loading="lazy"
              className="w-full rounded-lg border border-[color:var(--w-border)] object-cover md:max-w-lg"
            />
          </div>
          <ul className="flex list-none flex-wrap gap-1 p-0">
            {p.stack.map((t) => (
              <li key={t}>
                <Chip aria-label={`Technology: ${t}`}>{t}</Chip>
              </li>
            ))}
          </ul>
        </RecordCard>
      ))}
    </RecordList>
  </>
);

export default Projects;
