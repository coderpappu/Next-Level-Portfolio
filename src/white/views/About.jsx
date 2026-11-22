"use client";

import Link from "next/link";
import {
  aboutParagraphs,
  expertise,
  fastFacts,
  images,
  photos,
  professionalProfiles,
  profile,
  stats,
} from "../data";
import { CountUp, Reveal, RevealImage } from "../editorial/motion";
import { ContactBand, Intro, PageHeader, pad, stagger, TertiaryLink } from "../editorial/ui";
import { useCvUrl } from "../hooks";

/* Paragraph made of plain strings and inline links. */
function Prose({ parts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : part.internal ? (
      <Link key={i} href={part.href} className="et-link">
        {part.text}
      </Link>
    ) : (
      <a key={i} href={part.href} target="_blank" rel="noopener noreferrer" className="et-link">
        {part.text}
      </a>
    ),
  );
}

const JOURNEY = [
  {
    title: "From client work to production systems",
    text: "I started at Research Lab Chattogram building and deploying custom web applications, migrating legacy WordPress sites to React, and owning performance, security and SEO. Ten-plus shipped projects in a year taught me more about real constraints than any tutorial could.",
  },
  {
    title: "Founding Codex Devware",
    text: "In 2022 I founded Codex Devware, a software company. Leading a team on client projects and the Codex LMS platform pushed me past web development into Android apps, DevOps pipelines, AI automation and hardware integration for IoT.",
  },
  {
    title: "Enterprise SaaS at Xceed Bangladesh",
    text: "Since October 2024 I have been building an enterprise HRM SaaS platform at Xceed Bangladesh LTD: multi-tenant architecture, RBAC, payroll processing and attendance, running real business operations for multiple organisations.",
  },
];

export default function About() {
  const cvUrl = useCvUrl(images.cv);

  return (
    <>
      <PageHeader
        trail={[{ name: "About", href: "/about" }]}
        media={photos.speaking}
        title="About Pappu Dey"
        lede="Software engineer and founder in Chattogram, Bangladesh. Here is the background, the products I have built, and the company I run."
      />

      {/* =============================== 01 biography ======================== */}
      <section className="et-section" aria-labelledby="biography">
        <div className="et-container">
          <Intro index="01" title="Biography" id="biography" />
          <div className="et-split">
            <figure className="et-split__media">
              <RevealImage>
                <img
                  src={images.workstation}
                  alt="Pappu Dey at his workstation in Chattogram"
                  width={864}
                  height={864}
                  loading="lazy"
                  decoding="async"
                />
              </RevealImage>
              <figcaption className="label-lg et-split__caption">
                At the workstation · Chattogram
              </figcaption>
            </figure>
            <Reveal className="et-split__text">
              {aboutParagraphs.map((p, i) => (
                <p key={p.id} className={i === 0 ? "body-lg" : "body-md"}>
                  <Prose parts={p.parts} />
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== 02 numbers =========================== */}
      <section className="et-section" aria-labelledby="numbers">
        <div className="et-container">
          <Intro index="02" title="By the numbers" id="numbers" />
          <Reveal as="dl" className="et-hero__stats et-statbar">
            {stats.map((s) => (
              <div key={s.label} className="et-hero__stat">
                <dt className="label-lg">{s.label}</dt>
                <dd className="h1">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =============================== 03 facts ============================ */}
      <section className="et-section" aria-labelledby="facts">
        <div className="et-container">
          <Intro index="03" title="Fast facts" id="facts" />
          <Reveal as="dl" className="et-facts">
            {fastFacts.map((f) => (
              <div key={f.label} className="et-facts__row">
                <dt className="label-lg">{f.label}</dt>
                <dd className="body-lg">{f.value}</dd>
              </div>
            ))}
            <div className="et-facts__row">
              <dt className="label-lg">Expertise</dt>
              <dd>
                <ul className="et-bullets body-md">
                  {expertise.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="et-facts__row">
              <dt className="label-lg">Links</dt>
              <dd className="et-linkrow">
                {professionalProfiles.map((p) => (
                  <TertiaryLink key={p.href} href={p.href} label={p.label} />
                ))}
                <TertiaryLink href={profile.calendly} label="Book a call" />
                <TertiaryLink href={cvUrl} label="Download CV" download="Pappu_Dey_CV.pdf" />
              </dd>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== 04 journey =========================== */}
      <section className="et-section" aria-labelledby="journey">
        <div className="et-container">
          <Intro index="04" title="My journey" id="journey" />
          <ol className="et-index">
            {JOURNEY.map((step, i) => (
              <Reveal as="li" key={step.title} className="et-index__row" delay={stagger(i)}>
                <span className="label-lg et-index__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3 className="h4">{step.title}</h3>
                <p className="body-md">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
