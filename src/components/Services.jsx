import { motion } from "framer-motion";
import {
  FaCode,
  FaAndroid,
  FaPlug,
  FaMicrochip,
  FaRobot,
  FaServer,
  FaArrowRight,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

const capabilities = [
  {
    icon: <FaRobot />,
    title: "AI Automation",
    description: "AI workflows, automation pipelines, and ML integrations.",
  },
  {
    icon: <FaServer />,
    title: "DevOps & Cloud Infra",
    description: "CI/CD pipelines and cloud infra that scale reliably.",
  },
  {
    icon: <FaPlug />,
    title: "API Development",
    description: "Secure REST APIs that connect your entire stack.",
  },
  {
    icon: <FaMicrochip />,
    title: "Hardware Integration",
    description: "IoT and embedded systems — hardware meets software.",
  },
];

const promos = [
  {
    icon: <FaCode />,
    title: "SaaS & Web Applications",
    description:
      "End-to-end SaaS platforms and custom web applications — React, Node.js, multi-tenant architecture, and full-stack delivery.",
    cta: "Discuss this",
  },
  {
    icon: <FaAndroid />,
    title: "Android Mobile Apps",
    description:
      "Native and cross-platform Android applications built for performance and a seamless user experience.",
    cta: "Build my app",
  },
];

const stats = [
  { icon: <FaBriefcase />, value: "25+", label: "Projects Completed" },
  { icon: <FaUsers />, value: "18+", label: "Happy Clients" },
];

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  return (
    <section id="services" className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate">
      {/* Ambient background layers — matches hero section */}
      <div className="absolute top-1/3 -left-16 hidden lg:block w-[320px] h-[320px] -rotate-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -right-16 hidden lg:block w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-20 blur-[100px] -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
            Services
          </span>
          <h3
            className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
            }}
          >
            What I Build
          </h3>
          <p className="text-[#ffffffa0] mt-4 font-sora text-base max-w-xl mx-auto leading-relaxed">
            One engineer, every layer — web, mobile, cloud, AI, and hardware,
            all under one roof
          </p>
        </motion.div>
      </div>

      {/* Bento Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Hero + Stats + Key Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 rounded-xl border border-white/[0.04] p-6 lg:p-8"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Hero card */}
              <div className="md:col-span-2 rounded-lg p-7 lg:p-9 relative overflow-hidden flex flex-col justify-center bg-white/[0.04] border border-white/[0.04]">
                <h4 className="text-lg lg:text-xl font-sora font-bold text-white mb-3 relative lg:whitespace-nowrap tracking-tight">
                  One Engineer. Web to Hardware.
                </h4>
                <p className="text-[#ffffffb0] text-xs lg:text-sm font-sora leading-relaxed mb-6 max-w-md relative">
                  Web apps, Android mobile, DevOps, AI automation, APIs, and
                  hardware integration — I design, build, and ship across your
                  entire stack, from the browser down to the device.
                </p>
                <button
                  onClick={scrollToContact}
                  className="relative w-fit text-sm font-sora font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full border border-white/[0.05] cursor-pointer transition-colors duration-300"
                >
                  Let&apos;s Talk
                </button>
              </div>

              {/* Stats stack */}
              <div className="flex flex-row md:flex-col gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-lg border border-white/[0.04] p-5 flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-3xl lg:text-4xl font-sora font-bold text-white leading-none">
                        {stat.value}
                      </p>
                      <span className="w-9 h-9 shrink-0 rounded-full border border-white/[0.05] flex items-center justify-center text-white/70 text-sm">
                        {stat.icon}
                      </span>
                    </div>
                    <p className="text-xs text-[#ffffffb0] font-sora mt-3 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Capabilities strip */}
            <div className="mt-8 pt-8 border-t border-white/[0.04]">
              <span className="inline-flex items-center gap-2 text-[10px] font-sora font-medium uppercase tracking-[0.25em] text-white bg-white/[0.04] border border-white/[0.05] px-3 py-1.5 rounded-full">
                Key Capabilities
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7 mt-6 items-stretch">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col h-full ${
                      idx !== 0 ? "md:border-l md:border-white/[0.04] md:pl-6" : ""
                    }`}
                  >
                    <span className="w-8 h-8 shrink-0 rounded-full border border-white/[0.05] flex items-center justify-center text-white/70 text-xs mb-3">
                      {cap.icon}
                    </span>
                    <h5 className="text-xs font-sora font-semibold text-white leading-snug mb-1 min-h-[1.75rem] flex items-end">
                      {cap.title}
                    </h5>
                    <p className="text-[11px] text-[#ffffff80] font-sora leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stacked promo cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {promos.map((promo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="flex-1 rounded-lg border border-white/[0.04] hover:border-[#0EABE6]/12 p-6 lg:p-7 transition-colors duration-500 bg-white/[0.03]"
              >
                <div className="w-12 h-12 rounded-full border border-white/[0.05] flex items-center justify-center text-white/70 text-xl mb-5">
                  {promo.icon}
                </div>
                <h4 className="text-lg font-sora font-bold text-white mb-2.5">
                  {promo.title}
                </h4>
                <p className="text-sm text-[#ffffffb0] font-sora leading-relaxed mb-5">
                  {promo.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-sm text-white font-sora font-semibold bg-transparent border-none cursor-pointer group/cta"
                >
                  {promo.cta}
                  <FaArrowRight className="text-xs group-hover/cta:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
