import { FaArrowRight } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";
import cribohealthappImg from "../assets/cribohealth-app.png";
import cribohealthImg from "../assets/cribohealth-site.png";
import DashboardImg from "../assets/dashboard.png";
import DevtoolsHuntImg from "../assets/devtoolshunt.png";
import expressImg from "../assets/Express.png";
import JsImg from "../assets/js.png";
import LmsImg from "../assets/lms-system.jpg";
import miniDokanImg from "../assets/mini-dokan.png";
import mysqlImg from "../assets/mysql.svg";
import nodeImg from "../assets/node-js.svg";
import prismaImg from "../assets/prisma.png";
import reactImg from "../assets/reactjs.png";
import ReportImg from "../assets/report.png";
import tailwindImg from "../assets/tailwind.svg";
import WordpressImg from "../assets/wordpress.png";
import { AnimatedTooltip } from "./Tooltip";

import { IoLogoGithub } from "react-icons/io";

const projects = [

  {
    id: "e-clearance",
    link: "https://ctgpolyclearance.com",
    githubLink: "https://github.com/coderpappu",
    liveLink: "https://ctgpolyclearance.com",
    href: "/",
    name: "E-Clearance",
    description:
      "A SaaS-based clearance management system for universities — digitizing the entire student clearance workflow, reducing processing time from 2 weeks to 2 days.",
    image: ReportImg,

    tech: [
      { id: 1, name: "JavaScript", image: JsImg },
      { id: 2, name: "React Js", image: reactImg },
      { id: 3, name: "Tailwind CSS", image: tailwindImg },
      { id: 4, name: "Node Js", image: nodeImg },
      { id: 5, name: "Express Js", image: expressImg },
      { id: 6, name: "Prisma", image: prismaImg },
      { id: 7, name: "MySQL", image: mysqlImg },
    ],
  },
  
  {
    id: "devtoolshunt",
    link: "https://devtoolshunt.me",
    githubLink: "https://github.com/coderpappu",
    liveLink: "https://devtoolshunt.me",
    href: "/",
    name: "Dev Tools Hunt",
    description:
      "Built a full-stack developer tool discovery platform with scalable data ingestion (seed + user submissions), admin moderation pipeline (review/approve), and advanced features like search, comparison, and leaderboard, enabling efficient discovery and community-driven content growth. React.js, Node.js, Express.js, MySQL.",
    image: DevtoolsHuntImg,
    tech: [
      { id: 1, name: "JavaScript", image: JsImg },
      { id: 2, name: "React Js", image: reactImg },
      { id: 3, name: "Tailwind CSS", image: tailwindImg },
      { id: 4, name: "Node Js", image: nodeImg },
      { id: 5, name: "Express Js", image: expressImg },
      { id: 6, name: "Prisma", image: prismaImg },
      { id: 7, name: "MySQL", image: mysqlImg },
    ],
  },
  {
    id: "Cribo Health - Website",
    link: "http://cribohealth.com/",
    githubLink: "https://github.com/coderpappu",
    liveLink: "http://cribohealth.com/",
    href: "/",
    name: "Cribo Health",
    description:
      "Cribo Health – Your Personal Health Management Companion Cribo Health helps you securely manage your personal health information, medical records, and wellness data in one simple and organized platform. Designed for everyday users, the app makes it easy to store, access, and manage health-related information anytime, anywhere.",
    image: cribohealthImg,
    tech: [{ id: 1, name: "WordPress", image: WordpressImg }],
  },
  {
    id: "Cribo Health - Android App",
    link: "https://play.google.com/store/apps/details?id=com.cribohealth.mobile&pcampaignid=web_share",
    githubLink: "https://github.com/coderpappu",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.cribohealth.mobile&pcampaignid=web_share",
    href: "/",
    name: "Cribo Health - Android App",
    description:
      "Cribo Health – Your Personal Health Management Companion Cribo Health helps you securely manage your personal health information, medical records, and wellness data in one simple and organized platform. Designed for everyday users, the app makes it easy to store, access, and manage health-related information anytime, anywhere.",
    image: cribohealthappImg,
    tech: [
      { id: 2, name: "React Native", image: reactImg },
      { id: 3, name: "Tailwind CSS", image: tailwindImg },
      { id: 4, name: "Node Js", image: nodeImg },
      { id: 5, name: "Express Js", image: expressImg },
      { id: 6, name: "Prisma", image: prismaImg },
      { id: 7, name: "MySQL", image: mysqlImg },
    ],
  },
  {
    id: "mini-dokan",
    link: "https://eshop.codexdevware.com",
    githubLink: "https://github.com/coderpappu",
    liveLink: "https://eshop.codexdevware.com/",
    href: "/",
    name: "Mini Dokan",
    description:
      "A multi-vendor e-commerce marketplace with seller dashboards, product management, and order processing — built to handle high-traffic retail operations.",
    image: miniDokanImg,
    tech: [{ id: 1, name: "WordPress", image: WordpressImg }],
  },
  {
    id: "react-dashboard",
    link: "https://react-dashboard-nine-tawny.vercel.app/",
    githubLink: "https://github.com/coderpappu",
    liveLink: "https://react-dashboard-nine-tawny.vercel.app/",
    href: "/",
    name: "Nexus Dashboard",
    description:
      "A modern e-commerce admin dashboard for product and order management — featuring real-time analytics, data visualization, and responsive design.",
    image: DashboardImg,
    tech: [
      { id: 1, name: "JavaScript", image: JsImg },
      { id: 2, name: "React Js", image: reactImg },
      { id: 3, name: "Tailwind CSS", image: tailwindImg },
    ],
  },
  {
    id: "react-lms",
    link: "https://react-lms-nine.vercel.app/",
    githubLink: "https://github.com/coderpappu",
    liveLink: "https://react-lms-nine.vercel.app/",
    href: "/",
    name: "LMS System",
    description:
      "A full-stack Learning Management System with user registration, course access control, progress tracking, and payment integration for online education.",
    image: LmsImg,
    tech: [
      { id: 1, name: "JavaScript", image: JsImg },
      { id: 2, name: "React Js", image: reactImg },
      { id: 3, name: "Tailwind CSS", image: tailwindImg },
      { id: 4, name: "Node Js", image: nodeImg },
      { id: 5, name: "Express Js", image: expressImg },
      { id: 6, name: "Prisma", image: prismaImg },
      { id: 7, name: "MySQL", image: mysqlImg },
    ],
  },
];

