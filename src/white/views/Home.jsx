"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Download,
  Facebook,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  education,
  experience,
  gallery,
  images,
  now,
  practice,
  professionalProfiles,
  profile,
  projects,
  socials,
  stats,
  techStack,
  testimonials,
  trustedBy,
} from "../data";
import {
  CountUp,
  MaskedText,
  Reveal,
  RevealImage,
  Roll,
} from "../editorial/motion";
import { useMotionReady } from "../editorial/useMotion";
import AwardsBento from "../editorial/AwardsBento";
import { ContactBand, Intro, JobPhotos, LINE, pad, stagger, TertiaryLink } from "../editorial/ui";
import { useCvUrl, useTestimonials } from "../hooks";
import { initialsOf } from "../lib/initials";

/*
 * Section 06 has three stored layouts. Flip this one word to switch:
 *   "columns"   — three verb-led columns
 *   "readout"   — compact label/value status board
 *   "statement" — one headline plus supporting prose
 * All three render from `now` in data.js, so none can go stale.
 */
const NOW_LAYOUT = "readout";


const SOCIAL_ICONS = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
  message: MessageCircle,
  calendar: Calendar,
  file: FileText,
};

/* -------------------------------------------------------------------------- */
/* Shared pieces                                                               */
/* -------------------------------------------------------------------------- */

