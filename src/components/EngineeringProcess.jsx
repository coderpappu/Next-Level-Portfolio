import { motion } from "framer-motion";
import {
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaVial,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import workStationImg from "../assets/work-time-station.jpg";

const steps = [
  {
    icon: <FaSearch />,
    title: "Understand",
    description:
      "Deep dive into requirements. Understand the business problem, user workflows, and success metrics before writing a single line of code.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Architect",
    description:
      "Design the database schema, API contracts, and component structure. Choose technologies based on the problem — not trends.",
  },
  {
    icon: <FaCode />,
    title: "Build",
    description:
      "Write clean, typed, modular code. Small PRs, meaningful commits, and documentation-as-you-go. No shortcuts in production code.",
  },
  {
    icon: <FaVial />,
    title: "Test",
    description:
      "Validate with real data. API testing with Postman, manual QA flows, and integration checks. Ship when it works — not when it compiles.",
  },
  {
    icon: <FaRocket />,
    title: "Ship",
    description:
      "Deploy with confidence. Environment configuration, basic monitoring, and a rollback plan. Launch day is planned — not stressful.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Iterate",
    description:
      "Collect feedback, measure results, and improve continuously. Engineering doesn't end at deployment — it evolves with the product.",
  },
];

const EngineeringProcess = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate">
      {/* Ambient background layers — matches Services/Projects/About sections */}
      <div className="absolute top-1/4 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

      <div className="text-center mb-16">
        <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
          Process
        </span>
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          How I Engineer
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base max-w-2xl mx-auto">
          Software engineering is more than writing code — it&apos;s a
          structured way of thinking about problems and shipping solutions
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Sidebar image */}
          <div className="lg:col-span-4 relative rounded-lg overflow-hidden border border-white/[0.05] min-h-[240px] lg:min-h-0">
            <img
              src={workStationImg}
              alt="Pappu Dey deep in focus at his workstation"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 50%, transparent 75%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
                Behind The Scenes
              </span>
              <h4 className="text-lg font-sora font-semibold text-white mt-2">
                Where the code actually gets written
              </h4>
            </div>
          </div>

          {/* Process cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] p-6 transition-colors duration-500 group"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/[0.04] font-sora select-none group-hover:text-white/[0.08] transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center text-white/70 text-base mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-lg font-sora font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[#ffffff80] font-sora leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;
