import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaComments, FaSitemap, FaCodeBranch, FaRocket } from "react-icons/fa";

const steps = [
  {
    phase: "01",
    total: "/04",
    title: "Discovery & Scope",
    subtitle: "Understand the mission",
    description:
      "We start with a deep technical discussion. I learn your business goals, user workflows, existing systems, and constraints. No generic questionnaires — just real engineering conversation to define the exact scope of work.",
    icon: <FaComments className="text-6xl text-blue-500" />,
    gradient: "from-blue-600/20 to-cyan-600/5",
    accent: "text-blue-400",
  },
  {
    phase: "02",
    total: "/04",
    title: "Architecture Design",
    subtitle: "Design the blueprint",
    description:
      "I design the database schema, API contracts, and component structure. You get a clear technical plan with tech stack decisions, timeline estimates, and milestone breakdown before a single line of code is written.",
    icon: <FaSitemap className="text-6xl text-violet-500" />,
    gradient: "from-violet-600/20 to-purple-600/5",
    accent: "text-violet-400",
  },
  {
    phase: "03",
    total: "/04",
    title: "Development Sprints",
    subtitle: "Code with precision",
    description:
      "Development happens in 1–2 week sprints. Every sprint ends with a deployable increment. You get real-time updates, staging previews, and transparent progress tracking throughout the entire build phase.",
    icon: <FaCodeBranch className="text-6xl text-emerald-500" />,
    gradient: "from-emerald-600/20 to-teal-600/5",
    accent: "text-emerald-400",
  },
  {
    phase: "04",
    total: "/04",
    title: "Launch & Support",
    subtitle: "Deploy with confidence",
    description:
      "Production deployment with DNS configuration, SSL, monitoring, and performance optimization. Post-launch support included — bug fixes, feature iterations, and scaling guidance as your user base grows.",
    icon: <FaRocket className="text-6xl text-amber-500" />,
    gradient: "from-amber-600/20 to-orange-600/5",
    accent: "text-amber-400",
  },
];

const Card = ({ step, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 40}px)`,
        }}
        className={`relative flex flex-col md:flex-row w-[90%] max-w-5xl h-[500px] md:h-[450px] rounded-3xl border border-white/[0.08] p-8 md:p-12 overflow-hidden shadow-2xl origin-top bg-[#0B1121]`}
      >
        {/* Left Side — Visual/Icon */}
        <div
          className={`w-full md:w-[45%] h-[200px] md:h-full rounded-2xl bg-gradient-to-br ${step.gradient} border border-white/[0.04] flex items-center justify-center relative overflow-hidden mb-6 md:mb-0 md:mr-10 shrink-0`}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="flex items-center justify-center w-full h-full"
          >
            {step.icon}
          </motion.div>
          {/* Decorative background number */}
          <span className="absolute -bottom-10 -right-4 text-[120px] font-sora font-black text-white/[0.02] select-none">
            {step.phase}
          </span>
        </div>

        {/* Right Side — Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          <div className="flex items-baseline gap-1 mb-2 font-sora font-bold">
            <span className={`text-4xl md:text-5xl ${step.accent}`}>
              {step.phase}
            </span>
            <span className="text-xl md:text-2xl text-[#ffffff40]">
              {step.total}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-sora font-bold text-white mb-2 leading-tight tracking-tight">
            {step.title}
          </h3>
          <h4 className="text-sm md:text-base font-sora text-[#ffffff60] italic mb-6">
            — {step.subtitle}
          </h4>
          
          <p className="text-[#ffffff80] font-sora text-sm md:text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const WorkWithMe = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="workflow" className="relative text-white py-12">
      <div className="text-center mb-10 pt-10">
        <span className="text-xs font-sora text-[#0EABE6] uppercase tracking-[0.3em] font-semibold">
          Process
        </span>
        <h3
          className="text-4xl md:text-6xl font-sora font-bold mt-4 text-transparent bg-clip-text pb-2"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Engineering Workflow
        </h3>
        <p className="text-[#ffffffa0] mt-4 font-sora text-base md:text-lg max-w-2xl mx-auto">
          A structured, transparent process — from first conversation to production deployment
        </p>
      </div>

      <div ref={container} className="relative mt-[5vh]">
        {steps.map((step, i) => {
          const targetScale = 1 - (steps.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              step={step}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Bottom spacer for smooth scroll exit */}
      <div className="h-[20vh]"></div>
    </section>
  );
};

export default WorkWithMe;
