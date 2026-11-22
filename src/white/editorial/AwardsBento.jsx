"use client";

/* Awards as a line-drawn, staggered bento (home page and /awards). Awards sit
   in pairs; in each pair the column widths follow the two certificates'
   shapes, so both show whole at the same height. The left award leads with
   its certificate, the right one with its text, so the columns zig-zag.
   `full` adds the complete description (used on /awards). */

import { awards } from "../data";
import { Reveal } from "./motion";
import { stagger, TertiaryLink } from "./ui";

const shapeOf = (award) =>
  award.imageSize ? award.imageSize[0] / award.imageSize[1] : 1;

function AwardColumn({ award, textFirst, delay, full }) {
  const text = (
    <div className="et-bento__text">
      <p className="label-lg et-bento__meta">
        {award.subtitle} · {award.year}
      </p>
      <h3 className="h4">{award.title}</h3>
      <p className="body-md et-bento__role">{award.role}</p>
      {full ? <p className="body-md et-muted et-bento__desc">{award.description}</p> : null}
      <div className="et-bento__links">
        {award.links.map((link) => (
          <TertiaryLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
  // The certificate itself, whole: never cropped.
  const doc = (
    <div className="et-bento__doc">
      <img
        src={award.image}
        alt={`${award.title} certificate`}
        width={award.imageSize?.[0]}
        height={award.imageSize?.[1]}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
  return (
    <Reveal
      as="article"
      className={textFirst ? "et-bento__col is-text-first" : "et-bento__col"}
      delay={delay}
    >
      {textFirst ? text : doc}
      {textFirst ? doc : text}
    </Reveal>
  );
}

export default function AwardsBento({ full = false }) {
  const pairs = [];
  for (let i = 0; i < awards.length; i += 2) pairs.push(awards.slice(i, i + 2));

  return (
    <div className="et-bento-stack">
          {pairs.map(([left, right]) => (
            <div
              key={left.title}
              className={right ? "et-bento" : "et-bento is-single"}
              style={
                right
                  ? {
                      gridTemplateColumns: `minmax(0, ${shapeOf(left)}fr) 1px minmax(0, ${shapeOf(right)}fr)`,
                    }
                  : undefined
              }
            >
              <AwardColumn award={left} textFirst={false} delay={0} full={full} />
              {right ? (
                <>
                  <span className="et-bento__rule" aria-hidden="true" />
                  <AwardColumn award={right} textFirst delay={stagger(1)} full={full} />
                </>
              ) : null}
            </div>
          ))}
        </div>
  );
}
