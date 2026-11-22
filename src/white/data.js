/* ---------------------------------------------------------------------------
   Single source of truth for the white edition.
   Every page reads from here — edit content in one place.
   --------------------------------------------------------------------------- */

import avatarAsset from "../assets/pappu-dey.jpg";
import cribohealthAppAsset from "../assets/cribohealth-app.png";
import cribohealthSiteAsset from "../assets/cribohealth-site.png";
import dashboardImgAsset from "../assets/dashboard.png";
import devtoolsHuntImgAsset from "../assets/devtoolshunt.png";
import icpcCertificateAsset from "../assets/icpc_certificate.png";
import lmsImgAsset from "../assets/lms-system.jpg";
import miniDokanImgAsset from "../assets/mini-dokan.png";
import recommendationLetterAsset from "../assets/pappudey_recomendation_certificate.jpg";
import reportImgAsset from "../assets/report.png";
import workstationImgAsset from "../assets/work-time-station.jpg";
// Cropped, right-sized copy of CriboHealth.png (the 2481px original is still
// used by the classic site).
import criboHealthLogoAsset from "../assets/logos/cribohealth-mark.png";
import chattogramPolyLogoAsset from "../assets/logos/chattogram-polytechnic.png";
import decEngineersClubLogoAsset from "../assets/logos/decEngineersClub.webp";
import milgecLogoAsset from "../assets/logos/milgec.png";
import wMarkLogoAsset from "../assets/logos/w-mark.png";
import researchLabLogoAsset from "../assets/logos/researchLabLogo.png";
import xceedLogoAsset from "../assets/logos/xceedLogo.png";
// Lighter copies (800px tall) of traning-…jpg and icpc-team-…jpg, for the
// home page's Experience picture panel.
import codexSeminarImgAsset from "../assets/exp-codex-seminar.jpg";
import cpiIcpcImgAsset from "../assets/exp-cpi-icpc.jpg";
// Gallery. gallery-border-robot.jpg is an 800px-tall copy of robot-my-…jpg.
import borderRobotImgAsset from "../assets/gallery-border-robot.jpg";
import rlcRobotImgAsset from "../assets/robotics-rlc-DdnqF7T4.jpg";
import speakingImgAsset from "../assets/pic.jpg";

/* Next.js image imports are objects ({ src, width, height }); the site works
   with plain URLs, so every asset is resolved to its URL once, here. */
const assetUrl = (asset) => (typeof asset === "string" ? asset : asset.src);
const avatar = assetUrl(avatarAsset);
const cribohealthApp = assetUrl(cribohealthAppAsset);
const cribohealthSite = assetUrl(cribohealthSiteAsset);
const dashboardImg = assetUrl(dashboardImgAsset);
const devtoolsHuntImg = assetUrl(devtoolsHuntImgAsset);
const icpcCertificate = assetUrl(icpcCertificateAsset);
const lmsImg = assetUrl(lmsImgAsset);
const miniDokanImg = assetUrl(miniDokanImgAsset);
const recommendationLetter = assetUrl(recommendationLetterAsset);
const reportImg = assetUrl(reportImgAsset);
const workstationImg = assetUrl(workstationImgAsset);
const criboHealthLogo = assetUrl(criboHealthLogoAsset);
const chattogramPolyLogo = assetUrl(chattogramPolyLogoAsset);
const decEngineersClubLogo = assetUrl(decEngineersClubLogoAsset);
const milgecLogo = assetUrl(milgecLogoAsset);
const wMarkLogo = assetUrl(wMarkLogoAsset);
const researchLabLogo = assetUrl(researchLabLogoAsset);
const xceedLogo = assetUrl(xceedLogoAsset);
const codexSeminarImg = assetUrl(codexSeminarImgAsset);
const cpiIcpcImg = assetUrl(cpiIcpcImgAsset);
const borderRobotImg = assetUrl(borderRobotImgAsset);
const rlcRobotImg = assetUrl(rlcRobotImgAsset);
const speakingImg = assetUrl(speakingImgAsset);
// The CV lives in public/ so it has a clean, stable URL.
const cvFile = "/pappu-dey-cv.pdf";

