import { BsFillClipboardCheckFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";

const CareerSummary = () => {
  return (
    <section
      id="resume"
      className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate"
    >
      {/* Ambient background layers — matches other sections */}
      <div className="absolute top-1/4 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

      <div className="text-center mb-16">
        <span className="text-xs font-sora text-[#0EABE6] uppercase tracking-[0.3em] font-semibold">
          Resume
        </span>
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Experience &amp; Education
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base">
          The roles, projects, and studies that shaped how I build
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Section */}
          <div>
            <div className="flex flex-wrap justify-start items-center ml-2 lg:ml-0">
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

            <div className="my-9 relative">
              {/* Continuous connecting line — spans the whole timeline */}
              <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-[2px] sm:w-[3px] bg-cyan-500 opacity-45"></div>

              {/* Experience Card 1 — Current: Xceed */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0 pb-10">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border-2 border-cyan-400 rounded-full absolute top-[30px] inset-x-0 mx-auto">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                    }}
                  >
                    Software Engineer
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      Xceed Bangladesh LTD
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      Oct 2024 — Now
                    </span>
                  </div>
                  <ul className="text-sm text-[#ffffff90] space-y-1.5 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Building enterprise HRM SaaS platform serving multiple
                      organizations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Architecting multi-tenant system with React, Node.js, and
                      PostgreSQL
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Implementing RBAC, payroll processing, and attendance modules
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span className="text-[#ffffff60]">
                        Stack: React, Redux, Node.js, Express, PostgreSQL, Prisma
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Card 2 — Codex Devware */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0 pb-10">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border-2 border-emerald-400 rounded-full absolute top-[30px] inset-x-0 mx-auto">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(16, 185, 129), rgb(52, 211, 153) 51%, rgb(16, 185, 129))",
                    }}
                  >
                    Founder &amp; CEO
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      Codex Devware
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      2022 — Present
                    </span>
                  </div>
                  <ul className="text-sm text-[#ffffff90] space-y-1.5 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▸</span>
                      Founded a software development company delivering web solutions for clients
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▸</span>
                      Built and shipped the Codex LMS platform — course management, enrollment, and payments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▸</span>
                      Leading a small engineering team on client projects and internal products
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span className="text-[#ffffff60]">
                        Stack: React, Node.js, Laravel, MySQL, Tailwind CSS
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Card 3 — Research Lab */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px] inset-x-0 mx-auto"></div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                    }}
                  >
                    Web Application Developer
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      Research Lab Chattogram
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      2021 — 2022
                    </span>
                  </div>
                  <ul className="text-sm text-[#ffffff90] space-y-1.5 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Built and deployed 10+ custom web applications for clients
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Migrated legacy WordPress sites to modern React architectures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      Ensured optimal site performance, security, and SEO
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span className="text-[#ffffff60]">
                        Stack: React, WordPress, PHP, MySQL, Tailwind CSS
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
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

            <div className="my-9 relative">
              {/* Continuous connecting line — spans the whole timeline */}
              <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-[2px] sm:w-[3px] bg-cyan-500 opacity-45"></div>

              {/* Education Card 1 — BSC */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0 pb-10">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border-2 border-cyan-400 rounded-full absolute top-[30px] inset-x-0 mx-auto">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                    }}
                  >
                    BSc in Computer Science
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      East Delta University
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      2025 — Present
                    </span>
                  </div>
                  <p className="text-justify text-sm text-[#ffffff78]">
                    Pursuing Bachelor&apos;s degree in Computer Science, building on
                    a strong foundation of 4+ years of professional engineering
                    experience and competitive programming.
                  </p>
                </div>
              </div>

              {/* Education Card 2 — Diploma */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0 pb-10">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px] inset-x-0 mx-auto"></div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                    }}
                  >
                    Diploma in Computer Science
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      Chattogram Polytechnic Institute
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      2021 — 2024
                    </span>
                  </div>
                  <p className="text-justify text-sm text-[#ffffff78]">
                    Completed 4-year Diploma in CSE with 3.50 GPA. Built the
                    institute&apos;s official E-Clearance system as a capstone
                    project. Active in competitive programming — competed in ICPC
                    Asia Dhaka Regional 2024.
                  </p>
                </div>
              </div>

              {/* Education Card 3 — SSC */}
              <div className="relative flex flex-wrap font-sora gap-y-3 sm:gap-y-0">
                <div className="relative w-10 flex justify-center sm:w-16 shrink-0">
                  <div className="w-10 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-cyan-500 opacity-45 absolute top-[35px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F172A] border border-cyan-500 rounded-full absolute top-[30px] inset-x-0 mx-auto"></div>
                </div>

                <div className="flex-1 min-w-0 ml-2 mt-5">
                  <h3
                    className="font-bold text-xl text-transparent bg-clip-text mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
                    }}
                  >
                    Secondary School Certificate
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 my-2">
                    <p className="text-[#ffffffa2] font-medium">
                      Raozan Barrister Suresh Vidyayatan
                    </p>
                    <span className="bg-gradient-to-br from-cyan-500 to-blue-500 text-xs text-white py-1 px-3 rounded-full shrink-0">
                      2020 — 2021
                    </span>
                  </div>
                  <p className="text-justify text-sm text-[#ffffff78]">
                    SSC (Science Group) | Completed in 2020 | Foundation in science
                    and mathematics education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSummary;
