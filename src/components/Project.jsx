import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";
import DashboardImg from "../assets/dashboard.png";
import djangoImg from "../assets/django.svg";
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
    link: "www.clearance.codexdevware.com",
    githubLink: "www.clearance.codexdevware.com",
    liveLink: "http://clearance.codexdevware.com/",

    href: "/",
    name: "E-Clearance",
    description:
      "E-Clearance is a smart and efficient clearance solution for universities and polytechnics.",
    image: ReportImg,
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: JsImg,
      },
      {
        id: 2,
        name: "React Js",
        image: reactImg,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: tailwindImg,
      },
      {
        id: 4,
        name: "Node Js",
        image: nodeImg,
      },
      {
        id: 5,
        name: "Express Js",
        image: djangoImg,
      },
      {
        id: 6,
        name: "Prisma",
        image: prismaImg,
      },
      {
        id: 7,
        name: "MySQL",
        image: mysqlImg,
      },
    ],
  },
  {
    link: "www.eshop.codexdevware.com",
    githubLink: "www.eshop.codexdevware.com",
    liveLink: "https://eshop.codexdevware.com/",

    href: "/",
    name: "Mini Dokan",
    description:
      "Mini Dokan is a multi vendor ecommerce website just like a Daraz",
    image: miniDokanImg,
    tech: [
      {
        id: 1,
        name: "Wordpress",
        image: WordpressImg,
      },
    ],
  },
  {
    link: "https://react-dashboard-nine-tawny.vercel.app/",
    githubLink: "https://react-dashboard-nine-tawny.vercel.app/",
    liveLink: "https://react-dashboard-nine-tawny.vercel.app/",

    href: "/",
    name: "Nexus Dashboard",
    description:
      "This is a E-commerce Dashboard for a company to manage their products and orders.",
    image: DashboardImg,
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: JsImg,
      },
      {
        id: 2,
        name: "React Js",
        image: reactImg,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: tailwindImg,
      },
    ],
  },
  {
    link: "http://lms.developerpappudey.pro",
    githubLink: "http://lms.developerpappudey.pro",
    liveLink: "http://lms.developerpappudey.pro",

    href: "/",
    name: "LMS System",
    description:
      "A full stack LMS (Learning Management System) project, managing everything from user registration to course access.",
    image: LmsImg,
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: JsImg,
      },
      {
        id: 2,
        name: "React Js",
        image: reactImg,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: tailwindImg,
      },
      {
        id: 4,
        name: "Node Js",
        image: nodeImg,
      },
      {
        id: 5,
        name: "Express Js",
        image: djangoImg,
      },
      {
        id: 6,
        name: "Prisma",
        image: prismaImg,
      },
      {
        id: 7,
        name: "MySQL",
        image: mysqlImg,
      },
    ],
  },

  // Add more projects here
];

export function AnimatedPinDemo() {
  return (
    <section id="projects" className="py-0 lg:py-16 text-white  relative">
      <div className="text-center mb-12">
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Featured Project
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto ">
        <div className="absolute bottom-44 top-36 -left-24 hidden h-[550px] w-[1500px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:left-[4rem] lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-60 xl:w-[1200px]"></div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-5 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    hover:scale-[1.03] hover:border-white/30
    will-change-transform w-[350px] h-[400px]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
              {project.name}
            </h3>
            <p className="text-slate-300 mb-4 overflow-clip h-12">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-row items-center justify-start  w-[45%]">
                <AnimatedTooltip items={project?.tech} />
              </div>
              <div className="flex  gap-1 mt-auto">
                <ul className="flex space-x-4">
                  <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                    <Link
                      target="_blank"
                      to={project.githubLink}
                      className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                    >
                      <IoLogoGithub size={20} />
                    </Link>
                    <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </li>

                  <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                    <Link
                      target="_blank"
                      to={project.liveLink}
                      className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                    >
                      <LuMousePointerClick />
                    </Link>
                    <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