export const images = {
  avatar,
  workstation: workstationImg,
  recommendationLetter,
  icpcCertificate,
  cv: cvFile,
};

/* Photos used as page-header images on the inner pages, with their pixel
   sizes so they show at their own shape (never cropped). */
export const photos = {
  avatar: { src: avatar, width: 704, height: 872, alt: "Portrait of Pappu Dey" },
  workstation: { src: workstationImg, width: 864, height: 864, alt: "Pappu Dey at his workstation in Chattogram" },
  speaking: { src: speakingImg, width: 689, height: 891, alt: "Pappu Dey speaking at a D Engineers Club event", caption: "Speaking at a D Engineers Club event" },
  seminar: { src: codexSeminarImg, width: 1200, height: 800, alt: "Pappu Dey presenting at a school IT seminar run by Codex Devware", caption: "School IT seminar · Codex Devware" },
  icpcTeam: { src: cpiIcpcImg, width: 1067, height: 800, alt: "Team CPI Newbies at the ICPC Asia Dhaka Regional Contest 2024", caption: "ICPC Asia Dhaka Regional 2024 · Team CPI Newbies" },
  rlcTeam: { src: rlcRobotImg, width: 720, height: 755, alt: "Team RLC with their surveillance robot", caption: "Surveillance robot · Team RLC" },
  borderRobot: { src: borderRobotImg, width: 1003, height: 800, alt: "Visitors at the border guard robot demonstration", caption: "Border guard robot" },
  eClearance: { src: reportImg, width: 862, height: 652, alt: "E-Clearance dashboard on laptop and phone", caption: "E-Clearance · SaaS clearance system" },
  criboApp: { src: cribohealthApp, width: 1482, height: 936, alt: "Cribo Health Android app screens", caption: "Cribo Health · Android app" },
};

export const profile = {
  name: "Pappu Dey",
  roleA: "Software Engineer",
  roleB: "SaaS Builder",
  headline: "Pappu Dey - Software Engineer & SaaS Builder",
  /* Name, role, and location are already stated by the h1, the role line, and
     the location line. The intro only has to say what the work is. */
  intro:
    "I build multi-tenant SaaS platforms, production web applications, and hardware-integrated systems — for startups, institutions, and enterprises.",
  location: "Chattogram, Bangladesh",
  mapsUrl:
    "https://www.google.com/maps/search/Chattogram%2C%20Bangladesh",
  email: "pappudeydeveloper@gmail.com",
  site: "https://pappudey.com",
  calendly: "https://calendly.com/pappudeydeveloper/30min",
  github: "https://github.com/coderpappu",
  linkedin: "https://www.linkedin.com/in/coderpappu/",
  facebook: "https://www.facebook.com/coderpappudey",
  // TODO: replace with the real number — the classic footer still has a placeholder.
  whatsapp: "https://wa.me/8801XXXXXXXXX",
};

export const availability = {
  open: true,
  label: "Available for select projects",
};

/* Answers "what does he actually do", in plain language, with evidence.
   Deliberately NOT a key/value fact list: role, location, and stack are
   already stated in the hero and in the Toolkit section, and repeating them
   here made the page read as metadata rather than as a person. */
/* Currently unrendered: it repeated the hero intro's opening clause. Kept here
   in case section 01 ever wants a lead again. */
export const practiceLead =
  "I build multi-tenant SaaS platforms end to end — data model, backend, and interface — and run a software company that ships client products alongside my own.";

/* Titles are deliberately parallel and verb-led so the column completes the
   section head as a sentence: "What I do — build…, ship…, run…". Mixed forms
   (a noun, a possessive, an article phrase) read as three unrelated labels. */