// Only the 5 most representative projects are featured here, to match the
// inspiration layout exactly: 3 narrow cards on top, 2 wide cards below.
const featuredProjects = projects.filter(
  (p) => p.id !== "Cribo Health - Android App" && p.id !== "react-lms"
);

export function AnimatedPinDemo() {
  return (
    <section id="projects" className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate">
      {/* Ambient background layers — matches Services section */}
      <div className="absolute top-1/4 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

      <div className="text-center mb-12">
        <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
          Portfolio
        </span>
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Featured Projects
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base">
          Real products I&apos;ve built — shipped and serving users
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-lg bg-white/[0.04] p-5 flex flex-col transition-colors duration-500 ${
                index < 3 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              {/* Image tile with soft glow */}
              <div className="relative rounded-lg p-3 mb-4 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#0EABE6]/20 blur-2xl" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="relative rounded-md h-60 w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-sora font-bold text-white mb-1.5">
                {project.name}
              </h3>
              <p className="text-[#ffffff80] text-sm font-sora leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3">
                <div className="flex items-center">
                  <AnimatedTooltip items={project?.tech} />
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    target="_blank"
                    to={project.githubLink}
                    className="w-8 h-8 rounded-full border border-white/[0.08] text-[#ffffffb0] hover:text-white hover:border-white/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <IoLogoGithub size={16} />
                  </Link>
                  <Link
                    target="_blank"
                    to={project.liveLink}
                    className="w-8 h-8 rounded-full border border-white/[0.08] text-[#ffffffb0] hover:text-white hover:border-white/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <LuMousePointerClick size={14} />
                  </Link>
                </div>
              </div>

              {/* View Details link */}
              <Link
                to={`/project/${project.id}`}
                className="mt-4 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-sm text-white font-sora font-semibold group/cta"
              >
                View Details
                <FaArrowRight className="text-xs group-hover/cta:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
