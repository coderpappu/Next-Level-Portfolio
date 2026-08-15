import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { projects } from "../data";
import { Reveal } from "../motion";
import { Chip, PageTitle, RecordCard, RecordList } from "../ui";

const ALL_TECH = [...new Set(projects.flatMap((p) => p.stack))].sort();

const Projects = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (tech) =>
    setSelected((cur) =>
      cur.includes(tech) ? cur.filter((t) => t !== tech) : [...cur, tech],
    );

  // A project matches when it uses every selected technology.
  const visible = useMemo(
    () =>
      selected.length === 0
        ? projects
        : projects.filter((p) => selected.every((t) => p.stack.includes(t))),
    [selected],
  );

  return (
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

      {/* ------------------------------ filter ------------------------------ */}
      <div className="w-no-print space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xs uppercase tracking-[0.18em] text-[color:var(--w-muted)]">
            Filter by stack
          </h2>
          <span
            className="text-xs text-[color:var(--w-muted)]"
            aria-live="polite"
          >
            {visible.length} of {projects.length}
          </span>
        </div>

        <ul className="flex list-none flex-wrap gap-1 p-0">
          {ALL_TECH.map((tech) => {
            const on = selected.includes(tech);
            return (
              <li key={tech}>
                <button
                  type="button"
                  onClick={() => toggle(tech)}
                  aria-pressed={on}
                  className={`${
                    on ? "w-chip" : "w-chip-secondary"
                  } cursor-pointer`}
                >
                  {tech}
                </button>
              </li>
            );
          })}
          {selected.length > 0 ? (
            <li>
              <button
                type="button"
                onClick={() => setSelected([])}
                className="w-chip-secondary cursor-pointer gap-1"
              >
                <X className="h-3 w-3" aria-hidden="true" />
                Clear
              </button>
            </li>
          ) : null}
        </ul>
      </div>

      {/* ------------------------------ records ----------------------------- */}
      {visible.length === 0 ? (
        <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
          No project uses every selected technology. Try removing a filter.
        </p>
      ) : (
        <RecordList>
          {visible.map((p) => (
            <Reveal key={p.id}>
              <RecordCard
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
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="w-full rounded-lg border border-[color:var(--w-border)] object-cover md:max-w-lg"
                />
                <ul className="flex list-none flex-wrap gap-1 p-0">
                  {p.stack.map((t) => (
                    <li key={t}>
                      {/* Matched technologies stay highlighted so you can see
                          why a project survived the filter. */}
                      <Chip
                        active={selected.includes(t)}
                        aria-label={`Technology: ${t}`}
                      >
                        {t}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </RecordCard>
            </Reveal>
          ))}
        </RecordList>
      )}
    </>
  );
};

export default Projects;