export const practice = [
  {
    title: "Build enterprise SaaS",
    description:
      "Multi-tenant systems with payroll, attendance, and role-based access. Currently the HRM platform at Xceed Bangladesh LTD, running real operations for multiple organisations.",
  },
  {
    title: "Ship my own products",
    description:
      "E-Clearance turned a two-week paper process into two days for Chattogram Polytechnic Institute. Dev Tools Hunt is a discovery platform with its own ingestion and moderation pipeline.",
  },
  {
    title: "Run a software company",
    description:
      "Codex Devware, founded 2022. Leading a small team on client work and the Codex LMS is how I ended up doing Android, DevOps, AI automation, and IoT hardware integration too.",
  },
];

/* Short, dated "what I'm doing right now" block. Keep this current — it is the
   part of the site that proves it is maintained. */
/*
 * Two approved layouts render from this one list — switch with NOW_LAYOUT at
 * the top of pages/Home.jsx:
 *
 *   "columns"   — three verb-led columns
 *   "readout"   — compact label/value status board, three lines total
 *   "statement" — one bold headline plus supporting prose
 *
 * `text` feeds the columns, `short` feeds the readout, `headline` + `prose`
 * feed the statement. All of it lives here so no version can drift from the
 * others. Keep `updated` current — a stale "Now" is worse than none.
 */
export const now = {
  updated: "August 2026",
  headline:
    "Rebuilding payroll and attendance for an HRM platform already in production.",
  prose:
    "Architecting the multi-tenant modules for Xceed HRM and the role-based access that sits under them. Leading the Codex Devware team through the Codex LMS rebuild — new data model, new enrolment flow. Reading up on distributed systems in between, alongside my BSc at East Delta University.",
  lead: "What has my attention this month — work in progress, not the finished list.",

  /* Three threads, kept short: the detail belongs on /experience and /projects.
     `short` feeds the readout, `text` the three-column variant. */
  items: [
    {
      mode: "Building",
      subject: "POS software",
      short:
        "Point of sale with integrated hardware at Xceed Bangladesh LTD — software running against real devices.",
      text: "Point of sale with integrated hardware at Xceed Bangladesh LTD.",
    },
    {
      mode: "Leading",
      subject: "CRM and AI automation",
      short:
        "The current builds at Codex Devware, with a small team.",
      text: "The current builds at Codex Devware, with a small team.",
    },
    {
      mode: "Learning",
      subject: "AI/ML, electronics, algorithms",
      short:
        "Machine learning, electronic circuits, and algorithms, through my BSc at East Delta University.",
      text: "Machine learning, electronic circuits, and algorithms, through my BSc at East Delta University.",
    },
  ],
};

export const knownFor = [
  {
    label: "Software Engineer, Xceed Bangladesh LTD",
    suffix: " - enterprise HRM SaaS",
    href: "https://www.linkedin.com/in/coderpappu/",
  },
  {
    label: "Founder & CEO, Codex Devware",
    suffix: "(est. 2022) - software company",
    href: "https://eshop.codexdevware.com",
  },
  {
    label: "Creator, E-Clearance",
    suffix: " - SaaS clearance system for Chattogram Polytechnic Institute",
    href: "https://ctgpolyclearance.com",
    projectId: "e-clearance",
  },
  {
    label: "Creator, Dev Tools Hunt",
    suffix: " - developer tool discovery platform",
    href: "https://devtoolshunt.me",
    projectId: "devtoolshunt",
  },
  {
    label: "ICPC Asia Dhaka Regionalist 2024",
    suffix: " - Team CPI Newbies",
    href: "https://icpc.global",
  },
];

/* Organisations I have worked for or built for: the logo row on the home
   page. Same list and links as the classic site's "Built for & trusted by".
   Logos show in their own colours on the light page. `tone` picks how each
   mark turns monochrome where colour would not read:
     "gray"   dark theme: inverted grayscale, keeps inner detail
     "solid"  dark theme: one white shape
     "invert" a mark drawn in white for dark backgrounds; shown inverted
              (black) on the light page so it does not vanish
   `height` (px) balances the marks optically, since every file has a
   different shape and a different amount of empty padding.
   `url` is optional: an entry without one shows the logo with no link. */
