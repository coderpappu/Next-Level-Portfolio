"use client";

/* ---------------------------------------------------------------------------
   Shared building blocks for every page, so inner pages match the home page
   exactly: section heads, tertiary links, the inner-page header with
   breadcrumbs, and the closing contact band.
   --------------------------------------------------------------------------- */

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { profile } from "../data";
import { MaskedText, Reveal, RevealImage, Roll } from "./motion";

export const LINE = { strokeWidth: 1.5, "aria-hidden": true };
export const pad = (n) => String(n).padStart(2, "0");
export const stagger = (i) => Math.min(i * 80, 400);

/* Tertiary link: internal routes get an arrow, external ones the up-right
   arrow, so the icon never misrepresents where the link goes. */
export function TertiaryLink({ href, label, internal = false, download }) {
  if (internal) {
    return (
      <Link href={href} className="btn btn--tertiary">
        <Roll>{label}</Roll>
        <ArrowRight {...LINE} />
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="btn btn--tertiary"
      {...(download
        ? { download }
        : { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Roll>{label}</Roll>
      <ArrowUpRight {...LINE} />
    </a>
  );
}

/* Primary / secondary buttons as links (internal or external). */
export function ButtonLink({ href, children, variant = "primary", internal = false, download }) {
  const className = `btn btn--${variant}`;
  if (internal) {
    return (
      <Link href={href} className={className}>
        <Roll>{children}</Roll>
        <ArrowRight {...LINE} />
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      {...(download
        ? { download }
        : { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Roll>{children}</Roll>
      <ArrowUpRight {...LINE} />
    </a>
  );
}

/* Section head: numbered mono eyebrow, word-masked H3, optional link. */
export function Intro({ index, title, id, action, aside, as = "h2" }) {
  return (
    <div className="et-intro">
      <div>
        {index ? (
          <span className="eyebrow et-intro__eyebrow" aria-hidden="true">
            {index}
          </span>
        ) : null}
        <MaskedText as={as} id={id} className="h3" text={title} />
      </div>
      {aside || action ? (
        <div className="et-intro__aside">
          {aside}
          {action ? <TertiaryLink {...action} /> : null}
        </div>
      ) : null}
    </div>
  );
}

/* Inner-page header: breadcrumb trail, the page's one h1 (set in .h2, the
   hero headline role), a lede and optional actions. `trail` is
   [{ name, href }] after Home; the last item is the current page.
   `media` ({ src, width, height, alt, caption, kind }) adds an image beside
   the text, like the home hero: a photo at its own shape (never cropped) or
   an isometric illustration on a light panel. */
export function PageHeader({ trail, title, lede, media, children }) {
  return (
    <header
      className={`et-page-head${media ? " has-media" : ""}${media?.caption ? " has-caption" : ""}`}
    >
      <div className="et-container">
        {/* Own row, so it sits at the same height on every page. */}
        <nav aria-label="Breadcrumb" className="label-lg et-crumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {trail.map((c, i) => (
              <li key={c.href || c.name}>
                {i < trail.length - 1 && c.href ? (
                  <Link href={c.href}>{c.name}</Link>
                ) : (
                  <span aria-current="page">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="et-container et-page-head__grid">
        <div className="et-page-head__text">
          <MaskedText as="h1" className="h2 et-page-head__title" text={title} />
          {lede ? (
            <Reveal as="p" className="body-lg et-page-head__lede">
              {lede}
            </Reveal>
          ) : null}
          {children ? <Reveal className="et-page-head__actions">{children}</Reveal> : null}
        </div>
        {media ? (
          <figure
            className={`et-page-head__media is-${media.kind === "illustration" ? "illustration" : "photo"}`}
          >
            <RevealImage>
              <img
                src={media.src}
                alt={media.alt || ""}
                width={media.width}
                height={media.height}
                fetchPriority="high"
                decoding="async"
              />
            </RevealImage>
            {media.caption ? (
              <figcaption className="label-lg et-page-head__caption">{media.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </header>
  );
}

/* The closing contact band, shared by the home page and inner pages. */
export function ContactBand({
  title = "Building something?",
  text = "Tell me what you are working on. I reply with an approach and a rough timeline, usually within a day.",
}) {
  return (
    <section className="et-cta" aria-labelledby="contact-band-title">
      <div className="et-container">
        <MaskedText as="h2" id="contact-band-title" className="h2 et-cta__title" text={title} />
        <div className="et-cta__rule" aria-hidden="true" />
        <Reveal className="et-cta__row">
          <p className="body-lg">{text}</p>
          <div className="et-btn-row">
            <a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <Roll>Book a 15-min call</Roll>
              <ArrowUpRight {...LINE} />
            </a>
            <Link href="/contact" className="btn btn--secondary">
              <Roll>Send a message</Roll>
            </Link>
            <Link href="/resume" className="btn btn--tertiary">
              <Roll>View résumé</Roll>
              <ArrowRight {...LINE} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Horizontal photo row under a role. One shared height, natural widths, so
   nothing is cropped. Scrolls sideways (snap, keyboard-focusable). */
export function JobPhotos({ job, photos = [] }) {
  if (photos.length === 0) return null;
  return (
    <div className="et-job-photos">
      <div
        className="et-job-photos__strip"
        role="region"
        aria-label={`Photos from ${job.org}`}
        tabIndex={0}
      >
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${job.org}, photo ${i + 1} of ${photos.length}`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
