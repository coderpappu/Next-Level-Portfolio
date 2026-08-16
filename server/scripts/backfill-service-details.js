// Standalone script — NOT a knex seed file (same reasoning as
// seed-blog-posts.js: db/seeds/ files all re-run together via `knex
// seed:run`, and 001_from_data_js.js would wipe every admin edit made
// since the original seed). Matches existing rows by title and only
// updates the new detail-page columns; run directly:
//   node scripts/backfill-service-details.js
require("dotenv").config();
const db = require("../src/db");

const DETAILS = [
  {
    title: "SaaS & Web Applications",
    slug: "saas-web-applications",
    seo_title: "SaaS & Web Application Development",
    seo_description:
      "Multi-tenant SaaS platforms and custom web applications — React, Node.js, and PostgreSQL, built and shipped end to end.",
    content_md: `I design and build multi-tenant SaaS platforms and custom web applications end to end — data model, backend, and the interface on top. This is the core of what I do: it's the work behind the HRM platform I build at Xceed Bangladesh LTD, and behind E-Clearance, which turned Chattogram Polytechnic Institute's two-week paper clearance process into a two-day digital workflow.

## What's included

- Multi-tenant architecture designed so one deployment serves multiple organisations safely — tenant isolation enforced at the data-access layer, not left to be remembered per query
- Authentication and role-based access control
- Admin dashboards and reporting
- Payment integration where the product needs it
- A REST API underneath, documented and versioned from day one

## Typical stack

React, Node.js, Express, PostgreSQL with Prisma — the same stack this site's own backend runs on. I reach for Laravel and MySQL instead when a project's ecosystem (WordPress-adjacent, existing client infrastructure) makes that the better fit, as it did for Mini Dokan.

## Where this fits best

This is the right service if you need a real product — something with users, accounts, and data that has to stay correct over years, not a marketing site. If what you actually need is a WordPress site you can edit yourself, I'll tell you that instead of over-building.`,
  },
  {
    title: "Android Mobile Apps",
    slug: "android-mobile-apps",
    seo_title: "Android Mobile App Development",
    seo_description:
      "Native and cross-platform Android applications built with React Native, published to Google Play.",
    content_md: `I build Android applications with React Native — native performance, a single codebase, and a straightforward path to the Play Store. Cribo Health's Android app, a personal health record manager, is a shipped example: built, published, and live on Google Play.

## What's included

- React Native app architecture, wired to the same backend patterns I use for web (Node.js/Express APIs, PostgreSQL)
- Offline-tolerant data handling where the app needs to work without a constant connection
- Play Store submission and release management
- Integration with device-native features (camera, storage, notifications) where the product calls for it

## How I work

The mobile app is rarely the whole product — it's usually the client-facing half of a system that also has a backend and often a web admin panel. I build all three as one coherent system rather than treating the app as an isolated deliverable, so the API contract and data model are designed for the app from the start, not retrofitted afterward.

## Where this fits best

Straightforward CRUD-and-content apps, account-based apps, and apps that need to talk to a backend you also want built well. For something requiring deep native platform APIs beyond what React Native's ecosystem covers, I'll say so upfront rather than force-fit the wrong tool.`,
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    seo_title: "AI Automation & Workflow Integration",
    seo_description:
      "AI workflows, automation pipelines, and ML integrations wired directly into the systems your team already uses.",
    content_md: `Most businesses don't need a research team building models from scratch — they need an existing AI capability wired correctly into a workflow their team already runs. That's the work I do: automation pipelines and ML integrations connected to real systems, not detached proofs of concept.

## What's included

- Wiring LLM APIs and existing AI services into internal tools and client-facing products
- Automation pipelines that remove a manual step from a real workflow (data ingestion, moderation queues, content generation, document processing)
- Integration work — connecting an AI capability to your existing database, CRM, or internal dashboard, not standing up a parallel system nobody uses

## How I approach it

I build for the workflow first: what manual step is this replacing, what happens when the AI gets something wrong, and who reviews the output. Dev Tools Hunt's moderation pipeline is a version of this pattern — automation handling the volume, a human queue handling judgment calls the system shouldn't make alone.

## Where this fits best

Automating a specific, well-understood task inside a system you already run. This is not custom model training or research-grade ML — for that scope of work, I'd point you toward a specialist rather than take it on outside my depth.`,
  },
  {
    title: "DevOps & Cloud Infrastructure",
    slug: "devops-cloud-infrastructure",
    seo_title: "DevOps & Cloud Infrastructure Setup",
    seo_description:
      "CI/CD pipelines and cloud infrastructure that scale reliably, with monitoring and a rollback plan built in from day one.",
    content_md: `Infrastructure work that doesn't get attention until it breaks is infrastructure that was built wrong. I set up CI/CD pipelines and cloud infrastructure with monitoring and a rollback plan included from the start, not added after the first incident.

## What's included

- CI/CD pipelines — automated testing and deployment, so shipping isn't a manual, error-prone ritual
- Cloud infrastructure setup and configuration, sized for what the product actually needs rather than over-provisioned by default
- Monitoring and alerting wired to something a human actually checks
- A documented rollback plan for every deployment path, not just the happy one

## How I think about it

The projects on this site that reach production — E-Clearance, the Xceed HRM platform — all needed this layer to actually stay reliable once real users depended on them. Infrastructure decisions get made with the same "known limit" honesty as everything else here: I'd rather tell you a setup is sized for your current scale and will need revisiting at 10x traffic than oversell headroom you're not paying for yet.

## Where this fits best

Products that are past the prototype stage and need to stay up reliably for real users. If you're pre-launch and just need something running, I'll recommend the lighter setup that fits that stage instead.`,
  },
  {
    title: "API Development",
    slug: "api-development",
    seo_title: "REST API Development",
    seo_description:
      "Secure, documented REST APIs that connect your entire stack — authentication, rate limiting, and versioning included.",
    content_md: `Every product I build ends up needing a well-designed API underneath it, so this is work I do constantly, not occasionally. Secure, documented REST APIs that the rest of your stack — web, mobile, third-party integrations — can actually depend on.

## What's included

- REST API design with clear resource boundaries and consistent conventions
- Authentication and authorization, including role-based access where multiple user types need different permissions
- Rate limiting, so one client can't degrade service for everyone else
- Versioning strategy from the first release, not bolted on after the first breaking change
- Documentation that's accurate, because an API nobody can integrate against correctly isn't done

## How I build them

The public API behind this very site is a working example — a Node.js/Express/PostgreSQL API with a clear public/admin boundary, JWT authentication, and documented endpoints, built to the same standard I bring to client work.

## Where this fits best

A product that needs to serve more than one client (web + mobile, or your own frontend plus a partner's integration) benefits most from API-first design. For a single, simple frontend with no other consumers, a lighter-weight approach might genuinely serve you better — I'll say so rather than build an API layer you don't need yet.`,
  },
  {
    title: "Hardware Integration",
    slug: "hardware-integration",
    seo_title: "IoT & Hardware Integration",
    seo_description:
      "IoT and embedded systems work where hardware meets software — device protocols, gateways, and dashboards.",
    content_md: `Software that has to talk to real hardware is a different discipline from software that only talks to a database, and it's where a lot of engineers stop. I work at that boundary — device protocols, gateways, and the dashboards that turn hardware data into something a business can act on.

## What's included

- Integrating point-of-sale and other physical devices with backend systems — the POS software I currently build at Xceed Bangladesh LTD runs against real hardware, not a simulator
- Device communication protocols and gateway software that bridges hardware to a standard API
- Dashboards and monitoring for IoT/embedded deployments
- Handling the realities of physical devices — intermittent connectivity, firmware quirks, hardware that doesn't always behave like its datasheet says

## How I approach it

This work rewards the same instinct as everything else on this site: know exactly what the device can and can't guarantee, and design the software around the real constraint instead of an idealized one. A dropped connection or a delayed sensor reading has to be a handled case, not a surprise in production.

## Where this fits best

Products where software genuinely needs to control or read from physical devices — retail hardware, sensors, embedded gateways. If what you actually need is a mobile app that happens to use a phone's built-in camera or GPS, that's standard mobile work, not hardware integration, and I'd scope it that way instead.`,
  },
];

async function main() {
  for (const service of DETAILS) {
    const row = await db("services").where({ title: service.title }).first();
    if (!row) {
      console.log(`Skipping "${service.title}" — no matching row found.`);
      continue;
    }
    if (row.slug) {
      console.log(`Skipping "${service.title}" — already has detail content.`);
      continue;
    }
    await db("services")
      .where({ id: row.id })
      .update({
        slug: service.slug,
        content_md: service.content_md,
        seo_title: service.seo_title,
        seo_description: service.seo_description,
        updated_at: db.fn.now(),
      });
    console.log(`Updated "${service.title}" -> /services/${service.slug}`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => db.destroy());
