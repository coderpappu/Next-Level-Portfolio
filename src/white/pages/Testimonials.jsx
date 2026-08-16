import { Helmet } from "react-helmet";
import { testimonials } from "../data";
import { useTestimonials } from "../hooks";
import { initialsOf } from "../lib/initials";
import { Reveal } from "../motion";
import { PageTitle, RecordList } from "../ui";

const Testimonials = () => {
  const liveTestimonials = useTestimonials(testimonials);

  return (
  <>
    <Helmet>
      <title>Testimonials | Pappu Dey</title>
      <meta
        name="description"
        content="Read what colleagues, clients, and institutions say about working with Pappu Dey on SaaS platforms, web applications, and mobile apps."
      />
    </Helmet>

    <PageTitle lede="Read what colleagues, clients, and institutions say about working with Pappu Dey.">
      What People Say About Pappu Dey
    </PageTitle>

    <RecordList>
      {liveTestimonials.map((t, i) => (
        <Reveal
          key={t.name}
          delay={i * 60}
          as="figure"
          className="flex flex-col gap-3"
        >
          <blockquote className="text-sm">{t.quote}</blockquote>
          <figcaption className="flex items-start gap-3">
            {t.avatar ? (
              <img
                src={t.avatar}
                alt=""
                className="h-9 w-9 shrink-0 rounded-full border border-[color:var(--w-border)] object-cover"
              />
            ) : (
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--w-border)] bg-[color:var(--w-badge)] text-xs font-medium text-[color:var(--w-heading)]"
                aria-hidden="true"
              >
                {initialsOf(t.name)}
              </span>
            )}
            <div className="flex-1">
              <h3 className="text-sm font-medium md:text-base">{t.name}</h3>
              <p className="text-sm text-[color:var(--w-muted)]">{t.title}</p>
            </div>
          </figcaption>
        </Reveal>
      ))}
    </RecordList>
  </>
  );
};

export default Testimonials;
