"use client";

import { photos } from "../data";
import AwardsBento from "../editorial/AwardsBento";
import { ContactBand, PageHeader } from "../editorial/ui";

export default function Awards() {
  return (
    <>
      <PageHeader
        trail={[{ name: "Awards", href: "/awards" }]}
        media={photos.icpcTeam}
        title="Awards & recognition"
        lede="Institutional recognition for shipped software, and competitive programming at the ICPC Asia Dhaka Regional."
      />

      <section className="et-section" aria-label="Awards">
        <div className="et-container">
          <AwardsBento full />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