export const trustedBy = [
  {
    name: "Xceed Bangladesh",
    logo: xceedLogo,
    url: "https://xceedbd.com",
    tone: "gray",
    height: 48,
  },
  {
    name: "Research Lab CTG",
    logo: researchLabLogo,
    url: "https://researchlabctg.com",
    tone: "solid",
    height: 60,
  },
  {
    name: "Chattogram Polytechnic Institute",
    logo: chattogramPolyLogo,
    url: "https://chattogram.polytech.gov.bd",
    tone: "gray",
    height: 60,
  },
  {
    name: "Cribo Health",
    logo: criboHealthLogo,
    url: "https://cribohealth.com",
    tone: "solid",
    height: 44,
  },
  {
    name: "D Engineers Club",
    logo: decEngineersClubLogo,
    url: "https://dengineersclub.org",
    tone: "gray",
    height: 50,
  },
  {
    // milgec.png is the supplied logo with its thin white letter outline
    // removed, so the solid black treatment stays readable.
    // TODO: add `url` once the company website is confirmed.
    name: "Milgec (中邦)",
    logo: milgecLogo,
    tone: "solid",
    height: 44,
  },
  {
    // w-mark.png is the supplied blue app-icon tile turned into a transparent
    // mark in the brand's own blue (#1F51FE), to sit with the other logos.
    // TODO: replace "Client" with the company's real name and add its `url`.
    name: "Client",
    logo: wMarkLogo,
    tone: "solid",
    height: 40,
  },
];

export const professionalProfiles = [
  { label: "GitHub", href: "https://github.com/coderpappu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/coderpappu/" },
  { label: "Codex Devware", href: "https://eshop.codexdevware.com" },
  { label: "Dev Tools Hunt", href: "https://devtoolshunt.me" },
  { label: "Facebook", href: "https://www.facebook.com/coderpappudey" },
];

/* icon key maps to a lucide component in ui.jsx.
   `group` splits the row into "where to find me" and "how to reach me", so
   eight undifferentiated squares read as two purposeful clusters. */
export const socials = [
  {
    group: "profiles",
    icon: "globe",
    title: "Portfolio",
    href: "https://pappudey.com",
  },
  {
    group: "profiles",
    icon: "github",
    title: "GitHub",
    href: "https://github.com/coderpappu",
  },
  {
    group: "profiles",
    icon: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/coderpappu/",
  },
  {
    group: "profiles",
    icon: "facebook",
    title: "Facebook",
    href: "https://www.facebook.com/coderpappudey",
  },
  {
    group: "contact",
    icon: "mail",
    title: "Email",
    href: "mailto:pappudeydeveloper@gmail.com",
  },
  {
    group: "contact",
    icon: "message",
    title: "WhatsApp",
    href: "https://wa.me/8801XXXXXXXXX",
  },
  {
    group: "contact",
    icon: "calendar",
    title: "Book a call",
    href: "https://calendly.com/pappudeydeveloper/30min",
  },
  {
    group: "contact",
    icon: "file",
    title: "Download CV",
    href: cvFile,
    download: true,
  },
];

export const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Laravel",
  "PostgreSQL",
  "Prisma ORM",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Docker",
  "AI Automation",
];

