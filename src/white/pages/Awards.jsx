import { Helmet } from "react-helmet";
import { awards } from "../data";
import { Reveal } from "../motion";
import { PageTitle, RecordCard, RecordList } from "../ui";

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

    <RecordList>
      {awards.map((a) => (
        <Reveal key={a.title}>
          <RecordCard
            title={a.title}
            subtitle={a.subtitle}
            meta={a.year}
            role={a.role}
            description={a.description}
            links={a.links}
          >
            <img
              src={a.image}
              alt={`${a.title} certificate`}
              loading="lazy"
              className="w-full rounded-lg border border-[color:var(--w-border)] object-cover md:max-w-sm"
            />
          </RecordCard>
        </Reveal>
      ))}
    </RecordList>
  </>
);

export default Awards;
