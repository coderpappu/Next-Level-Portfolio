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

export function GlyphLink({ href, internal = false, children, className = "" }) {
  const Icon = internal ? ArrowUpRight : ExternalLink;
  const glyph = (
    <Icon
      width={13}
      height={13}
      strokeWidth={2}
      className="translate-y-[1px] shrink-0 text-[color:var(--w-heading)]"
      aria-hidden="true"
    />
  );
  const cls = `inline-flex items-baseline space-x-1 hover:underline ${className}`;

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
    <div className="relative mx-auto flex-shrink-0 md:mx-0">
      <div
        className="w-ring-spin absolute"
        style={{ inset: -8 }}
        aria-hidden="true"
      >
        <div className="relative h-full w-full">
          <span className="absolute h-1/2 w-1/2 rounded-tl-full border-l-4 border-t-4 border-[color:var(--w-ring-1)]" />
          <span className="absolute right-0 h-1/2 w-1/2 rounded-tr-full border-r-4 border-t-4 border-[color:var(--w-ring-2)]" />
          <span className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-br-full border-b-4 border-r-4 border-[color:var(--w-ring-3)]" />
          <span className="absolute bottom-0 h-1/2 w-1/2 rounded-bl-full border-b-4 border-l-4 border-[color:var(--w-ring-4)]" />
        </div>
      </div>
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
      <h1 className="mb-3 text-2xl font-bold">{children}</h1>
      {lede ? <p className="text-sm">{lede}</p> : null}
    </div>
  );
}

export function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`flex flex-col gap-y-6 ${className}`}>
      {title ? (
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function RecordList({ children }) {
  return <div className="space-y-12">{children}</div>;
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
          <h3 className="text-sm font-semibold md:text-base">{title}</h3>
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

export function MediaItem({ image, title, excerpt, meta, links = [] }) {
  return (
    <div className="flex gap-3 md:gap-6">
      <div className="relative h-[54px] w-24 flex-none md:h-[135px] md:w-[240px]">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full rounded-lg border border-[color:var(--w-border)] object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-sm font-semibold md:line-clamp-3 md:text-base">
              {title}
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
