/* ---------------------------------------------------------------------------
   SEO: one place for the site identity, per-page metadata and structured
   data (JSON-LD). Every route builds its <head> from pageMeta() and its
   schema from the helpers below, so titles, canonicals and social cards can
   never drift apart.
   --------------------------------------------------------------------------- */

import {
  education,
  experience,
  professionalProfiles,
  profile,
  techStack,
} from "./data";

export const SITE = {
  url: "https://pappudey.com",
  name: "Pappu Dey",
  title: "Pappu Dey — Software Engineer & SaaS Builder",
  description:
    "Pappu Dey is a software engineer and founder in Chattogram, Bangladesh, building multi-tenant SaaS platforms and web apps with React, Node.js and Laravel.",
  locale: "en_US",
  // 1200×630 social card, generated into public/.
  ogImage: "/og-image.png",
};

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();

/* Metadata for one page. `title` is the page's own title (the root layout
   adds " | Pappu Dey"); `path` is its URL path, used for the canonical. */
export function pageMeta({
  title,
  description,
  path,
  image = SITE.ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
  noindex = false,
}) {
  const url = absoluteUrl(path);
  const socialTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  return {
    // The root layout's template turns "About" into "About | Pappu Dey".
    title: title || { absolute: SITE.title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      title: socialTitle,
      description,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: socialTitle }],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors: [SITE.url],
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ------------------------------- JSON-LD ---------------------------------- */

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const personSchema = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  url: SITE.url,
  image: absoluteUrl(SITE.ogImage),
  jobTitle: "Software Engineer",
  description: profile.intro,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "BD",
  },
  worksFor: [
    { "@type": "Organization", name: experience[0].org, url: experience[0].url },
    { "@type": "Organization", name: experience[1].org, url: experience[1].url },
  ],
  alumniOf: education.slice(0, 2).map((e) => ({
    "@type": "EducationalOrganization",
    name: e.institution,
  })),
  knowsAbout: [
    "SaaS development",
    "Multi-tenant architecture",
    "AI automation",
    ...techStack.flatMap((g) => g.items).slice(0, 14),
  ],
  sameAs: professionalProfiles.map((p) => p.href),
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
});

/* Breadcrumb trail: [{ name, path }], Home is added first. */
export const breadcrumbSchema = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

/* A typed page (ProfilePage, AboutPage, ContactPage, CollectionPage…). */
export const webPageSchema = ({ type = "WebPage", path, name, description }) => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  inLanguage: "en",
});

export const articleSchema = (post, path) => ({
  "@type": "BlogPosting",
  "@id": `${absoluteUrl(path)}#article`,
  headline: post.title,
  description: post.excerpt,
  url: absoluteUrl(path),
  mainEntityOfPage: absoluteUrl(path),
  datePublished: post.published_at,
  dateModified: post.updated_at || post.published_at,
  keywords: (post.tags || []).join(", "),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": PERSON_ID, "@type": "Person", name: SITE.name, url: SITE.url },
  publisher: { "@id": PERSON_ID },
  inLanguage: "en",
});

/* Wraps nodes in one @graph document. */
export const graph = (...nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes.filter(Boolean),
});
