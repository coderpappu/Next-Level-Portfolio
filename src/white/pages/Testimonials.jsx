import { Helmet } from "react-helmet";
import { testimonials } from "../data";
import { Reveal } from "../motion";
import { PageTitle, RecordList } from "../ui";

const Testimonials = () => (
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
      {testimonials.map((t, i) => (
        <Reveal
          key={t.name}
          delay={i * 60}
          as="figure"
          className="flex flex-col gap-3"
        >
          <blockquote className="text-sm">{t.quote}</blockquote>
          <figcaption className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold md:text-base">{t.name}</h3>
              <p className="text-sm text-[color:var(--w-muted)]">{t.title}</p>
            </div>
          </figcaption>
        </Reveal>
      ))}
    </RecordList>
  </>
);

export default Testimonials;
