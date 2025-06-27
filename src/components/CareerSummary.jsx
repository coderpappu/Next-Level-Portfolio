import { BsFillClipboardCheckFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";

const CareerSummary = () => {
  return (
    <div id="resume" className="flex flex-wrap justify-between">
      {/* Experience Section */}
      <div className="w-full md:w-[50%] mb-10 md:mb-0 ">
        <div className="flex flex-wrap justify-start items-center  ml-2 lg:ml-0">
          <BsFillClipboardCheckFill size={28} className="text-blue-500" />
          <h2
            className="text-3xl md:text-4xl font-sora font-bold ml-2 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            Experience
          </h2>
        </div>

        <div className="my-9">
          {/* Experience Card 1 */}
          <div className="flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
            <div className="w-28 mt-5 mr-2 hidden lg:block">
              <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full mt-1">
                01-10-2024
              </h2>
            </div>
            <div className="relative w-10 flex justify-center sm:w-16">
              <div className="w-[2px] sm:w-[3px] h-[250px] lg:h-[160px] sm:h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px]"></div>
            </div>

            <div className="w-[320px] ml-2 md:w-[400px] md:ml-2">
              <div className="w-24 mt-7 mr-2 mb-2 lg:hidden">
                <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-[11px] text-white py-1 px-3 rounded-full mt-1">
                  01-10-2024
                </h2>
              </div>
              <h3
                className="font-bold text-xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Software Engineer
              </h3>
              <p className="text-[#ffffffa2] my-2">Xceed Bangladesh LTD</p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Custom SaaS software development, specializing in HRM solutions.
                Programming to adapt and optimize systems for specific client
                needs. Delivering tailored features within a dynamic, SaaS
                environment.
              </p>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
            <div className="w-28 mt-5 mr-2 hidden lg:block">
              <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full mt-1">
                2021-2022
              </h2>
            </div>
            <div className="relative w-10 flex justify-center sm:w-16">
              <div className="w-[2px] sm:w-[3px] h-[250px] lg:h-[160px] sm:h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px]"></div>
            </div>

            <div className="w-[320px] ml-2 md:w-[400px] md:ml-2">
              <div className="w-24 mt-7 mr-2 mb-2 lg:hidden">
                <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-[11px] text-white py-1 px-3 rounded-full mt-1">
                  2021-2022
                </h2>
              </div>
              <h3
                className="font-bold text-xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Web Application Developer
              </h3>
              <p className="text-[#ffffffa2] my-2">Research Lab Chattogram</p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Creating and managing websites from concept to deployment.
                Proficient in both custom coding and WordPress development.
                Ensuring optimal site performance and security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full md:w-[50%]">
        <div className="flex flex-wrap justify-start items-center ml-2 lg:ml-0">
          <FaGraduationCap size={28} className="text-blue-500" />
          <h2
            className="text-3xl md:text-4xl font-sora font-bold ml-2 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            Education
          </h2>
        </div>

        <div className="my-9">
          {/* Education Card 1 */}
          <div className="flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
            <div className="w-28 mt-5 mr-2 hidden lg:block">
              <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full mt-1">
                2021-2024
              </h2>
            </div>
            <div className="relative w-10 flex justify-center sm:w-16">
              <div className="w-[2px] sm:w-[3px] h-[220px] lg:h-[160px] sm:h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px]"></div>
            </div>

            <div className="w-[320px] ml-2 md:w-[400px] md:ml-2">
              <div className="w-24 mt-7 mr-2 mb-2 lg:hidden">
                <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-[11px] text-white py-1 px-3 rounded-full mt-1">
                  2021-2024
                </h2>
              </div>
              <h3
                className="font-bold text-xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                }}
              >
                Diploma In Computer Science
              </h3>
              <p className="text-[#ffffffa2] my-2">
                Chattogram Polytechnic Institute
              </p>
              <p className="text-justify text-sm text-[#ffffff78]">
                Completed a 4-year Diploma in CSE, achieving a 3.50 GPA.
                Practical skill development and committed to continued learning.
              </p>
            </div>
          </div>

          {/* Education Card 2 */}
          <div className="flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
            <div className="w-28 mt-5 mr-2 hidden lg:block">
              <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full mt-1">
                2020-2021
              </h2>
            </div>
            <div className="relative w-10 flex justify-center sm:w-16">
              <div className="w-[2px] sm:w-[3px] h-[160px] sm:h-[190px] bg-cyan-500 opacity-45"></div>
              <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px]"></div>
            </div>

            <div className="w-[320px] ml-2 md:w-[400px] md:ml-2">
              <div className="w-24 mt-7 mr-2 mb-2 lg:hidden">
                <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-[11px] text-white py-1 px-3 rounded-full mt-1">
                  2020-2021
                </h2>
              </div>
              <h3
                className="font-bold text-xl text-transparent bg-clip-text"
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
                Secondary School Certificate (Science Group) | Completed in 2020
                | Foundation in science education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSummary;