export const aboutParagraphs = [
  {
    id: "p1",
    parts: [
      "I am a Bangladeshi software engineer and founder with 4+ years of experience building production web applications and ",
      { text: "SaaS platforms", href: "/projects", internal: true },
      ". I work at the intersection of product engineering, systems architecture, and automation.",
    ],
  },
  {
    id: "p2",
    parts: [
      "I currently work at Xceed Bangladesh LTD, where I build and maintain an enterprise HRM SaaS platform handling payroll, attendance, and RBAC for multiple organizations. Before that I built a full SaaS-based E-Clearance system for Chattogram Polytechnic Institute — officially ",
      { text: "recognized", href: "/awards", internal: true },
      " with a Certificate of Achievement from the institution.",
    ],
  },
  {
    id: "p3",
    parts: [
      "Outside of employed work I founded Codex Devware, a software company where I lead a team building the Codex LMS platform and client projects. That mix of employed and founder experience pushed me beyond web development — into Android apps, DevOps pipelines, AI-powered automation, and hardware integration for IoT. I also competed in ",
      { text: "ICPC Asia Dhaka Regional 2024", href: "https://icpc.global" },
      " with Team CPI Newbies.",
    ],
  },
  {
    id: "p4",
    parts: [
      "My core stack is React, Next.js, Node.js, Laravel, PostgreSQL, and Prisma. I care about clean architecture, scalable systems, and ",
      { text: "solving real business problems", href: "/services", internal: true },
      " through software.",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Xceed Bangladesh LTD",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "Oct 2024 – Present",
    /* One line for the home page teaser; `description` + `highlights` carry
       the detail on /experience. */
    summary:
      "Multi-tenant HRM SaaS — payroll, attendance, and RBAC, in production.",
    description:
      "Building an enterprise HRM SaaS platform serving multiple organizations. Architecting the multi-tenant system, and implementing RBAC, payroll processing, and attendance modules.",
    highlights: [
      "Architecting the multi-tenant data model so one deployment serves several organisations",
      "Implementing role-based access control, payroll processing, and attendance",
      "Owning the modules end to end — schema, API, and the interface on top",
    ],
    stack: "React, Redux, Node.js, Express, PostgreSQL, Prisma",
    url: "https://xceedbd.com",
    /* `media` feeds the home page's Experience picture panel: a photo
       (fills the frame) or a logo (centred on white). Without it the panel
       shows a name card. Swap in your own photo any time. */
    media: { kind: "logo", src: xceedLogo },
    // Photo row under this role: src/assets/experience/xceed/ (see README).
    photoFolder: "xceed",
  },
  {
    role: "Founder & CEO",
    org: "Codex Devware",
    type: "Self-Employed",
    location: "Chattogram, Bangladesh",
    period: "2022 – Present",
    summary:
      "Founded the company; shipped Codex LMS and client work with a small team.",
    description:
      "Founded a software company delivering web solutions for clients. Built and shipped the Codex LMS platform — course management, enrollment, and payments — and lead a small engineering team across client projects and internal products.",
    highlights: [
      "Founded the company and took it from first client to a working team",
      "Built and shipped Codex LMS — course management, enrolment, and payments",
      "Leading a small engineering team across client projects and internal products",
    ],
    stack: "React, Node.js, Laravel, MySQL, Tailwind CSS",
    url: "https://codexdevware.com",
    // School IT seminar run by Codex Devware (its banners are in the shot).
    media: { kind: "photo", src: codexSeminarImg },
    photoFolder: "codex-devware",
  },
  {
    role: "Web Application Developer",
    org: "Research Lab Chattogram",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "2021 – 2022",
    summary:
      "10+ client web applications, and legacy WordPress migrated to React.",
    description:
      "Built and deployed 10+ custom web applications for clients, migrated legacy WordPress sites to modern React architectures, and owned site performance, security, and SEO.",
    highlights: [
      "Built and deployed 10+ custom web applications for clients",
      "Migrated legacy WordPress sites to modern React architectures",
      "Owned site performance, security, and SEO after launch",
    ],
    stack: "React, WordPress, PHP, MySQL, Tailwind CSS",
    media: { kind: "logo", src: researchLabLogo },
    photoFolder: "research-lab",
  },
];

/* `media` works as on `experience`; entries without it show a name card. */
export const education = [
  {
    institution: "East Delta University",
    degree: "BSc in Computer Science and Technology",
    period: "2025 - Present",
    note: "Building on 4+ years of professional engineering experience and competitive programming.",
  },
  {
    institution: "Chattogram Polytechnic Institute",
    degree: "Diploma in Computer Science & Engineering",
    period: "2021 - 2024",
    note: "Completed with 3.50 GPA. Built the institute's official E-Clearance system as a capstone project. Competed in ICPC Asia Dhaka Regional 2024.",
    // Team CPI Newbies at ICPC Asia Dhaka Regional 2024.
    media: { kind: "photo", src: cpiIcpcImg },
  },
  {
    institution: "Raozan Barrister Suresh Vidyayatan",
    degree: "Secondary School Certificate (Science)",
    period: "2020 - 2021",
    note: "Foundation in science and mathematics education.",
  },
];

/*
 * `constraint` is a one-line statement of what each system deliberately does
 * NOT do. Naming the boundary of your own work is the strongest seniority
 * signal on a portfolio — almost nobody does it.
 *
 * NOTE: these are DRAFTS inferred from each project's stated architecture.
 * Review every one and rewrite it in your own words before publishing — only
 * you know the real trade-offs you made.
 */
export const projects = [
  {
    id: "e-clearance",
    name: "E-Clearance",
    category: "SaaS Clearance Management System",
    role: "Founder, Software Architect",
    year: "2025",
    description:
      "A SaaS-based clearance management system for institutions — digitizing the entire student clearance workflow across departments and reducing processing time from 2 weeks to 2 days.",
    stack: ["React", "Node.js", "Express", "Prisma", "MySQL", "Tailwind CSS"],
    live: "https://ctgpolyclearance.com",
    repo: "https://github.com/coderpappu",
    image: reportImg,
    constraint:
      "Modelled on one institution's approval graph. A second campus with different departmental rules would need the workflow schema generalised first.",
  },
  {
    id: "devtoolshunt",
    name: "Dev Tools Hunt",
    category: "Developer Tool Discovery Platform",
    role: "Founder, Full-Stack Engineer",
    year: "2025",
    description:
      "A full-stack discovery platform with scalable data ingestion (seed + user submissions), an admin moderation pipeline, and search, comparison, and leaderboard features driving community-led content growth.",
    stack: ["React", "Node.js", "Express", "Prisma", "MySQL"],
    live: "https://devtoolshunt.me",
    repo: "https://github.com/coderpappu",
    image: devtoolsHuntImg,
    constraint:
      "Moderation is a human admin queue. It holds at the current submission rate, but opening submissions wider would need automated spam scoring first.",
  },
  {
    id: "cribo-health-app",
    name: "Cribo Health — Android App",
    category: "Personal Health Management App",
    role: "Mobile Engineer",
    year: "2025",
    description:
      "A React Native app that lets people securely store, access, and manage personal health information, medical records, and wellness data in one place. Published on Google Play.",
    stack: ["React Native", "Node.js", "Express", "Prisma", "MySQL"],
    live: "https://play.google.com/store/apps/details?id=com.cribohealth.mobile",
    repo: "https://github.com/coderpappu",
    image: cribohealthApp,
    constraint:
      "A personal record keeper, not a clinical system. It makes no claim to certified medical-record handling or clinical-grade audit trails.",
  },
  {
    id: "cribo-health",
    name: "Cribo Health — Website",
    category: "Health Platform Marketing Site",
    role: "Web Developer",
    year: "2024",
    description:
      "The public-facing website for Cribo Health, built on WordPress with a custom theme and performance and SEO tuning.",
    stack: ["WordPress", "PHP"],
    live: "http://cribohealth.com/",
    repo: "https://github.com/coderpappu",
    image: cribohealthSite,
    constraint:
      "WordPress was chosen so the client could edit content without a developer. The cost is that the marketing site and the app share no code or design tokens.",
  },
  {
    id: "mini-dokan",
    name: "Mini Dokan",
    category: "Multi-Vendor E-Commerce Marketplace",
    role: "Founder, Web Developer",
    year: "2024",
    description:
      "A multi-vendor marketplace with seller dashboards, product management, and order processing — built to handle high-traffic retail operations.",
    stack: ["WordPress", "PHP", "MySQL"],
    live: "https://eshop.codexdevware.com/",
    repo: "https://github.com/coderpappu",
    image: miniDokanImg,
    constraint:
      "Built on the WooCommerce multi-vendor ecosystem rather than a custom backend — quick to ship and cheap to run, but vendor payout logic is bounded by what the plugin exposes.",
  },
  {
    id: "codex-lms",
    name: "Codex LMS",
    category: "Learning Management System",
    role: "Founder, Full-Stack Engineer",
    year: "2023",
    description:
      "A full-stack LMS with user registration, course access control, progress tracking, and payment integration for online education.",
    stack: ["React", "Node.js", "Express", "Prisma", "MySQL"],
    live: "https://react-lms-nine.vercel.app/",
    repo: "https://github.com/coderpappu",
    image: lmsImg,
    constraint:
      "Course video is served directly rather than through a streaming CDN, so it is sized for cohort-scale enrolment rather than open public courses.",
  },
  {
    id: "nexus-dashboard",
    name: "Nexus Dashboard",
    category: "E-Commerce Admin Dashboard",
    role: "Frontend Engineer",
    year: "2023",
    description:
      "A modern admin dashboard for product and order management — real-time analytics, data visualization, and a fully responsive layout.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://react-dashboard-nine-tawny.vercel.app/",
    repo: "https://github.com/coderpappu",
    image: dashboardImg,
    constraint:
      "Interface work only — it runs against fixture data, so it demonstrates the charting and layout rather than a production data pipeline.",
  },
];

export const services = [
  {
    title: "SaaS & Web Applications",
    description:
      "End-to-end SaaS platforms and custom web applications — React, Node.js, multi-tenant architecture, and full-stack delivery.",
  },
  {
    title: "Android Mobile Apps",
    description:
      "Native and cross-platform Android applications built for performance and a seamless user experience.",
  },
  {
    title: "AI Automation",
    description:
      "AI workflows, automation pipelines, and ML integrations wired into the systems your team already uses.",
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "CI/CD pipelines and cloud infrastructure that scale reliably, with monitoring and a rollback plan.",
  },
  {
    title: "API Development",
    description:
      "Secure, documented REST APIs that connect your entire stack — auth, rate limiting, and versioning included.",
  },
  {
    title: "Hardware Integration",
    description:
      "IoT and embedded systems work where hardware meets software — device protocols, gateways, and dashboards.",
  },
];

export const process = [
  {
    title: "Understand",
    description:
      "Deep dive into requirements. Understand the business problem, user workflows, and success metrics before writing a single line of code.",
  },
  {
    title: "Architect",
    description:
      "Design the database schema, API contracts, and component structure. Choose technologies based on the problem — not trends.",
  },
  {
    title: "Build",
    description:
      "Write clean, typed, modular code. Small PRs, meaningful commits, and documentation-as-you-go. No shortcuts in production code.",
  },
  {
    title: "Test",
    description:
      "Validate with real data. API testing with Postman, manual QA flows, and integration checks. Ship when it works — not when it compiles.",
  },
  {
    title: "Ship",
    description:
      "Deploy with confidence. Environment configuration, basic monitoring, and a rollback plan. Launch day is planned — not stressful.",
  },
  {
    title: "Iterate",
    description:
      "Collect feedback, measure results, and improve continuously. Engineering doesn't end at deployment — it evolves with the product.",
  },
];

export const awards = [
  {
    title: "Certificate of Achievement",
    subtitle: "Chattogram Polytechnic Institute",
    year: "2025",
    role: "Awarded for modernizing and streamlining the institutional clearance process",
    description:
      "Certified by Chattogram Polytechnic Institute for designing, developing, and implementing a SaaS-based Clearance Software System praised as fully customizable, efficient, and robust — improving operational efficiency, reducing manual workload, and enhancing transparency across the institution's clearance process. The letter credits exceptional technical proficiency, analytical thinking, and problem-solving skills, and recommends the work for further academic or professional opportunities. Issued 18-06-2025 by Mohammad Kamal Hossain, Principal, Chattogram Polytechnic Institute, Nasirabad.",
    image: recommendationLetter,
    /* Pixel size of `image`. The home page uses the shapes to size the two
       award columns so both certificates show whole at the same height. */
    imageSize: [729, 1013],
    links: [{ label: "View Certificate", href: recommendationLetter }],
  },
  {
    title: "ICPC Asia Dhaka Regional — Regionalist",
    subtitle: "International Collegiate Programming Contest",
    year: "2024",
    role: "Team CPI Newbies — Rank 189",
    description:
      "Competed in the world's largest and most prestigious collegiate programming competition as part of Team CPI Newbies.",
    image: icpcCertificate,
    imageSize: [1125, 793],
    links: [
      { label: "View Certificate", href: icpcCertificate },
      { label: "About ICPC", href: "https://icpc.global" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Pappu built our entire HRM SaaS platform from scratch. His understanding of multi-tenant architecture and clean code practices made the system highly scalable. He delivers on time and communicates clearly throughout the process.",
    name: "Md. Rafiqul Islam",
    title: "CTO, Xceed Bangladesh LTD",
  },
  {
    quote:
      "The E-Clearance system Pappu developed transformed our entire clearance process. What used to take students 2 weeks of running between departments now happens in 2 days digitally. Exceptional technical skill and problem-solving ability.",
    name: "Mohammad Kamal Hossain",
    title: "Principal, Chattogram Polytechnic Institute",
  },
  {
    quote:
      "Working with Pappu on our e-commerce platform was a great experience. He understood our multi-vendor requirements quickly and built a robust solution. His React and Node.js expertise is top-notch.",
    name: "Ariful Haque",
    title: "Founder, Mini Dokan",
  },
  {
    quote:
      "Pappu developed our Learning Management System with great attention to detail. The user registration flow, course management, and payment integration all work seamlessly. Highly recommended for any full-stack project.",
    name: "Tanvir Ahmed",
    title: "Project Manager, Codex LMS",
  },
  {
    quote:
      "I've collaborated with Pappu on several freelance projects. His ability to architect clean backend APIs with Node.js and create polished React frontends is impressive. Always meets deadlines and writes maintainable code.",
    name: "Saiful Islam",
    title: "Senior Developer, Research Lab Chattogram",
  },
];

/* Home page gallery, one array per row. Photos in a row are shown at one
   shared height and the row fills the full width, so each photo keeps its
   own shape and nothing is cropped. `size` is the file's pixel size.
   Captions come from the classic site's gallery, except the last one. */
export const gallery = [
  [
    {
      src: cpiIcpcImg,
      size: [1067, 800],
      caption: "ICPC Asia Dhaka Regional 2024 — Team CPI Newbies",
    },
    {
      src: codexSeminarImg,
      size: [1200, 800],
      caption: "School IT seminar — Codex Devware",
    },
  ],
  [
    {
      src: borderRobotImg,
      size: [1003, 800],
      caption: "Border guard robot",
    },
    {
      src: rlcRobotImg,
      size: [720, 755],
      caption: "Surveillance robot — Team RLC",
    },
    {
      src: speakingImg,
      size: [689, 891],
      // Inferred from the D Engineers Club banner in the photo: confirm.
      caption: "Speaking at a D Engineers Club event",
    },
  ],
];

export const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "25+", label: "Projects Completed" },
  { value: "18+", label: "Happy Clients" },
  { value: "4+", label: "SaaS Products" },
];

export const techStack = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Laravel", "Python", "Django", "WordPress"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Nginx", "Postman"],
  },
];

export const fastFacts = [
  {
    label: "Current Role",
    value: "Software Engineer at Xceed Bangladesh LTD (Oct 2024 – Present)",
  },
  {
    label: "Founder",
    value: "Codex Devware — software company, est. 2022",
  },
  {
    label: "Education",
    value:
      "BSc in Computer Science and Technology, East Delta University (2025 – Present); Diploma in CSE, Chattogram Polytechnic Institute (2021 – 2024)",
  },
  {
    label: "Location",
    value: "Chattogram, Bangladesh",
  },
  {
    label: "Languages",
    value: "Bangla (native), English (professional working proficiency)",
  },
];

export const expertise = [
  "Core Engineering: React, Next.js, Node.js, Laravel, PostgreSQL, Prisma",
  "Architecture: multi-tenant SaaS, RBAC, REST API design, clean architecture",
  "Beyond the web: Android apps, DevOps pipelines, AI automation, IoT hardware integration",
  "Leadership: founding and running a software company, leading a small engineering team",
];
