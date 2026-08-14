import { FaArrowRight } from "react-icons/fa";
import ProfileImg from "../assets/pic.jpg";

const About = () => {
  const scrollToResume = () => {
    const section = document.getElementById("resume");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate">
      {/* Ambient background layers — matches Services/Projects sections */}
      <div className="absolute top-1/4 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

      <div className="text-center mb-16">
        <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
          About
        </span>
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          About Me
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base">
          The engineer behind the code
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Profile image */}
          <div className="lg:col-span-4 flex justify-center">
            <img
              src={ProfileImg}
              alt="Pappu Dey - Software Engineer"
              loading="lazy"
              className="w-full max-w-[380px] rounded-lg object-cover shadow-2xl shadow-black/40 transform -rotate-3 transition-all duration-300 ease-in-out hover:rotate-0 hover:scale-105"
            />
          </div>

          {/* About text */}
          <div className="lg:col-span-8 lg:border-l border-t lg:border-t-0 border-white/[0.06] pt-8 lg:pt-0 lg:pl-10">
            <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-6 lg:p-8">
              <p className="text-[#ffffffb0] text-xs md:text-sm font-sora leading-relaxed">
                I&apos;m Pappu Dey — a software engineer from Chattogram,
                Bangladesh with 4+ years of experience building production web
                applications and SaaS platforms.
              </p>
              <p className="text-[#ffffffb0] text-xs md:text-sm font-sora leading-relaxed mt-4">
                I currently work at{" "}
                <span className="text-white font-normal">
                  Xceed Bangladesh
                </span>
                , where I build and maintain enterprise HRM (Human Resource
                Management) SaaS systems handling real business operations for
                multiple organizations.
              </p>
              <p className="text-[#ffffffb0] text-xs md:text-sm font-sora leading-relaxed mt-4">
                Previously, I built a full{" "}
                <span className="text-white font-normal">
                  SaaS-based E-Clearance system
                </span>{" "}
                for Chattogram Polytechnic Institute — officially recognized
                with a Certificate of Achievement from the institution. I also
                competed in{" "}
                <span className="text-white font-normal">
                  ICPC Asia Dhaka Regional 2024
                </span>
                .
              </p>
              <p className="text-[#ffffffb0] text-xs md:text-sm font-sora leading-relaxed mt-4">
                Outside of client work, I founded{" "}
                <span className="text-white font-normal">Codex Devware</span>,
                a small software studio where I lead a team building the Codex
                LMS platform and other client projects. That mix of employed
                and founder experience pushed me beyond just web development —
                into Android app development, DevOps pipelines, AI-powered
                automation, and hardware integration for IoT projects.
              </p>
              <p className="text-[#ffffffb0] text-xs md:text-sm font-sora leading-relaxed mt-4">
                My core stack:{" "}
                <span className="text-white font-normal">
                  React, Next.js, Node.js, Laravel, PostgreSQL, and Prisma
                </span>
                . I&apos;m passionate about clean architecture, scalable
                systems, and solving real business problems through software.
              </p>

              <button
                onClick={scrollToResume}
                className="mt-6 pt-5 w-full border-t border-white/[0.05] flex items-center gap-2 text-sm text-white font-sora font-semibold bg-transparent cursor-pointer group/cta"
              >
                View My Experience
                <FaArrowRight className="text-xs group-hover/cta:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
