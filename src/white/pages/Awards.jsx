import { Helmet } from "react-helmet";
import { awards } from "../data";
import { Reveal } from "../motion";
import { Chip, GlyphLink, PageTitle, RecordList } from "../ui";

const Awards = () => (
  <>
    <Helmet>
      <title>Awards | Pappu Dey</title>
      <meta
        name="description"
        content="Awards and recognition earned by Pappu Dey — a Certificate of Achievement from Chattogram Polytechnic Institute and ICPC Asia Dhaka Regional 2024."
      />
    </Helmet>

    <PageTitle lede="Discover the institutional recognition and competitive programming results Pappu Dey has earned.">
      Pappu Dey&apos;s Awards &amp; Recognition
    </PageTitle>

    {/* Certificate beside its text, alternating sides — matches the Projects
        record layout instead of stacking a full-width image under a wall
        of text. */}
    <RecordList>
      {awards.map((a, i) => (
        <Reveal key={a.title}>
          <article
            className={`flex flex-col gap-6 lg:items-center lg:gap-10 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="lg:w-[40%] lg:shrink-0">
              <img
                src={a.image}
                alt={`${a.title} certificate`}
                loading="lazy"
                className="w-full rounded-md border border-[color:var(--w-border)]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Chip aria-label={`Issued by: ${a.subtitle}`}>
                    {a.subtitle}
                  </Chip>
                  <h3 className="mt-2 text-base font-medium md:text-lg">
                    {a.title}
                  </h3>
                </div>
                <span className="flex-none text-sm text-[color:var(--w-muted)]">
                  {a.year}
                </span>
              </div>
              <p className="w-prose text-justify text-sm text-[color:var(--w-tertiary)]">
                {a.role}
              </p>
              <p className="w-prose text-justify text-sm">{a.description}</p>
              <div className="mt-1 flex flex-wrap gap-3 text-sm">
                {a.links.map((link, idx) =>
                  idx === 0 ? (
                    <GlyphLink key={link.href} href={link.href} primary>
                      {link.label}
                    </GlyphLink>
                  ) : (
                    <GlyphLink key={link.href} href={link.href} secondary>
                      {link.label}
                    </GlyphLink>
                  ),
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </RecordList>
  </>
);

export default Awards;
