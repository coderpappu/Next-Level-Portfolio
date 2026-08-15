import { Helmet } from "react-helmet";
import { PageTitle, RecordList } from "../ui";
import { testimonials } from "../data";

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
      {testimonials.map((t) => (
        <figure key={t.name} className="flex flex-col gap-3">
          <blockquote className="text-sm">{t.quote}</blockquote>
          <figcaption className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold md:text-base">{t.name}</h3>
              <p className="text-sm text-[color:var(--w-muted)]">{t.title}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </RecordList>
  </>
);

export default Testimonials;
