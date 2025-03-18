import React from "react";

import JsImg from "../assets/js.png";
import nextJsImg from "../assets/nextjs.png";
import PrismaImg from "../assets/prisma.png";
import pythonImg from "../assets/python-logo.png";
import reactJsImg from "../assets/reactjs.png";
import typeScriptImg from "../assets/Typescript.png";
import { cn } from "../lib/utils/utils";

const StackCard = () => {
  return (
    <div className="text-white my-20 relative">
      {/* Experience Section  */}
      <div className="text-center">
        <h3
          className="text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Technology
        </h3>
      </div>
      <div className="relative flex h-[30rem] w-full items-start justify-start flex-wrap ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#8ceaff08_1px,transparent_1px),linear-gradient(to_bottom,#8ceaff08_1px,transparent_1px)]"
          )}
        />

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#0F172A]"></div>

        <div className="absolute bottom-44 top-36 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-40 xl:w-[400px]"></div>

        <div className="flex flex-wrap items-center justify-center my-16 w-[80%] m-auto">
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50 border border-slate-400 border-opacity-10">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={pythonImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={nextJsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={typeScriptImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={reactJsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={nextJsImg} alt="" srcSet="" className="rounded-sm " />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={PrismaImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={pythonImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={pythonImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={pythonImg} alt="" srcSet="" className="rounded-sm" />
          </div>
          <div className="w-[100px] h-[100px] rounded-md bg-[#fdfdfd13] bg-opacity-25 p-4 m-3 z-50">
            <img src={JsImg} alt="" srcSet="" className="rounded-sm" />
          </div>
        </div>
      </div>
      <div className="absolute right-[28%] top-0 hidden h-[200px] w-[200px] rotate-45 bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-20 lg:-top-22 lg:-right-28 lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px] rounded-full z-20"></div>
    </div>
  );
};

export default StackCard;
