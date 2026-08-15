import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { projects } from "../data";
import { Reveal } from "../motion";
import { Chip, PageTitle, PipeLinks, RecordList } from "../ui";

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

      <PageTitle lede="Explore the SaaS platforms, web applications, and mobile apps Pappu Dey has designed, built, and shipped for institutions, startups, and his own company.">
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
      {/* Alternating image/text sides instead of one long text-over-image
          column — at 896px wide, a fixed-side image left a dead half of the
          row empty next to it. Alternating also breaks up seven back-to-back
          identical rows into a rhythm. */}
      {visible.length === 0 ? (
        <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
          No project uses every selected technology. Try removing a filter.
        </p>
      ) : (
        <RecordList>
          {visible.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`flex flex-col gap-6 lg:items-center lg:gap-10 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-[54%] lg:shrink-0">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    className="w-full rounded-md border border-[color:var(--w-border)] object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Chip aria-label={`Category: ${p.category}`}>
                        {p.category}
                      </Chip>
                      <h3 className="mt-2 text-base font-medium md:text-lg">
                        {p.name}
                      </h3>
                    </div>
                    <span className="flex-none text-sm text-[color:var(--w-muted)]">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-sm text-[color:var(--w-tertiary)]">
                    {p.role}
                  </p>
                  <p className="text-sm">{p.description}</p>
                  {/* Naming what a system deliberately does not do. */}
                  {p.constraint ? (
                    <p className="w-prose border-l-2 border-[color:var(--w-border)] pl-3 text-[11px] text-[color:var(--w-muted)]">
                      <span className="uppercase tracking-[0.14em]">
                        Known limit
                      </span>
                      {" — "}
                      {p.constraint}
                    </p>
                  ) : null}
                  <ul className="flex list-none flex-wrap gap-1 p-0">
                    {p.stack.map((t) => (
                      <li key={t}>
                        {/* Matched technologies stay highlighted so you can
                            see why a project survived the filter. */}
                        <Chip
                          active={selected.includes(t)}
                          aria-label={`Technology: ${t}`}
                        >
                          {t}
                        </Chip>
                      </li>
                    ))}
                  </ul>
                  <PipeLinks
                    links={[
                      { label: "Live Site", href: p.live },
                      { label: "Source", href: p.repo },
                    ]}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </RecordList>
      )}
    </>
  );
};

export default Projects;
