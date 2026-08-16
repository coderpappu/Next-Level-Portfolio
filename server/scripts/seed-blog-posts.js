// Standalone, one-off script — NOT a knex seed file (deliberately kept out of
// db/seeds/, since `knex seed:run` re-runs every file there, including
// 001_from_data_js.js, which would wipe every edit made through the admin
// panel since the original seed). Run directly: node scripts/seed-blog-posts.js
require("dotenv").config();
const db = require("../src/db");

const POSTS = [
  {
    slug: "multi-tenant-saas-lessons-e-clearance",
    title: "Building a Multi-Tenant SaaS: What I Actually Learned Shipping E-Clearance",
    excerpt:
      "Digitizing a two-week paper process into two days taught me more about schema design than any course did. Here's what actually mattered.",
    tags: ["SaaS", "PostgreSQL", "Architecture"],
    status: "published",
    published_at: "2026-07-20T09:00:00.000Z",
    content_md: `Chattogram Polytechnic Institute's clearance process used to take students up to two weeks — a physical form, walked department to department, signed by hand. E-Clearance turned that into a two-day digital workflow. The interesting part wasn't the frontend. It was getting the multi-tenant data model right on the first real attempt.

## The mistake I almost made

My first instinct was a single \`departments\` table with a \`institution_id\` foreign key, and application-level checks scattered through every query to make sure one institution never saw another's data. That works until it doesn't — one missed \`WHERE\` clause in a report query and you've leaked data across tenants. I scrapped it before writing a single migration.

## What actually shipped

Every table that holds tenant data carries \`institution_id\` as a **required, indexed** column, and every query goes through a single data-access layer that injects the tenant filter automatically — no route handler is allowed to query the database directly. It's more ceremony up front. It also means a new engineer can't accidentally forget the filter, because there's no path that skips it.

The approval graph itself — which departments a clearance request must pass through, and in what order — is stored as data, not code. That decision is the reason the system could serve one institution's specific process without a rewrite.

## Where it's still narrow

The approval graph is currently modelled on exactly one institution's structure. A second campus with a materially different departmental order would need that schema generalised — right now it's flexible in the dimensions Chattogram Polytechnic actually needed, not in every dimension a hypothetical second customer might need. I'd rather ship a system that's honestly scoped than one that pretends to be generic and is complex everywhere as a result.

That trade-off is the whole job, really: build for the real requirement in front of you, make the seams visible, and generalise later if a second real requirement actually shows up.`,
  },
  {
    slug: "why-postgresql-and-prisma-are-my-default",
    title: "Why PostgreSQL and Prisma Are My Default Now, Not MySQL",
    excerpt:
      "After years of defaulting to MySQL out of habit, here's what actually changed my mind — and where I still reach for the old stack.",
    tags: ["PostgreSQL", "Prisma", "Backend"],
    status: "published",
    published_at: "2026-07-30T09:00:00.000Z",
    content_md: `For most of my early client work, MySQL was the default — it's what shared hosting supported, what WordPress expected, what every tutorial assumed. I still reach for it on WordPress-based projects like Mini Dokan and Cribo Health's marketing site, because fighting the ecosystem's default isn't worth it there. But for anything I design from scratch now, it's PostgreSQL.

## The concrete reason, not the abstract one

The thing that actually changed my mind wasn't a benchmark — it was a real bug. A MySQL column silently truncated data past its length limit in a non-strict mode I didn't know was configured that way, and it took an afternoon to trace. Postgres fails loudly on the same class of mistake. For a solo engineer or a small team, "fails loudly" beats "silently wrong" every time, because you don't have a dedicated DBA reviewing every migration.

The other concrete win is native \`jsonb\`. The current backend behind this site stores flexible content — settings, tags, structured link lists — as real \`jsonb\` columns with actual query support, instead of a text column I'd have to parse in application code or a rigid table I'd have to migrate every time the shape changes slightly.

## Prisma's actual value

Prisma's schema file is the one source of truth I trust when I come back to a project after months away — the migration history and the current shape are both right there, generated, not hand-maintained in two places that can drift. For the HRM platform I build at Xceed, that matters more than any query-performance argument: multiple engineers touch that schema, and the generated client catches a wrong field name at compile time instead of in production.

## Where I'd still pick something else

Prisma's connection pooling story on serverless platforms has real rough edges, and for a system with genuinely complex, hand-tuned queries, I'd drop to raw SQL or a lighter query builder before fighting an ORM's abstraction. The stack is a default, not a religion — the job is picking the right tool for what's actually in front of you.`,
  },
  {
    slug: "running-codex-devware-while-employed-full-time",
    title: "Running a Software Company While Working Full-Time",
    excerpt:
      "Codex Devware started as evenings and weekends. Three years in, here's what actually made that sustainable — and what nearly broke it.",
    tags: ["Founder", "Codex Devware"],
    status: "published",
    published_at: "2026-08-05T09:00:00.000Z",
    content_md: `I founded Codex Devware in 2022 while still doing client work full-time. It's grown into a small team shipping the Codex LMS platform and client projects, and I'm currently also a Software Engineer at Xceed Bangladesh LTD, building an enterprise HRM platform. People ask how both fit in the same week. Honestly, for the first year, they mostly didn't.

## What nearly broke it

The first year I tried to be the bottleneck for everything — every client call, every code review, every deploy. That's the default failure mode for a technical founder who's also good at the work: you keep doing the work instead of building the thing that lets other people do it. Codex LMS's first version took twice as long as it should have because I was reviewing every pull request the same night it opened, after a full day job.

## What actually changed

I stopped being the reviewer for everything and started being the reviewer for the things that actually needed my judgment — data model decisions, anything touching payments, anything a junior engineer flagged as uncertain. Everything else got a second engineer's sign-off instead of mine. That one change freed up more time than any productivity system I tried.

The other real shift: employed work and founder work stopped competing once I started treating them as different kinds of practice instead of a zero-sum split of hours. The multi-tenant architecture I work on at Xceed directly informed how I rebuilt Codex LMS's enrolment flow. They're not really separate jobs — one funds stability and depth in a single large system, the other funds breadth across client problems and forces me to ship faster with less infrastructure. Neither replaces the other.

## The honest cost

I don't pretend this is free. Weekends are usually Codex Devware time, and the team knows evenings are when I'm reachable, not always business hours. That's a real trade a lot of people wouldn't take. For me, building things I actually own has been worth the hours — but I'd tell anyone considering the same thing to be honest with themselves about that cost before they start, not after.`,
  },
  {
    slug: "what-icpc-taught-me-about-production-code",
    title: "What Competitive Programming Actually Taught Me About Production Code",
    excerpt:
      "ICPC rewards fast, correct code under pressure. Production engineering rewards something almost opposite — here's where the two actually overlap.",
    tags: ["Engineering", "ICPC"],
    status: "published",
    published_at: "2026-08-12T09:00:00.000Z",
    content_md: `Team CPI Newbies and I competed in ICPC Asia Dhaka Regional 2024, ranking 189th. It's tempting to draw a straight line from competitive programming to production engineering — "it teaches you to code fast under pressure" — but that framing mostly misses what actually transferred.

## What doesn't transfer

Competitive code is disposable. You write it once, it either passes the judge or it doesn't, and then it's deleted forever. Nobody reads it again in six months trying to figure out why a field is named the way it is. Production code is read far more often than it's written, by people who aren't you, including future-you who has forgotten the context. Optimizing for "fast to write" and optimizing for "cheap to maintain" are frequently opposite goals, and competitive programming only trains the first one.

## What actually did transfer

Two things, and they're not what I expected going in.

**Reading a problem statement precisely, the first time.** In a contest, misreading a constraint costs you the whole problem — there's no partial credit for a plausible-sounding wrong answer. That habit of re-reading a requirement until you're certain you understand the actual constraint, not the constraint you assumed, has saved me from building the wrong feature more than once in client work.

**Recognising when a "clever" solution is actually the wrong one.** Contest problems have a size limit that forces you to reach for the right algorithmic complexity, not just any working one. That same instinct — noticing when an approach will fall over at real scale, before it's in production — is directly useful, even though the actual algorithms rarely show up again.

## Where I'd point a junior engineer instead

If someone asked me whether to spend their limited time on competitive programming or on reading other people's production codebases, I'd point them at the codebases. ICPC was worth it for me because of the constraints it puts on *thinking*, not because of any code it produced. The code itself, I'd never ship.`,
  },
];

async function main() {
  for (const post of POSTS) {
    const existing = await db("posts").where({ slug: post.slug }).first();
    if (existing) {
      console.log(`Skipping "${post.slug}" — already exists.`);
      continue;
    }
    await db("posts").insert({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content_md: post.content_md,
      tags: JSON.stringify(post.tags),
      status: post.status,
      published_at: post.published_at,
    });
    console.log(`Inserted "${post.slug}"`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => db.destroy());
