# pappudey.com

Personal site of Pappu Dey. Next.js 16 (App Router), exported as static HTML
and hosted on Apache. The admin panel (`admin/`) and API (`server/`) are
separate apps in this repository.

## Develop

```bash
npm install
npm run dev        # http://localhost:5175
npm run lint
```

## Build and deploy

```bash
npm run build      # writes the whole site to out/
```

Upload **the contents of `out/`** (including the hidden `.htaccess`) to the
web root. Every page is a real HTML file (`/about` → `about.html`); the
`.htaccess` maps clean URLs, forces HTTPS, redirects retired URLs (`/classic`,
`/project/*`) and serves `404.html` for unknown paths.

`npm run build` also runs `scripts/flatten-segments.mjs`, which copies the
prefetch payloads to the paths the Next.js router requests, so in-site
navigation stays instant on static hosting.

## Content

| What | Where |
| --- | --- |
| Profile, projects, experience, education, awards, testimonials, gallery | `src/white/data.js` |
| Blog posts | the API (`NEXT_PUBLIC_API_BASE_URL`), else `src/white/lib/postsFallback.js` |
| Photos under each role in Experience | `public/experience/<folder>/` (see its README) |
| CV download | `public/pappu-dey-cv.pdf` |
| Social share image | `public/og-image.png` (1200×630) |
| Notes for AI assistants | `public/llms.txt` |

Blog posts and admin-written service pages are fetched **at build time**. After
publishing a post in the admin panel, rebuild and upload `out/` again. If the
API is not reachable during the build, the built-in posts are used.

## SEO

- Per-page title, description, canonical URL and Open Graph / Twitter cards
  come from `pageMeta()` in `src/white/seo.js`.
- Structured data (JSON-LD): Person and WebSite on every page, plus the page
  type (ProfilePage, AboutPage, ContactPage, CollectionPage, BlogPosting,
  Service, SoftwareApplication) and breadcrumbs.
- `sitemap.xml` and `robots.txt` are generated from the same data
  (`src/app/sitemap.js`, `src/app/robots.js`).

## Design

Editorial monochrome system (Geist + Geist Mono, white page, black accents,
light `#E5E5E5` hairlines). All styles live in
`src/white/editorial/editorial.css`; shared building blocks in
`src/white/editorial/ui.jsx`.
