import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";
import ICPC_Certificate from "../assets/icpc_certificate.png";
import RecomendationLetter from "../assets/pappudey_recomendation_certificate.jpg";

const RecommendationSection = () => (
  <section className="relative w-full flex flex-col justify-center pt-5 pb-24 px-2 md:px-0 overflow-hidden">
    {/* Section titles */}
    <div className="flex flex-wrap md:flex-nowrap items-end justify-center gap-5 mb-12 w-full max-w-7xl mx-auto">
      <div className="w-full md:w-4/5 flex flex-col items-end md:pr-10">
        <span className="inline-flex items-center gap-2 mb-2">
          <FaCertificate className="text-[#0ea5ea] text-3xl drop-shadow" />
          <span
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#0ea5ea,#0dd1d1 60%,#0ea5ea)",
            }}
          >
            Campus Recognition
          </span>
        </span>
        <span className="text-base text-[#ffffffbb] mt-1 text-right">
          Official Certificate of Appreciation from Chattogram Polytechnic
          Institute
        </span>
      </div>
      <div className="w-full md:w-2/5 flex flex-col items-start ">
        <span className="inline-flex items-center gap-2 mb-2">
          <FaAward className="text-[#0ea5ea] text-3xl drop-shadow" />
          <span
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#0ea5ea,#0dd1d1 60%,#0ea5ea)",
            }}
          >
            ICPC
          </span>
        </span>
        <span className="text-base text-[#ffffffbb] mt-1">
          Regionalist - 2024 | Team - CPI Newbies | Rank - 189
        </span>
      </div>
    </div>

    {/* Main content area */}
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto">
      {/* Clearance Certificate Card (60%) */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
        className="flex-[4] min-w-0 flex flex-col md:flex-row bg-white/10 border border-cyan-400/60 shadow-[0_8px_48px_0_rgba(14,165,234,0.13)] rounded-2xl backdrop-blur-2xl overflow-hidden"
      >
        <div className="flex items-center justify-center px-4 py-8">
          <motion.div
            whileHover={{
              scale: 1.04,
              rotate: -2,
              boxShadow: "0 6px 36px #0ea5ea70",
            }}
            className="relative group cursor-pointer"
          >
            <img
              src={RecomendationLetter}
              loading="lazy"
              alt="Recommendation Certificate"
              className="rounded-xl border-2 border-cyan-400 shadow-xl w-full w-[820px] transition"
            />
            <span className="absolute -top-5 left-3 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md">
              <FaShieldAlt className="mr-1 text-base" /> Verified by Institute
            </span>
            <span className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-[#0ea5ea22] rounded-xl transition pointer-events-none">
              <FaArrowRight className="text-3xl text-white drop-shadow" />
            </span>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center px-4 py-8 min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-3 font-sora">
            Certificate of Achievement
          </h3>
          <p className="text-[#fffde0] text-sm mb-6 leading-relaxed font-sora">
            <span className="font-semibold text-[#0ea5ea]">Mr. Pappu Dey</span>{" "}
            has been officially recognized by
            <span className="font-semibold text-[#0dd1d1]">
              {" "}
              Chattogram Polytechnic Institute
            </span>{" "}
            for the
            <span className="font-semibold text-[#0ea5ea]">
              {" "}
              design and delivery of a SaaS-based Clearance Software System
            </span>
            . This project modernized institutional processes and demonstrated
            <span className="text-cyan-400 font-semibold">
              {" "}
              exceptional technical proficiency
            </span>
            ,
            <span className="text-cyan-400 font-semibold">
              {" "}
              problem-solving
            </span>
            , and
            <span className="text-cyan-400 font-semibold"> innovation</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-[#ffffffc5] text-sm font-sora">
            <div>
              <span className="font-semibold text-[#0ea5ea]">Awarded for:</span>{" "}
              Modernizing and streamlining clearance process
            </div>
            <div>
              <span className="font-semibold text-[#0ea5ea]">Issued by:</span>{" "}
              Mohammad Kamal Hossain, Principal
            </div>
            <div>
              <span className="font-semibold text-[#0ea5ea]">Date:</span>{" "}
              18-06-2025
            </div>
            <div>
              <span className="font-semibold text-[#0ea5ea]">Project:</span>{" "}
              SaaS-based Clearance Software System
            </div>
          </div>
          <a
            href={RecomendationLetter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5e45e8] to-[#0dd1d1] hover:from-[#6e58fa] hover:to-cyan-400 text-white font-bold px-7 py-2 rounded-lg shadow-lg mt-2 transition-all"
          >
            <FaCertificate /> View Full Certificate
          </a>
        </div>
      </motion.div>

      {/* ICPC Certificate Image Only (40%) */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
        className="flex-[2] min-w-0 flex flex-col items-center justify-center bg-white/10 border border-yellow-300/50 shadow-[0_8px_48px_0_rgba(236,202,75,0.08)] rounded-2xl backdrop-blur-2xl overflow-hidden"
      >
        <div className="relative flex items-center justify-center p-2 w-full h-full">
          <img
            src={ICPC_Certificate}
            loading="lazy"
            alt="ICPC Certificate"
            className="rounded-xl border-2 border-yellow-300 shadow-xl w-full max-w-[360px] transition"
          />
          {/* ICPC badge */}
          <span className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-xl shadow-md">
            <FaAward className="mr-1 text-base" /> ICPC Regionalist
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RecommendationSection;
