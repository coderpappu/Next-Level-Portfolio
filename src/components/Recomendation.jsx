import { motion } from "framer-motion";
import { FaArrowRight, FaAward } from "react-icons/fa";
import ICPC_Certificate from "../assets/icpc_certificate.png";
import RecomendationLetter from "../assets/pappudey_recomendation_certificate.jpg";

const RecommendationSection = () => (
  <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate">
    {/* Ambient background layers — matches other sections */}
    <div className="absolute top-1/4 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
    <div className="absolute bottom-10 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

    <div className="text-center mb-16">
      <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
        Recognition
      </span>
      <h3
        className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
        }}
      >
        Campus Recognition
      </h3>
      <p className="text-[#ffffffa0] mt-3 font-sora text-base max-w-xl mx-auto">
        Official recognition from Chattogram Polytechnic Institute and a
        regional competitive programming contest
      </p>
    </div>

    <div className="w-full px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Certificate of Achievement (larger card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 rounded-lg bg-white/[0.03] border border-white/[0.05] p-6 lg:p-8 flex flex-col md:flex-row gap-6"
        >
          <div className="md:w-[40%] shrink-0">
            <div className="relative group">
              <img
                src={RecomendationLetter}
                loading="lazy"
                alt="Recommendation Certificate"
                className="rounded-lg shadow-2xl shadow-black/40 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <h4 className="text-2xl font-sora font-semibold text-white mb-3">
              Certificate of Achievement
            </h4>
            <p className="text-[#ffffff80] text-sm font-sora leading-relaxed mb-6">
              Mr. Pappu Dey has been officially recognized by Chattogram
              Polytechnic Institute for the design and delivery of a
              SaaS-based Clearance Software System. This project modernized
              institutional processes and demonstrated exceptional technical
              proficiency, problem-solving, and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6 text-sm font-sora">
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Awarded for
                </span>
                <p className="text-[#ffffff90] leading-snug">
                  Modernizing and streamlining clearance process
                </p>
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Issued by
                </span>
                <p className="text-[#ffffff90] leading-snug">
                  Mohammad Kamal Hossain, Principal
                </p>
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Date
                </span>
                <p className="text-[#ffffff90] leading-snug">18-06-2025</p>
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Project
                </span>
                <p className="text-[#ffffff90] leading-snug">
                  SaaS-based Clearance Software System
                </p>
              </div>
            </div>
            <a
              href={RecomendationLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit inline-flex items-center gap-2 text-sm text-white font-sora font-semibold group/cta"
            >
              View Full Certificate
              <FaArrowRight className="text-xs group-hover/cta:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

        {/* ICPC Regionalist (smaller card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 rounded-lg bg-white/[0.03] border border-white/[0.05] p-6 lg:p-8 flex flex-col"
        >
          <h4 className="text-2xl font-sora font-semibold text-white mb-3">
            ICPC Regionalist
          </h4>
          <p className="text-[#ffffff80] text-sm font-sora leading-relaxed mb-6">
            The world&apos;s largest and most prestigious collegiate
            programming competition — competed as part of Team CPI Newbies.
          </p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 mb-2 text-sm font-sora">
            <div>
              <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                Year
              </span>
              <p className="text-[#ffffff90] leading-snug">2024</p>
            </div>
            <div>
              <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                Team
              </span>
              <p className="text-[#ffffff90] leading-snug">CPI Newbies</p>
            </div>
            <div>
              <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                Rank
              </span>
              <p className="text-[#ffffff90] leading-snug">189</p>
            </div>
          </div>

          <div className="relative mt-6 mx-auto w-full max-w-[320px]">
            <img
              src={ICPC_Certificate}
              loading="lazy"
              alt="ICPC Certificate"
              className="rounded-lg shadow-2xl shadow-black/40 w-full"
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] text-white/80 text-[11px] font-sora font-semibold px-3 py-1 rounded-full">
              <FaAward className="text-[#0EABE6]/70" /> Certificate
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RecommendationSection;
