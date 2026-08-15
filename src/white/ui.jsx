/* ---------------------------------------------------------------------------
   White edition — shared primitives.
   Each one mirrors a component from the reference design spec.
   --------------------------------------------------------------------------- */

import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Facebook,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/* Link with a leading glyph — the most-repeated pattern on the site.          */
/* External destinations get `external-link`, internal routes get              */
/* `arrow-up-right`, so the icon never misrepresents where the link goes.      */
/* -------------------------------------------------------------------------- */

export function GlyphLink({
  href,
  internal = false,
  primary = false,
  secondary = false,
  children,
  className = "",
}) {
  const Icon = internal ? ArrowUpRight : ExternalLink;
  const button = primary || secondary;
  const glyph = (
    <Icon
      width={13}
      height={13}
      strokeWidth={2}
      className={`translate-y-[1px] shrink-0 ${
        button ? "" : "text-[color:var(--w-heading)]"
      }`}
      aria-hidden="true"
    />
  );
  const cls = primary
    ? `w-btn-primary ${className}`
    : secondary
      ? `w-btn-secondary ${className}`
      : `inline-flex items-baseline space-x-1 hover:underline ${className}`;

  if (internal) {
    return (
      <Link to={href} className={cls}>
        {glyph}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {glyph}
      <span>{children}</span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Chips                                                                       */
/* -------------------------------------------------------------------------- */

export function Chip({ children, active = false, className = "", ...rest }) {
  return (
    <span
      className={`${active ? "w-chip" : "w-chip-secondary"} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-block rounded bg-[color:var(--w-badge)] px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Square outlined icon button (social row)                                    */
/* -------------------------------------------------------------------------- */

const ICONS = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
  message: MessageCircle,
  calendar: Calendar,
  file: FileText,
};

export function IconButton({ icon, title, href, download = false }) {
  const Icon = ICONS[icon] || Globe;
  return (
    <a
      href={href}
      title={title}
      aria-label={title}
      {...(download
        ? { download: "Pappu_Dey_CV.pdf" }
        : { target: "_blank", rel: "noopener noreferrer" })}
      className="inline-flex items-center justify-center rounded-md border border-[color:var(--w-border)] p-2 text-sm font-medium transition-colors hover:bg-[color:var(--w-hover)]"
    >
      <Icon
        className="h-3 w-3 md:h-4 md:w-4"
        strokeWidth={2}
        aria-hidden="true"
      />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Location line                                                               */
/* -------------------------------------------------------------------------- */

export function LocationLine({ label, href }) {
  return (
    <div className="mb-4 flex flex-col justify-center text-sm">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${label}`}
        className="inline-flex w-fit items-center gap-x-1.5 hover:underline"
      >
        <MapPin className="h-3 w-3 shrink-0" strokeWidth={2} aria-hidden="true" />
        {label}
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Avatar with the rotating four-arc ring                                      */
/* -------------------------------------------------------------------------- */

export function RingAvatar({ src, alt, size = 220 }) {
  return (
    <div className="w-avatar relative mx-auto flex-shrink-0 md:mx-0">
      <div
        className="w-ring-spin absolute"
        style={{ inset: -8 }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page + section scaffolding                                                  */
/* -------------------------------------------------------------------------- */

/* Title + lede is one block so the card's `space-y-8` does not double up
   with the internal margin. */
export function PageTitle({ children, lede }) {
  return (
    <div>
      {/* 600 is reserved for display sizes; body headings sit at 500. */}
      <h1 className="mb-3 text-2xl font-semibold tracking-[-0.01em]">
        {children}
      </h1>
      {lede ? (
        <p className="w-prose max-w-[548px] text-sm">{lede}</p>
      ) : null}
    </div>
  );
}

export function Section({ id, title, children, className = "", bold = false }) {
  return (
    <section id={id} className={`flex flex-col gap-y-6 ${className}`}>
      {title ? (
        bold ? (
          <div className="flex items-baseline gap-3">
            <h2 className="w-display shrink-0 text-base font-extrabold uppercase tracking-[0.04em]">
              {title}
            </h2>
            <span
              className="h-px flex-1"
              style={{ backgroundColor: "var(--w-border)" }}
              aria-hidden="true"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <h2 className="text-xl font-medium">{title}</h2>
          </div>
        )
      ) : null}
      {children}
    </section>
  );
}

export function RecordList({ children }) {
  return <div className="space-y-12">{children}</div>;
}

/* -------------------------------------------------------------------------- */
/* Section head with a rule and an optional trailing link                     */
/* -------------------------------------------------------------------------- */

export function SectionHead({ title, action, id }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <h2
        id={id}
        className="w-display shrink-0 text-base font-extrabold uppercase tracking-[0.04em]"
      >
        {title}
      </h2>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: "var(--w-border)" }}
        aria-hidden="true"
      />
      {action ? (
        <span className="shrink-0 text-xs">
          <GlyphLink href={action.href} internal={action.internal}>
            {action.label}
          </GlyphLink>
        </span>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Availability status with a live dot                                        */
/* -------------------------------------------------------------------------- */

/* One pill shape shared by every meta item in the hero, so the row reads as a
   set rather than as a pill sitting next to some loose text. */
const PILL =
  "inline-flex items-center gap-2 rounded-full border border-[color:var(--w-border)] px-3 py-1 text-xs";

export function StatusPill({ children, tone = "open" }) {
  const color = tone === "open" ? "var(--w-ring-4)" : "var(--w-sep)";
  return (
    <span className={PILL}>
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span
          className="w-status-ping absolute inline-flex h-full w-full rounded-full opacity-60"
          style={{ backgroundColor: color }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>
      {children}
    </span>
  );
}

/* Borderless: it is a fact about me, not a control, so it does not need a
   container. The pin carries the meaning and the underline carries the link. */
export function LocationPill({ label, timezone, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Location: ${label}`}
      className="inline-flex items-center gap-2 text-xs hover:underline"
    >
      <MapPin className="h-3 w-3 shrink-0" strokeWidth={2} aria-hidden="true" />
      {label}
      {timezone ? (
        <>
          <span className="text-[color:var(--w-sep)]" aria-hidden="true">
            ·
          </span>
          <span className="text-[color:var(--w-muted)]">{timezone}</span>
        </>
      ) : null}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Monospace bar — the font is the chart engine, no library involved           */
/* Values come from counting real projects, never from self-rated proficiency.  */
/* -------------------------------------------------------------------------- */

/* U+2588 FULL BLOCK does not fill its advance width in IBM Plex Mono, so a run
   of them renders as a picket fence with a hairline gap between every cell —
   no amount of tracking closes it, because the gap is inside the glyph. The
   cells are drawn as real elements instead: same character-grid rhythm, but it
   renders crisply and the deliberate gap becomes part of the form.
   One cell = one project, so the chart is countable rather than proportional. */
export function CellMeter({ label, value, total }) {
  return (
    <div className="flex items-center gap-3 text-[11px]">
      <span className="w-24 shrink-0 truncate text-[color:var(--w-text)]">
        {label}
      </span>
      {/* The cell strip takes the remaining width and each cell flexes to an
          equal share, so a row always spans its whole column instead of
          stopping halfway and leaving a dead margin. 1px divisions keep the
          cells countable while the fill still reads continuous. */}
      <span
        className="flex min-w-0 flex-1 gap-px"
        role="img"
        aria-label={`${value} of ${total} projects`}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className="block h-3 flex-1"
            style={{
              backgroundColor:
                i < value ? "var(--w-heading)" : "var(--w-border)",
            }}
          />
        ))}
      </span>
      <span
        className="w-7 shrink-0 text-right tabular-nums text-[color:var(--w-muted)]"
        aria-hidden="true"
      >
        {value}/{total}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Link row with pipe separators                                               */
/* -------------------------------------------------------------------------- */

export function PipeLinks({ links }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      {links.map((link, i) => (
        <span key={link.href + link.label} className="inline-flex items-center">
          <GlyphLink href={link.href} internal={link.internal}>
            {link.label}
          </GlyphLink>
          {i < links.length - 1 ? (
            <span className="ml-3 text-[color:var(--w-sep)]" aria-hidden="true">
              |
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Record card — one anatomy shared by projects / awards / experience          */
/* -------------------------------------------------------------------------- */

export function RecordCard({
  title,
  subtitle,
  meta,
  role,
  description,
  links = [],
  children,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium md:text-base">{title}</h3>
          {subtitle ? (
            <p className="text-sm text-[color:var(--w-muted)]">{subtitle}</p>
          ) : null}
        </div>
        {meta ? (
          <span className="flex-none text-sm text-[color:var(--w-muted)]">
            {meta}
          </span>
        ) : null}
      </div>
      {role ? (
        <p className="text-sm text-[color:var(--w-tertiary)]">{role}</p>
      ) : null}
      {description ? <p className="text-sm">{description}</p> : null}
      {children}
      {links.length > 0 ? <PipeLinks links={links} /> : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Media item — thumbnail + text row, used by the project lists                */
/* -------------------------------------------------------------------------- */

export function MediaItem({
  image,
  title,
  titleHref,
  excerpt,
  meta,
  links = [],
}) {
  return (
    <div className="flex gap-3 md:gap-6">
      <div className="relative h-[54px] w-24 flex-none md:h-[135px] md:w-[240px]">
        {titleHref ? (
          <a href={titleHref} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-lg border border-[color:var(--w-border)] object-cover"
            />
          </a>
        ) : (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-lg border border-[color:var(--w-border)] object-cover"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-sm font-medium md:line-clamp-3 md:text-base">
              {titleHref ? (
                <a
                  href={titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            {excerpt ? (
              <p className="hidden text-sm text-[color:var(--w-muted)] md:block">
                {excerpt}
              </p>
            ) : null}
          </div>
          {meta ? (
            <span className="ml-4 hidden flex-none text-sm text-[color:var(--w-muted)] md:block">
              {meta}
            </span>
          ) : null}
        </div>
        {links.length > 0 ? (
          <div className="text-xs md:text-sm">
            <PipeLinks links={links} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
