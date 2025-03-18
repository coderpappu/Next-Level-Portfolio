import React from "react";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
const CareerSummary = () => {
  return (
    <div className="flex flex-wrap justify-between ">
      <div className="w-[50%]">
        {/* Experience Section  */}
        <div className=" flex flex-wrap justify-start items-center">
          <BsFillClipboardCheckFill size={28} className="text-blue-500" />
          <h2
            className="text-4xl font-sora font-bold  ml-2  text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            Experience
          </h2>
        </div>

        {/* timeline  */}
        <div className="my-9">
          <div className="flex flex-wrap font-sora ">
            <div className="w-[106px] mt-5 mr-2">
              <h2 className="bg-gradient-to-br from-cyan-500  to-blue-500  text-sm text-white py-1 px-3 rounded-full mt-1">
                4 months
              </h2>
            </div>
            <div className="relative w-[95px] flex justify-center">
              <div className="w-[3px] h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-[70px] h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[38px]"></div>
              <div className="w-4 h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px] "></div>
            </div>
            <div className="w-[400px] mt-7 ml-2">
              <h3
                className="font-bold text-xl  text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Software Engineer - Intern
              </h3>
              <p className="text-[#ffffffa2] my-2">Xceed Bangladesh LTD</p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus porro perspiciatis quia minus ratione quis
                voluptatem itaque unde nulla!
              </p>
            </div>
          </div>

          {/* Card  */}
          <div className="flex flex-wrap font-sora ">
            <div className="w-[106px] mt-5 mr-2">
              <h2 className="bg-gradient-to-br from-cyan-500  to-blue-500  text-sm text-white py-1 px-3 rounded-full mt-1">
                2021- 2022
              </h2>
            </div>
            <div className="relative w-[95px] flex justify-center">
              <div className="w-[3px] h-[190px] bg-gradient-to-b from-cyan-500  opacity-45"></div>
              <div className="w-[70px] h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[40px]"></div>
              <div className="w-4 h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[33px] "></div>
            </div>
            <div className="w-[410px] mt-7 ml-2">
              <h3
                className="font-bold text-xl  text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Web Application Developer
              </h3>
              <p className="text-[#ffffffa2] my-2">Research Lab Chattogram</p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus porro perspiciatis quia minus ratione quis
                voluptatem itaque unde nulla!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Side  */}
      <div className="w-[50%]">
        <div className=" flex flex-wrap justify-start items-center">
          <FaGraduationCap size={28} className="text-blue-500" />
          <h2
            className="text-4xl font-sora font-bold  ml-2  text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            Education
          </h2>
        </div>
        {/* timeline  */}
        <div className="my-9">
          <div className="flex flex-wrap font-sora ">
            <div className="w-[106px] mt-5 mr-2">
              <h2 className="bg-gradient-to-br from-cyan-500  to-blue-500 text-sm text-white py-1 px-3 rounded-full mt-1">
                2021- 2024
              </h2>
            </div>
            <div className="relative w-[95px] flex justify-center">
              <div className="w-[3px] h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-[70px] h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[38px]"></div>
              <div className="w-4 h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px] "></div>
            </div>
            <div className="w-[410px] mt-7 ml-2">
              <h3
                className="font-bold text-xl  text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Diploma In Computer Science{" "}
              </h3>
              <p className="text-[#ffffffa2] my-2">
                Chattogram Polytechnic Institute
              </p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus porro perspiciatis quia minus ratione quis
                voluptatem itaque unde nulla!
              </p>
            </div>
          </div>

          {/* Card  */}
          <div className="flex flex-wrap font-sora ">
            <div className=" mt-5 mr-2">
              <h2 className="bg-gradient-to-br from-cyan-500  to-blue-500  text-sm text-white py-1 px-3 rounded-full mt-1">
                2020- 2021
              </h2>
            </div>
            <div className="relative w-[95px] flex justify-center">
              <div className="w-[3px] h-[190px] bg-gradient-to-b from-cyan-500  opacity-45"></div>
              <div className="w-[70px] h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[40px]"></div>
              <div className="w-4 h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[33px] "></div>
            </div>
            <div className="w-[400px] mt-7 ml-2">
              <h3
                className="font-bold text-xl  text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Secondary School Certificate
              </h3>
              <p className="text-[#ffffffa2] my-2">
                Raozan Barrister Suresh Vidyayatan
              </p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                necessitatibus porro perspiciatis quia minus ratione quis
                voluptatem itaque unde nulla!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSummary;
