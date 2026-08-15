/* ---------------------------------------------------------------------------
   Single source of truth for the white edition.
   Every page reads from here — edit content in one place.
   --------------------------------------------------------------------------- */

import avatar from "../assets/pappu-dey.jpg";
import cribohealthApp from "../assets/cribohealth-app.png";
import cribohealthSite from "../assets/cribohealth-site.png";
import dashboardImg from "../assets/dashboard.png";
import devtoolsHuntImg from "../assets/devtoolshunt.png";
import icpcCertificate from "../assets/icpc_certificate.png";
import lmsImg from "../assets/lms-system.jpg";
import miniDokanImg from "../assets/mini-dokan.png";
import recommendationLetter from "../assets/pappudey_recomendation_certificate.jpg";
import reportImg from "../assets/report.png";
import workstationImg from "../assets/work-time-station.jpg";
import cvFile from "../assets/cv_pappu_dey_junior_software_engineer_CSE (2).pdf";

export const images = {
  avatar,
  workstation: workstationImg,
  recommendationLetter,
  icpcCertificate,
  cv: cvFile,
};

export const profile = {
  name: "Pappu Dey",
  roleA: "Software Engineer",
  roleB: "SaaS Builder",
  headline: "Pappu Dey - Software Engineer & SaaS Builder",
  intro:
    "I'm Pappu Dey (Chattogram, Bangladesh) - a Software Engineer and SaaS Builder. I build multi-tenant SaaS platforms, production web applications, and AI-powered automation systems for startups and enterprises.",
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

export const knownFor = [
  {
    label: "Software Engineer, Xceed Bangladesh LTD",
    suffix: " - enterprise HRM SaaS",
    href: "https://www.linkedin.com/in/coderpappu/",
  },
  {
    label: "Founder & CEO, Codex Devware",
    suffix: "(est. 2022) - software studio",
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

export const professionalProfiles = [
  { label: "GitHub", href: "https://github.com/coderpappu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/coderpappu/" },
  { label: "Codex Devware", href: "https://eshop.codexdevware.com" },
  { label: "Dev Tools Hunt", href: "https://devtoolshunt.me" },
  { label: "Facebook", href: "https://www.facebook.com/coderpappudey" },
];

/* icon key maps to a lucide component in ui.jsx */
export const socials = [
  { icon: "globe", title: "Portfolio", href: "https://pappudey.com" },
  { icon: "github", title: "GitHub", href: "https://github.com/coderpappu" },
  {
    icon: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/coderpappu/",
  },
  {
    icon: "facebook",
    title: "Facebook",
    href: "https://www.facebook.com/coderpappudey",
  },
  {
    icon: "mail",
    title: "Email",
    href: "mailto:pappudeydeveloper@gmail.com",
  },
  {
    icon: "message",
    title: "WhatsApp",
    href: "https://wa.me/8801XXXXXXXXX",
  },
  {
    icon: "calendar",
    title: "Book a call",
    href: "https://calendly.com/pappudeydeveloper/30min",
  },
  { icon: "file", title: "Download CV", href: cvFile, download: true },
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
      "Outside of employed work I founded Codex Devware, a small software studio where I lead a team building the Codex LMS platform and client projects. That mix of employed and founder experience pushed me beyond web development — into Android apps, DevOps pipelines, AI-powered automation, and hardware integration for IoT. I also competed in ",
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
    description:
      "Building an enterprise HRM SaaS platform serving multiple organizations. Architecting the multi-tenant system, and implementing RBAC, payroll processing, and attendance modules.",
    stack: "React, Redux, Node.js, Express, PostgreSQL, Prisma",
  },
  {
    role: "Founder & CEO",
    org: "Codex Devware",
    type: "Self-Employed",
    location: "Chattogram, Bangladesh",
    period: "2022 – Present",
    description:
      "Founded a software studio delivering web solutions for clients. Built and shipped the Codex LMS platform — course management, enrollment, and payments — and lead a small engineering team across client projects and internal products.",
    stack: "React, Node.js, Laravel, MySQL, Tailwind CSS",
    url: "https://eshop.codexdevware.com",
  },
  {
    role: "Web Application Developer",
    org: "Research Lab Chattogram",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "2021 – 2022",
    description:
      "Built and deployed 10+ custom web applications for clients, migrated legacy WordPress sites to modern React architectures, and owned site performance, security, and SEO.",
    stack: "React, WordPress, PHP, MySQL, Tailwind CSS",
  },
];

export const education = [
  {
    institution: "East Delta University",
    degree: "BSc in Computer Science",
    period: "2025 - Present",
    note: "Building on 4+ years of professional engineering experience and competitive programming.",
  },
  {
    institution: "Chattogram Polytechnic Institute",
    degree: "Diploma in Computer Science & Engineering",
    period: "2021 - 2024",
    note: "Completed with 3.50 GPA. Built the institute's official E-Clearance system as a capstone project. Competed in ICPC Asia Dhaka Regional 2024.",
  },
  {
    institution: "Raozan Barrister Suresh Vidyayatan",
    degree: "Secondary School Certificate (Science)",
    period: "2020 - 2021",
    note: "Foundation in science and mathematics education.",
  },
];

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
      "Officially recognized by Chattogram Polytechnic Institute for the design and delivery of a SaaS-based Clearance Software System. Issued 18-06-2025 by Mohammad Kamal Hossain, Principal.",
    image: recommendationLetter,
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
    value: "Codex Devware — software studio, est. 2022",
  },
  {
    label: "Education",
    value:
      "BSc in Computer Science, East Delta University (2025 – Present); Diploma in CSE, Chattogram Polytechnic Institute (2021 – 2024)",
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
  "Leadership: founding and running a software studio, leading a small engineering team",
];
