import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";
import DashboardImg from "../assets/dashboard.png";
import djangoImg from "../assets/django.svg";
import JsImg from "../assets/js.png";
import miniDokanImg from "../assets/mini-dokan.png";
import mysqlImg from "../assets/mysql.svg";
import nodeImg from "../assets/node-js.svg";
import prismaImg from "../assets/prisma.png";
import reactImg from "../assets/reactjs.png";
import ReportImg from "../assets/report.png";
import tailwindImg from "../assets/tailwind.svg";
import WordpressImg from "../assets/wordpress.png";
import { PinContainer } from "./PinContainer";
import { AnimatedTooltip } from "./Tooltip";

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

  // Add more projects here
];

export function AnimatedPinDemo() {
  return (
    <div className="w-full h-auto relative ">
      <div className="text-center">
        <h3
          className="text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Project
        </h3>
      </div>

      <div className="h-auto flex flex-wrap items-center justify-center">
        <div className="absolute bottom-44 top-36 -left-24 hidden h-[550px] w-[1500px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:left-[4rem] lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-60 xl:w-[1200px]"></div>

        {projects.map((project, index) => (
          <PinContainer key={index} title={project?.link} href={project?.href}>
            <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold font-sora  text-lg text-[#0EABE6]">
                {project?.name}
              </h3>
              <div className="w-full h-[230px] overflow-hidden rounded-md">
                <img src={project?.image} alt="" srcSet="" />
              </div>
              <div className="text-base my-3 !p-0 font-normal">
                <span className="text-slate-400 ">{project?.description}</span>
              </div>
              <div className="flex flex-wrap mt-2 justify-between items-center gap-2">
                <div className="flex flex-row items-center justify-start w-[45%]">
                  <AnimatedTooltip items={project?.tech} />
                </div>
                <div className="flex flex-wrap items-center  justify-end w-[50%]">
                  <div className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                    <Link
                      to={project?.githubLink}
                      className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                    >
                      <FaGithub size={20} />
                    </Link>
                    <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </div>
                  <div className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                    <Link
                      to={project?.liveLink}
                      className="relative z-50 text-[#0EABE6] group-hover:text-white transition duration-300"
                    >
                      <LuMousePointerClick size={20} />
                    </Link>
                    <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
