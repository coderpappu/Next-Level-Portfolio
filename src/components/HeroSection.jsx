import React from "react";
// Assuming you'll add the CSS here
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import pappuImg from "../assets/pappudey.png";

const HeroSection = () => {
  return (
    <div className="relative h-auto hero-section pt-[60px] md:pt-[100px] pb-28 z-50 px-4 sm:px-6 lg:px-8">
      <div className="intro_text">
        {/* SVG for animated "Hi" text */}
        <svg viewBox="0 0 500 500">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke ">
            Hi
          </text>
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row justify-between font-sora">
        {/* Left side */}
        <div className="w-full lg:w-[56%] mb-8 sm:mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] mb-3 lg:mb-5 font-bold text-white">
            I am Pappu
          </h2>
          <h2
            className="text-4xl sm:text-5xl md:text-[50px] lg:text-[50px] xl:text-[65px] font-bold text-transparent bg-clip-text leading-[1.4] sm:leading-[1.3] lg:leading-[1.3] inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            Software Engineer +
          </h2>
          <h2
            className="text-4xl sm:text-5xl  md:text-[50px] lg:text-[50px] xl:text-[65px]  font-bold text-transparent bg-clip-text leading-[1.4] sm:leading-[1.3] lg:leading-[1.3]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            UX Designer
          </h2>
          <p className="mt-4 sm:mt-6 lg:mt-10 text-base sm:text-lg lg:text-lg text-[#ffffffb0] max-w-full sm:w-[90%] md:max-w-[70%]">
            I break down complex user experience problems to create integrity
            focused solutions that connect billions of people
          </p>
          <div className="mt-8 sm:mt-6 lg:mt-10 flex flex-col sm:justify-center md:justify-start sm:flex-row items-center gap-4">
            <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-[#0EABE6] hover:bg-[#0DCFD2] text-[#0EABE6] rounded-full cursor-pointer transition duration-300 ease-in-out">
              Download CV
            </button>
            {/* Social media icons */}
            <ul className="flex space-x-4">
              <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                <Link
                  to="#"
                  className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                >
                  <RiFacebookFill size={20} />
                </Link>
                <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </li>
              <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                <Link
                  to="#"
                  className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                >
                  <BiLogoLinkedin size={20} />
                </Link>
                <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </li>
              <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
                <Link
                  to="#"
                  className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                >
                  <IoLogoGithub size={20} />
                </Link>
                <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side */}
        <div className=" max-w-[280px] sm:max-w-sm md:max-w-md lg:w-[44%] w-full mx-auto hero-image-box z-30">
          <img
            src={pappuImg}
            alt="pappudey_picture"
            className="rounded-[38px] border-2 border-[#7343D2] transform rotate-[4.29deg] transition-transform duration-300 ease-in-out hover:rotate-0 hover:border-[#0DCFD2] w-full h-auto"
          />
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