function SocialIcon({ item, href }) {
  const Icon = SOCIAL_ICONS[item.icon] || Globe;
  return (
    <a
      href={href}
      title={item.title}
      aria-label={item.title}
      className="icon-btn"
      {...(item.download
        ? { download: "Pappu_Dey_CV.pdf" }
        : { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Icon {...LINE} />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero: split screen, portrait full height                                    */
/* -------------------------------------------------------------------------- */

function Hero({ cvUrl }) {
  const ready = useMotionReady();
  const profilesGroup = socials.filter((s) => s.group === "profiles");
  const contactGroup = socials.filter((s) => s.group === "contact");
  // The two strongest actions become the hero's buttons; the rest stay icons.
  const call = contactGroup.find((s) => s.icon === "calendar");
  const cv = contactGroup.find((s) => s.icon === "file");
  const reach = contactGroup.filter((s) => s !== call && s !== cv);

  return (
    <header className={ready ? "et-hero is-loaded" : "et-hero"}>
      <div className="et-hero__text">
        {/* The whole statement is one group, centred in the column. */}
        <div className="et-hero__main">
          <a
            href={profile.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Location: ${profile.location}`}
            className="eyebrow et-hero__eyebrow et-hero__fade"
            style={{ "--d": "80ms" }}
          >
            <MapPin {...LINE} />
            {profile.location}
            <span aria-hidden="true">·</span>
            <span>UTC+6</span>
          </a>

          <div className="et-hero__titles">
            <MaskedText
              as="h1"
              id="pappu-dey"
              className="h2"
              text={profile.name}
              play={ready}
              delay={150}
            />
            <MaskedText
              as="p"
              className="h2 et-hero__role"
              text={`${profile.roleA}\u00A0/ ${profile.roleB}`}
              play={ready}
              delay={230}
            />
          </div>

          <p
            className="body-lg et-hero__lead et-hero__fade"
            style={{ "--d": "550ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="et-btn-row et-hero__fade print:hidden"
            style={{ "--d": "620ms" }}
          >
            {call ? (
              <a
                href={call.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <Roll>{call.title}</Roll>
                <ArrowUpRight {...LINE} />
              </a>
            ) : null}
            {cv ? (
              <a
                href={cvUrl}
                download="Pappu_Dey_CV.pdf"
                className="btn btn--secondary"
              >
                <Roll>{cv.title}</Roll>
                <Download {...LINE} />
              </a>
            ) : null}
          </div>

          {/* Two clusters with a hairline between: where to find me, and how
              to reach me. */}
          <div
            className="et-hero__links et-hero__fade print:hidden"
            style={{ "--d": "700ms" }}
          >
            <ul className="et-hero__icons" aria-label="Profiles">
              {profilesGroup.map((s) => (
                <li key={s.title}>
                  <SocialIcon item={s} href={s.href} />
                </li>
              ))}
            </ul>
            <span className="et-hero__rule" aria-hidden="true" />
            <ul className="et-hero__icons" aria-label="Get in touch">
              {reach.map((s) => (
                <li key={s.title}>
                  <SocialIcon item={s} href={s.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Proof on the hero's bottom edge, next to the claim it supports. */}
        <dl className="et-hero__stats et-hero__fade" style={{ "--d": "800ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="et-hero__stat">
              <dt className="label-lg">{s.label}</dt>
              <dd className="h1">
                <CountUp value={s.value} play={ready} delay={800} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="hidden gap-x-2 text-sm print:flex print:text-[12px]">
          <span>{profile.email}</span>
          <span aria-hidden="true">/</span>
          <span>{profile.github}</span>
          <span aria-hidden="true">/</span>
          <span>{profile.linkedin}</span>
        </div>
      </div>

      <div className="et-hero__media">
        <img
          src={images.avatar}
          alt={`Portrait of ${profile.name}`}
          width={704}
          height={872}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Built for & trusted by: logo carousel under the hero, right to left         */
/* -------------------------------------------------------------------------- */

/* One logo. Copies used only to fill the loop are `hidden`: no alt text and
   out of the tab order, so screen readers and keyboards meet each logo once. */
function OrgLogo({ org, hidden = false }) {
  const mark = (
    <span className="et-org__mark">
      <img
        src={org.logo}
        alt={hidden ? "" : org.name}
        // Eager: lazy images that start off-screen to the right would pop
        // in late as they slide into view.
        loading="eager"
        decoding="async"
        className={`et-org__img is-${org.tone}`}
        style={{ "--logo-h": `${org.height}px` }}
      />
    </span>
  );
  return (
    <li className="et-marquee__item">
      {org.url ? (
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          className="et-org"
          title={hidden ? undefined : org.name}
          tabIndex={hidden ? -1 : undefined}
        >
          {mark}
        </a>
      ) : (
        <span className="et-org" title={hidden ? undefined : org.name}>
          {mark}
        </span>
      )}
    </li>
  );
}

/* Four identical lists side by side; the track slides left by exactly two
   of them and starts over, so the loop has no visible seam. Only the first
   list is exposed to assistive tech. */
const MARQUEE_COPIES = [1, 2, 3];

function TrustedBy() {
  return (
    <section className="et-trusted" aria-labelledby="trusted">
      <div className="et-container">
        <MaskedText
          as="h2"
          id="trusted"
          className="h5 et-trusted__title"
          text="Built for & trusted by"
        />
        <Reveal className="et-marquee">
          <div className="et-marquee__track">
            <ul className="et-marquee__list">
              {trustedBy.map((org) => (
                <OrgLogo key={org.name} org={org} />
              ))}
            </ul>
            {MARQUEE_COPIES.map((copy) => (
              <ul key={copy} className="et-marquee__list" aria-hidden="true">
                {trustedBy.map((org) => (
                  <OrgLogo key={`${copy}-${org.name}`} org={org} hidden />
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 02 Selected work: case list with a sticky preview that follows the row     */
/* -------------------------------------------------------------------------- */

function SelectedWork() {
  const items = projects.slice(0, 5);
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="et-section" aria-labelledby="work">
      <div className="et-container">
        <Intro
          index="02"
          title="Selected work"
          id="work"
          action={{ href: "/projects", label: "All projects", internal: true }}
        />
        <div className="et-work">
          <ol className="et-work__list">
            {items.map((p, i) => (
              <Reveal as="li" key={p.id} delay={stagger(i)}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === active ? "et-work__row is-active" : "et-work__row"
                  }
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="label-lg et-work__num" aria-hidden="true">
                    {pad(i + 1)}
                  </span>
                  <span className="et-work__name">
                    <span className="h5">{p.name}</span>
                    <span className="body-sm et-work__cat">{p.category}</span>
                  </span>
                  <span className="label-lg et-work__year">{p.year}</span>
                  <ArrowUpRight className="et-work__arrow" {...LINE} />
                </a>
              </Reveal>
            ))}
          </ol>

          {/* Visual echo of the focused row; the list carries the meaning. */}
          <div className="et-work__preview" aria-hidden="true">
            <RevealImage className="et-work__frame">
              {items.map((p, i) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={i === active ? "is-active" : undefined}
                />
              ))}
            </RevealImage>
            <div className="et-work__caption">
              <p className="label-lg et-work__meta">
                {current.category} · {current.year}
              </p>
              <ul className="et-tags">
                {current.stack.slice(0, 4).map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 03 Experience: sticky title + a picture that follows the entry in focus    */
/* -------------------------------------------------------------------------- */

/* Jobs first, then education, in reading order. Each entry's index ties the
   row on the right to its picture on the left. */
const timeline = [
  ...experience.map((job) => ({ key: job.org, name: job.org, media: job.media })),
  ...education.map((e) => ({
    key: e.institution,
    name: e.institution,
    media: e.media,
  })),
];

function ExperienceMedia({ active }) {
  return (
    // Purely visual: the rows on the right carry all the information.
    <div className="et-exp-media" aria-hidden="true">
      <div className="et-exp-media__frame">
        {timeline.map((entry, i) => (
          <div
            key={entry.key}
            className={
              i === active ? "et-exp-media__item is-active" : "et-exp-media__item"
            }
          >
            {entry.media?.kind === "photo" ? (
              <img
                src={entry.media.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="et-exp-media__photo"
              />
            ) : entry.media?.kind === "logo" ? (
              <img
                src={entry.media.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="et-exp-media__logo"
              />
            ) : (
              <span className="h4 et-exp-media__name">{entry.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience({ jobPhotos = {} }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  /* The entry crossing a thin band just above the middle of the screen is
     "in focus". One observer for all rows; scrolling back up works too. */
  useEffect(() => {
    const root = sectionRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;
    const rows = root.querySelectorAll("[data-entry]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-entry")));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    rows.forEach((row) => io.observe(row));
    return () => io.disconnect();
  }, []);

  const eduOffset = experience.length;

  return (
    <section
      ref={sectionRef}
      className="et-section"
      aria-labelledby="experience"
    >
      {/* Employment history sits high: it is the first thing a recruiter
          looks for. The title and picture stay pinned while rows scroll. */}
      <div className="et-container et-sticky">
        <div className="et-sticky__aside">
          <span className="eyebrow et-intro__eyebrow" aria-hidden="true">
            03
          </span>
          <MaskedText
            as="h2"
            id="experience"
            className="h3"
            text="Experience"
          />
          <TertiaryLink href="/experience" label="Full history" internal />
          <ExperienceMedia active={active} />
        </div>

        <div>
          <ol className="et-jobs">
            {experience.map((job, i) => (
              <Reveal
                as="li"
                key={job.org}
                className="et-job"
                delay={stagger(i)}
                data-entry={i}
              >
                <p className="label-lg et-job__period">{job.period}</p>
                <div>
                  <div className="et-job__head">
                    <h3 className="h5">{job.role}</h3>
                    <span className="body-sm et-job__loc">{job.location}</span>
                  </div>
                  <p className="body-md et-job__org">{job.org}</p>
                  <p className="body-md et-job__summary">{job.summary}</p>
                  <p className="label-lg et-job__stack">{job.stack}</p>
                  <JobPhotos job={job} photos={jobPhotos[job.photoFolder]} />
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Recruiters screen for education, so it lives on the page they
              actually land on. */}
          <Reveal className="et-edu">
            <h3 className="h5 et-edu__title">Education</h3>
            <ul className="et-edu__list">
              {education.map((e, i) => (
                <li
                  key={e.institution}
                  className="et-edu__item"
                  data-entry={eduOffset + i}
                >
                  <span>
                    <span className="body-md et-strong">{e.institution}</span>
                    <span className="body-md et-muted">{e.degree}</span>
                  </span>
                  <span className="label-lg et-edu__period">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 04 Awards: the shared staggered bento                                       */
/* -------------------------------------------------------------------------- */

function Awards() {
  return (
    <section className="et-section" aria-labelledby="awards">
      <div className="et-container">
        <Intro
          index="04"
          title="Awards"
          id="awards"
          action={{ href: "/awards", label: "All awards", internal: true }}
        />
        <AwardsBento />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 06 Gallery: justified rows. In each row a photo's flex-grow is its own      */
/* width/height ratio (basis 0), so every photo in the row ends up the same   */
/* height and the row fills the width exactly: nothing is ever cropped.       */
/* -------------------------------------------------------------------------- */

function Gallery() {
  let n = 0;
  return (
    <section className="et-section" aria-labelledby="gallery">
      <div className="et-container">
        <Intro index="06" title="Gallery" id="gallery" />
        <div className="et-gallery">
          {gallery.map((row, r) => (
            <div key={r} className="et-gallery__row">
              {row.map((photo) => {
                const [w, h] = photo.size;
                const i = n++;
                return (
                  <Reveal
                    as="figure"
                    key={photo.caption}
                    className="et-gallery__item"
                    style={{ flexGrow: w / h }}
                    delay={stagger(i)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      width={w}
                      height={h}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="label-lg et-gallery__caption">
                      {photo.caption}
                    </figcaption>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 08 Voices: one quote at a time, chosen by the reader (no autoplay)          */
/* -------------------------------------------------------------------------- */

function Voices({ items }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  if (!items.length) return null;
  const current = Math.min(active, items.length - 1);

  const onKeyDown = (e, i) => {
    const last = items.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (i + 1) % items.length
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (i - 1 + items.length) % items.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="et-section" aria-labelledby="voices">
      <div className="et-container">
        <Intro
          index="08"
          title="Voices"
          id="voices"
          action={{ href: "/testimonials", label: "Read all", internal: true }}
        />
        <Reveal className="et-quote">
          <div className="et-quote__aside">
            <p className="label-lg et-quote__count" aria-hidden="true">
              {pad(current + 1)} / {pad(items.length)}
            </p>
            <div className="et-tabs" role="tablist" aria-label="Testimonials">
              {items.map((t, i) => (
                <button
                  key={t.name}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`voice-tab-${i}`}
                  aria-selected={i === current}
                  aria-controls="voices-panel"
                  tabIndex={i === current ? 0 : -1}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className="et-tab"
                >
                  {pad(i + 1)}
                </button>
              ))}
            </div>
          </div>

          <div
            className="et-quote__stack"
            id="voices-panel"
            role="tabpanel"
            aria-labelledby={`voice-tab-${current}`}
          >
            {items.map((t, i) => (
              <figure
                key={t.name}
                className={
                  i === current ? "et-quote__item is-active" : "et-quote__item"
                }
                aria-hidden={i !== current}
              >
                <blockquote className="h2 et-quote__text">
                  <span aria-hidden="true">“</span>
                  {t.quote}
                  <span aria-hidden="true">”</span>
                </blockquote>
                <figcaption className="et-quote__by">
                  {t.avatar ? (
                    <img src={t.avatar} alt="" className="et-avatar" />
                  ) : (
                    <span className="et-avatar" aria-hidden="true">
                      {initialsOf(t.name)}
                    </span>
                  )}
                  <span>
                    <span className="body-md et-quote__name">{t.name}</span>
                    <span className="label-lg et-muted">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 10 Latest writing                                                           */
/* -------------------------------------------------------------------------- */

/* Feature + list: the newest article as a large typographic card, the next
   ones as rows (same hover band as Selected work). Posts come from the
   server at build time, with the built-in fallback, so this always renders. */
function Journal({ posts }) {
  if (!posts?.length) return null;
  const [featured, ...rest] = posts;

  return (
    <section className="et-section" aria-labelledby="writing">
      <div className="et-container">
        <Intro
          index="10"
          title="Journal"
          id="writing"
          action={{ href: "/blog", label: "All articles", internal: true }}
        />
        <div className="et-journal">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="et-feature">
              <span className="label-lg et-feature__meta">
                Latest · {featured.date}
                {featured.minutes ? ` · ${featured.minutes} min read` : ""}
              </span>
              <span className="et-feature__body">
                <span className="h3 et-feature__title">{featured.title}</span>
                {featured.excerpt ? (
                  <span className="body-lg et-feature__excerpt">{featured.excerpt}</span>
                ) : null}
                <span className="et-feature__foot">
                  <span className="et-tags">
                    {(featured.tags || []).slice(0, 3).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className="btn btn--tertiary et-feature__cta">
                    Read article
                    <ArrowRight {...LINE} />
                  </span>
                </span>
              </span>
            </Link>
          </Reveal>

          <ol className="et-journal__list">
            {rest.slice(0, 3).map((post, i) => (
              <Reveal as="li" key={post.slug} delay={stagger(i + 1)}>
                <Link href={`/blog/${post.slug}`} className="et-journal__row">
                  <span className="label-lg et-journal__date">
                    {post.date}
                    {post.minutes ? ` · ${post.minutes} min` : ""}
                  </span>
                  <span className="h5 et-journal__title">{post.title}</span>
                  {post.tags?.length ? (
                    <span className="body-sm et-journal__tags">
                      {post.tags.slice(0, 3).join(" · ")}
                    </span>
                  ) : null}
                  <ArrowUpRight className="et-journal__arrow" {...LINE} />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function Home({ posts = [], jobPhotos = {} }) {
  const cvUrl = useCvUrl(images.cv);
  const liveTestimonials = useTestimonials(testimonials);

  return (
    <>
      <Hero cvUrl={cvUrl} />

      <TrustedBy />

      {/* ============================= 01 what i do ========================== */}
      <section className="et-section" aria-labelledby="what-i-do">
        <div className="et-container">
          <Intro
            index="01"
            title="What I do"
            id="what-i-do"
            action={{ href: "/about", label: "Full bio", internal: true }}
          />
          <ol className="et-index">
            {practice.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                className="et-index__row"
                delay={stagger(i)}
              >
                <span className="label-lg et-index__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3 className="h4">{item.title}</h3>
                <p className="body-md">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ 02 selected work ======================= */}
      <SelectedWork />

      {/* ============================== 03 experience ======================== */}
      <Experience jobPhotos={jobPhotos} />

      {/* =============================== 04 awards =========================== */}
      <Awards />

      {/* =============================== 05 toolkit ========================== */}
      {/* Grouped by layer as a spec sheet: "does he do backend?" is answered
          by one column instead of a cloud of chips. */}
      <section className="et-section" aria-labelledby="toolkit">
        <div className="et-container">
          <Intro
            index="05"
            title="Toolkit"
            id="toolkit"
            action={{ href: "/services", label: "What I build", internal: true }}
          />
          <div className="et-spec">
            {techStack.map((group, i) => (
              <Reveal
                key={group.label}
                className="et-spec__col"
                delay={stagger(i)}
              >
                <p className="label-lg et-spec__label">{group.label}</p>
                <ul
                  className="et-spec__list"
                  aria-label={`${group.label} technologies`}
                >
                  {group.items.map((t) => (
                    <li key={t} className="body-lg">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== 06 gallery ========================== */}
      <Gallery />

      {/* ================================= 07 now ============================ */}
      <section className="et-section" aria-labelledby="now">
        <div className="et-container">
          <Intro
            index="07"
            title="Now"
            id="now"
            aside={<span className="tag">{now.updated}</span>}
          />
          <Reveal as="p" className="body-lg et-now__lead">
            {now.lead}
          </Reveal>

          {NOW_LAYOUT === "columns" ? (
            <div className="et-now-cols">
              {now.items.slice(0, 3).map((col, i) => (
                <Reveal key={col.mode} delay={stagger(i)}>
                  <p className="label-lg et-muted">{col.mode}</p>
                  <h3 className="h4">{col.subject}</h3>
                  <p className="body-md">{col.text}</p>
                </Reveal>
              ))}
            </div>
          ) : NOW_LAYOUT === "readout" ? (
            <ul className="et-readout">
              {now.items.map((col, i) => (
                <Reveal
                  as="li"
                  key={col.mode}
                  className="et-readout__row"
                  delay={stagger(i)}
                >
                  <p className="label-lg">{col.mode}</p>
                  <h3 className="h5">{col.subject}</h3>
                  <p className="body-md">{col.short}</p>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal className="et-now-statement">
              <h3 className="h4">{now.headline}</h3>
              <p className="body-md">{now.prose}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* =============================== 08 voices =========================== */}
      <Voices items={liveTestimonials} />

      {/* ============================== 09 elsewhere ========================= */}
      <section className="et-section" aria-labelledby="elsewhere">
        <div className="et-container">
          <Intro index="09" title="Elsewhere" id="elsewhere" />
          <Reveal as="ul" className="et-cells">
            {professionalProfiles.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="et-cell"
                >
                  <span className="h5">{p.label}</span>
                  <ArrowUpRight {...LINE} />
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================== 10 journal =========================== */}
      <Journal posts={posts} />

      {/* ================================ contact ============================ */}
      <ContactBand />
    </>
  );
}
