// Hand-transcribed from src/white/data.js (the pre-CMS source of truth).
// It's transcribed rather than imported because data.js is an ES module that
// imports images via Vite's asset pipeline (`import x from "../assets/foo.jpg"`),
// which plain Node has no loader for — there's no way to `require()` it
// as-is. Image fields below are plain source-file paths (relative to the
// repo root) instead; 001_from_data_js.js copies each one into
// server/uploads/<category>/ and swaps in the resulting URL before insert.
//
// This is a ONE-TIME migration input, not code that runs repeatedly — if
// data.js changes after this seed has run once against production, further
// edits belong in the admin panel, not here.

const REPO_ROOT_FROM_SEEDS = "../../../"; // server/db/seeds/ -> repo root

const asset = (relPath) => REPO_ROOT_FROM_SEEDS + relPath;

module.exports = {
  profileImages: {
    avatar: asset("src/assets/pappu-dey.jpg"),
    workstation: asset("src/assets/work-time-station.jpg"),
    cv: asset("src/assets/cv_pappu_dey_junior_software_engineer_CSE (2).pdf"),
  },

  profile: {
    name: "Pappu Dey",
    roleA: "Software Engineer",
    roleB: "SaaS Builder",
    headline: "Pappu Dey - Software Engineer & SaaS Builder",
    intro:
      "I build multi-tenant SaaS platforms, production web applications, and hardware-integrated systems — for startups, institutions, and enterprises.",
    location: "Chattogram, Bangladesh",
    mapsUrl: "https://www.google.com/maps/search/Chattogram%2C%20Bangladesh",
    email: "pappudeydeveloper@gmail.com",
    site: "https://pappudey.com",
    calendly: "https://calendly.com/pappudeydeveloper/30min",
    github: "https://github.com/coderpappu",
    linkedin: "https://www.linkedin.com/in/coderpappu/",
    facebook: "https://www.facebook.com/coderpappudey",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
  },

  availability: {
    open: true,
    label: "Available for select projects",
  },

  practice: [
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
  ],

  now: {
    updated: "August 2026",
    headline:
      "Rebuilding payroll and attendance for an HRM platform already in production.",
    prose:
      "Architecting the multi-tenant modules for Xceed HRM and the role-based access that sits under them. Leading the Codex Devware team through the Codex LMS rebuild — new data model, new enrolment flow. Reading up on distributed systems in between, alongside my BSc at East Delta University.",
    lead: "What has my attention this month — work in progress, not the finished list.",
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
        short: "The current builds at Codex Devware, with a small team.",
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
  },

  skills: [
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
  ],

  aboutParagraphs: [
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
  ],

  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "25+", label: "Projects Completed" },
    { value: "18+", label: "Happy Clients" },
    { value: "4+", label: "SaaS Products" },
  ],

  fastFacts: [
    {
      label: "Current Role",
      value: "Software Engineer at Xceed Bangladesh LTD (Oct 2024 – Present)",
    },
    { label: "Founder", value: "Codex Devware — software company, est. 2022" },
    {
      label: "Education",
      value:
        "BSc in Computer Science and Technology, East Delta University (2025 – Present); Diploma in CSE, Chattogram Polytechnic Institute (2021 – 2024)",
    },
    { label: "Location", value: "Chattogram, Bangladesh" },
    {
      label: "Languages",
      value: "Bangla (native), English (professional working proficiency)",
    },
  ],

  expertise: [
    "Core Engineering: React, Next.js, Node.js, Laravel, PostgreSQL, Prisma",
    "Architecture: multi-tenant SaaS, RBAC, REST API design, clean architecture",
    "Beyond the web: Android apps, DevOps pipelines, AI automation, IoT hardware integration",
    "Leadership: founding and running a software company, leading a small engineering team",
  ],

  seo: {
    siteName: "Pappu Dey",
    titleTemplate: "%s | Pappu Dey",
    defaultDescription:
      "Pappu Dey is a software engineer and founder from Chattogram, Bangladesh, building multi-tenant SaaS platforms, production web applications, and AI automation systems.",
    defaultOgImage: null, // filled in with the avatar URL at seed time
    twitterHandle: "",
    locale: "en_US",
    themeColor: "#020919",
  },

  knownFor: [
    {
      label: "Software Engineer, Xceed Bangladesh LTD",
      suffix: " - enterprise HRM SaaS",
      href: "https://www.linkedin.com/in/coderpappu/",
      projectSlug: null,
    },
    {
      label: "Founder & CEO, Codex Devware",
      suffix: "(est. 2022) - software company",
      href: "https://eshop.codexdevware.com",
      projectSlug: null,
    },
    {
      label: "Creator, E-Clearance",
      suffix: " - SaaS clearance system for Chattogram Polytechnic Institute",
      href: "https://ctgpolyclearance.com",
      projectSlug: "e-clearance",
    },
    {
      label: "Creator, Dev Tools Hunt",
      suffix: " - developer tool discovery platform",
      href: "https://devtoolshunt.me",
      projectSlug: "devtoolshunt",
    },
    {
      label: "ICPC Asia Dhaka Regionalist 2024",
      suffix: " - Team CPI Newbies",
      href: "https://icpc.global",
      projectSlug: null,
    },
  ],

  professionalProfiles: [
    { label: "GitHub", href: "https://github.com/coderpappu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/coderpappu/" },
    { label: "Codex Devware", href: "https://eshop.codexdevware.com" },
    { label: "Dev Tools Hunt", href: "https://devtoolshunt.me" },
    { label: "Facebook", href: "https://www.facebook.com/coderpappudey" },
  ],

  // `href` for the "file" (CV) entry is filled in at seed time with the
  // uploaded CV's URL, once profileImages.cv has been copied.
  socials: [
    { group: "profiles", icon: "globe", title: "Portfolio", href: "https://pappudey.com" },
    { group: "profiles", icon: "github", title: "GitHub", href: "https://github.com/coderpappu" },
    { group: "profiles", icon: "linkedin", title: "LinkedIn", href: "https://www.linkedin.com/in/coderpappu/" },
    { group: "profiles", icon: "facebook", title: "Facebook", href: "https://www.facebook.com/coderpappudey" },
    { group: "contact", icon: "mail", title: "Email", href: "mailto:pappudeydeveloper@gmail.com" },
    { group: "contact", icon: "message", title: "WhatsApp", href: "https://wa.me/8801XXXXXXXXX" },
    { group: "contact", icon: "calendar", title: "Book a call", href: "https://calendly.com/pappudeydeveloper/30min" },
    { group: "contact", icon: "file", title: "Download CV", href: null, is_download: true },
  ],

  experience: [
    {
      role: "Software Engineer",
      org: "Xceed Bangladesh LTD",
      type: "Full-Time",
      location: "Chattogram, Bangladesh",
      period: "Oct 2024 – Present",
      summary: "Multi-tenant HRM SaaS — payroll, attendance, and RBAC, in production.",
      description:
        "Building an enterprise HRM SaaS platform serving multiple organizations. Architecting the multi-tenant system, and implementing RBAC, payroll processing, and attendance modules.",
      highlights: [
        "Architecting the multi-tenant data model so one deployment serves several organisations",
        "Implementing role-based access control, payroll processing, and attendance",
        "Owning the modules end to end — schema, API, and the interface on top",
      ],
      stack: "React, Redux, Node.js, Express, PostgreSQL, Prisma",
      url: "https://xceedbd.com",
    },
    {
      role: "Founder & CEO",
      org: "Codex Devware",
      type: "Self-Employed",
      location: "Chattogram, Bangladesh",
      period: "2022 – Present",
      summary: "Founded the company; shipped Codex LMS and client work with a small team.",
      description:
        "Founded a software company delivering web solutions for clients. Built and shipped the Codex LMS platform — course management, enrollment, and payments — and lead a small engineering team across client projects and internal products.",
      highlights: [
        "Founded the company and took it from first client to a working team",
        "Built and shipped Codex LMS — course management, enrolment, and payments",
        "Leading a small engineering team across client projects and internal products",
      ],
      stack: "React, Node.js, Laravel, MySQL, Tailwind CSS",
      url: "https://codexdevware.com",
    },
    {
      role: "Web Application Developer",
      org: "Research Lab Chattogram",
      type: "Full-Time",
      location: "Chattogram, Bangladesh",
      period: "2021 – 2022",
      summary: "10+ client web applications, and legacy WordPress migrated to React.",
      description:
        "Built and deployed 10+ custom web applications for clients, migrated legacy WordPress sites to modern React architectures, and owned site performance, security, and SEO.",
      highlights: [
        "Built and deployed 10+ custom web applications for clients",
        "Migrated legacy WordPress sites to modern React architectures",
        "Owned site performance, security, and SEO after launch",
      ],
      stack: "React, WordPress, PHP, MySQL, Tailwind CSS",
      url: null,
    },
  ],

  education: [
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
    },
    {
      institution: "Raozan Barrister Suresh Vidyayatan",
      degree: "Secondary School Certificate (Science)",
      period: "2020 - 2021",
      note: "Foundation in science and mathematics education.",
    },
  ],

  // `imagePath` is copied into uploads/projects/ and swapped for image_url.
  projects: [
    {
      slug: "e-clearance",
      name: "E-Clearance",
      category: "SaaS Clearance Management System",
      role: "Founder, Software Architect",
      year: "2025",
      description:
        "A SaaS-based clearance management system for institutions — digitizing the entire student clearance workflow across departments and reducing processing time from 2 weeks to 2 days.",
      stack: ["React", "Node.js", "Express", "Prisma", "MySQL", "Tailwind CSS"],
      live_url: "https://ctgpolyclearance.com",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/report.png"),
      constraint_text:
        "Modelled on one institution's approval graph. A second campus with different departmental rules would need the workflow schema generalised first.",
    },
    {
      slug: "devtoolshunt",
      name: "Dev Tools Hunt",
      category: "Developer Tool Discovery Platform",
      role: "Founder, Full-Stack Engineer",
      year: "2025",
      description:
        "A full-stack discovery platform with scalable data ingestion (seed + user submissions), an admin moderation pipeline, and search, comparison, and leaderboard features driving community-led content growth.",
      stack: ["React", "Node.js", "Express", "Prisma", "MySQL"],
      live_url: "https://devtoolshunt.me",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/devtoolshunt.png"),
      constraint_text:
        "Moderation is a human admin queue. It holds at the current submission rate, but opening submissions wider would need automated spam scoring first.",
    },
    {
      slug: "cribo-health-app",
      name: "Cribo Health — Android App",
      category: "Personal Health Management App",
      role: "Mobile Engineer",
      year: "2025",
      description:
        "A React Native app that lets people securely store, access, and manage personal health information, medical records, and wellness data in one place. Published on Google Play.",
      stack: ["React Native", "Node.js", "Express", "Prisma", "MySQL"],
      live_url: "https://play.google.com/store/apps/details?id=com.cribohealth.mobile",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/cribohealth-app.png"),
      constraint_text:
        "A personal record keeper, not a clinical system. It makes no claim to certified medical-record handling or clinical-grade audit trails.",
    },
    {
      slug: "cribo-health",
      name: "Cribo Health — Website",
      category: "Health Platform Marketing Site",
      role: "Web Developer",
      year: "2024",
      description:
        "The public-facing website for Cribo Health, built on WordPress with a custom theme and performance and SEO tuning.",
      stack: ["WordPress", "PHP"],
      live_url: "http://cribohealth.com/",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/cribohealth-site.png"),
      constraint_text:
        "WordPress was chosen so the client could edit content without a developer. The cost is that the marketing site and the app share no code or design tokens.",
    },
    {
      slug: "mini-dokan",
      name: "Mini Dokan",
      category: "Multi-Vendor E-Commerce Marketplace",
      role: "Founder, Web Developer",
      year: "2024",
      description:
        "A multi-vendor marketplace with seller dashboards, product management, and order processing — built to handle high-traffic retail operations.",
      stack: ["WordPress", "PHP", "MySQL"],
      live_url: "https://eshop.codexdevware.com/",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/mini-dokan.png"),
      constraint_text:
        "Built on the WooCommerce multi-vendor ecosystem rather than a custom backend — quick to ship and cheap to run, but vendor payout logic is bounded by what the plugin exposes.",
    },
    {
      slug: "codex-lms",
      name: "Codex LMS",
      category: "Learning Management System",
      role: "Founder, Full-Stack Engineer",
      year: "2023",
      description:
        "A full-stack LMS with user registration, course access control, progress tracking, and payment integration for online education.",
      stack: ["React", "Node.js", "Express", "Prisma", "MySQL"],
      live_url: "https://react-lms-nine.vercel.app/",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/lms-system.jpg"),
      constraint_text:
        "Course video is served directly rather than through a streaming CDN, so it is sized for cohort-scale enrolment rather than open public courses.",
    },
    {
      slug: "nexus-dashboard",
      name: "Nexus Dashboard",
      category: "E-Commerce Admin Dashboard",
      role: "Frontend Engineer",
      year: "2023",
      description:
        "A modern admin dashboard for product and order management — real-time analytics, data visualization, and a fully responsive layout.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      live_url: "https://react-dashboard-nine-tawny.vercel.app/",
      repo_url: "https://github.com/coderpappu",
      imagePath: asset("src/assets/dashboard.png"),
      constraint_text:
        "Interface work only — it runs against fixture data, so it demonstrates the charting and layout rather than a production data pipeline.",
    },
  ],

  services: [
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
  ],

  process: [
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
  ],

  // `imagePath` copied into uploads/awards/.
  awards: [
    {
      title: "Certificate of Achievement",
      subtitle: "Chattogram Polytechnic Institute",
      year: "2025",
      role: "Awarded for modernizing and streamlining the institutional clearance process",
      description:
        "Certified by Chattogram Polytechnic Institute for designing, developing, and implementing a SaaS-based Clearance Software System praised as fully customizable, efficient, and robust — improving operational efficiency, reducing manual workload, and enhancing transparency across the institution's clearance process. The letter credits exceptional technical proficiency, analytical thinking, and problem-solving skills, and recommends the work for further academic or professional opportunities. Issued 18-06-2025 by Mohammad Kamal Hossain, Principal, Chattogram Polytechnic Institute, Nasirabad.",
      imagePath: asset("src/assets/pappudey_recomendation_certificate.jpg"),
      links: [{ label: "View Certificate", href: "__SELF_IMAGE__" }],
    },
    {
      title: "ICPC Asia Dhaka Regional — Regionalist",
      subtitle: "International Collegiate Programming Contest",
      year: "2024",
      role: "Team CPI Newbies — Rank 189",
      description:
        "Competed in the world's largest and most prestigious collegiate programming competition as part of Team CPI Newbies.",
      imagePath: asset("src/assets/icpc_certificate.png"),
      links: [
        { label: "View Certificate", href: "__SELF_IMAGE__" },
        { label: "About ICPC", href: "https://icpc.global" },
      ],
    },
  ],

  testimonials: [
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
  ],

  techStack: [
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "React Native", "TypeScript", "Redux", "Tailwind CSS", "JavaScript"],
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
  ],

  // Seeded from each page's current <Helmet> title/description in
  // src/white/pages/*.jsx, so the CMS starts with real, already-tuned copy.
  pages: [
    {
      route: "/",
      label: "Home",
      meta_title: "Pappu Dey — Software Engineer & SaaS Builder | React, Node.js, Laravel",
      meta_description:
        "Pappu Dey is a software engineer and founder from Chattogram, Bangladesh, building multi-tenant SaaS platforms, production web applications, and AI automation systems.",
    },
    {
      route: "/about",
      label: "About",
      meta_title: "About | Pappu Dey",
      meta_description:
        "Pappu Dey is a Bangladeshi software engineer and founder building multi-tenant SaaS platforms, web applications, and AI automation systems from Chattogram, Bangladesh.",
    },
    {
      route: "/projects",
      label: "Projects",
      meta_title: "Projects | Pappu Dey",
      meta_description:
        "Explore the SaaS platforms, web applications, and mobile apps Pappu Dey has designed, built, and shipped — E-Clearance, Dev Tools Hunt, Cribo Health, Codex LMS and more.",
    },
    {
      route: "/services",
      label: "Services",
      meta_title: "Services | Pappu Dey",
      meta_description:
        "What Pappu Dey builds: SaaS and web applications, Android apps, AI automation, DevOps and cloud infrastructure, APIs, and hardware integration.",
    },
    {
      route: "/experience",
      label: "Experience",
      meta_title: "Experience | Pappu Dey",
      meta_description:
        "Pappu Dey's work experience and education — Software Engineer at Xceed Bangladesh LTD, Founder of Codex Devware, and Web Application Developer at Research Lab Chattogram.",
    },
    {
      route: "/awards",
      label: "Awards",
      meta_title: "Awards | Pappu Dey",
      meta_description:
        "Awards and recognition earned by Pappu Dey — a Certificate of Achievement from Chattogram Polytechnic Institute and ICPC Asia Dhaka Regional 2024.",
    },
    {
      route: "/testimonials",
      label: "Testimonials",
      meta_title: "Testimonials | Pappu Dey",
      meta_description:
        "Read what colleagues, clients, and institutions say about working with Pappu Dey on SaaS platforms, web applications, and mobile apps.",
    },
    {
      route: "/contact",
      label: "Contact",
      meta_title: "Contact | Pappu Dey",
      meta_description:
        "Get in touch with Pappu Dey — software engineer and SaaS builder in Chattogram, Bangladesh. Book a free discovery call or send a project brief.",
    },
    {
      route: "/resume",
      label: "Résumé",
      meta_title: "Résumé | Pappu Dey",
      meta_description:
        "One-page résumé for Pappu Dey — Software Engineer and SaaS Builder in Chattogram, Bangladesh. React, Node.js, Laravel, PostgreSQL.",
    },
    {
      route: "/blog",
      label: "Blog",
      meta_title: "Blog | Pappu Dey",
      meta_description:
        "Articles on software engineering, SaaS architecture, and building products, written by Pappu Dey.",
    },
  ],
};
