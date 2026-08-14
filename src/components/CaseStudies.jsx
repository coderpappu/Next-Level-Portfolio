import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaCogs,
  FaChartBar,
  FaExternalLinkAlt,
} from "react-icons/fa";
import DashboardImg from "../assets/dashboard.png";
import ReportImg from "../assets/report.png";
import LmsImg from "../assets/lms-system.jpg";

const caseStudies = [
  {
    featured: true,
    image: ReportImg,
    title: "E-Clearance System",
    client: "Chattogram Polytechnic Institute",
    liveLink: "http://clearance.codexdevware.com/",
    problem:
      "Student clearance was entirely paper-based. Students visited 8+ departments collecting physical signatures over 2+ weeks — causing delays, lost paperwork, and administrative bottlenecks.",
    solution:
      "Designed and built a SaaS-based E-Clearance system that digitizes the entire workflow with multi-department digital approvals, real-time status tracking, and automated notifications.",
    architecture: [
      "React SPA with component-based UI for student & admin dashboards",
      "Node.js + Express REST API with JWT authentication",
      "Prisma ORM + MySQL for type-safe, efficient database access",
      "Role-based access control system with 5+ permission levels",
    ],
    tech: ["React", "Node.js", "Express", "Prisma", "MySQL", "Tailwind CSS"],
    impact: [
      { label: "Processing time", value: "2 weeks → 2 days" },
      { label: "Paper reduction", value: "~90%" },
      { label: "Active users", value: "1,000+ students" },
      { label: "Recognition", value: "Certificate from Institute Principal" },
    ],
  },
  {
    featured: false,
    image: LmsImg,
    title: "Codex LMS",
    client: "Codex Devware",
    liveLink: "http://lms.developerpappudey.pro",
    problem:
      "Needed a complete online learning platform with course management, student enrollment, progress tracking, and payment processing.",
    solution:
      "Built a full-stack LMS supporting instructor course creation, student registration flows, video content delivery, and integrated payment gateway.",
    architecture: [
      "React frontend with dynamic course rendering and progress state",
      "Node.js API with Express handling enrollment and payment logic",
      "Prisma + MySQL for relational course-user-progress data",
    ],
    tech: ["React", "Node.js", "Express", "Prisma", "MySQL", "Tailwind CSS"],
    impact: [
      { label: "Courses hosted", value: "15+" },
      { label: "Student capacity", value: "500+" },
      { label: "Payment integration", value: "Fully automated" },
    ],
  },
  {
    featured: false,
    image: DashboardImg,
    title: "Nexus Dashboard",
    client: "E-commerce Client",
    liveLink: "https://react-dashboard-nine-tawny.vercel.app/",
    problem:
      "E-commerce business needed a modern admin dashboard to track products, orders, and revenue analytics in real time.",
    solution:
      "Built a responsive React dashboard with interactive charts, data tables, and KPI cards for real-time business intelligence.",
    architecture: [
      "React with Recharts for data visualization",
      "Responsive layout with Tailwind CSS grid system",
      "Reusable component library for charts, tables, and cards",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Recharts"],
    impact: [
      { label: "Data views", value: "7 analytics panels" },
      { label: "Mobile ready", value: "Fully responsive" },
      { label: "Load time", value: "< 1.5s" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative">
      <div className="text-center mb-16">
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Case Studies
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base max-w-2xl mx-auto">
          Deep dives into real projects — the problem, the solution, and the
          measurable impact
        </p>
      </div>

      {/* Featured Case Study — E-Clearance */}
      {caseStudies
        .filter((cs) => cs.featured)
        .map((cs, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16 rounded-2xl backdrop-blur-md bg-white/[0.06] border border-white/10 shadow-xl overflow-hidden px-4"
          >
            {/* Header with image */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[45%] p-6 flex items-center justify-center">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="rounded-xl w-full max-w-md object-cover shadow-lg"
                />
              </div>
              <div className="lg:w-[55%] p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#0EABE6]/20 text-[#0EABE6] font-sora font-semibold border border-[#0EABE6]/30">
                    Featured Project
                  </span>
                </div>
                <h4 className="text-2xl lg:text-3xl font-sora font-bold text-white mb-1">
                  {cs.title}
                </h4>
                <p className="text-[#0EABE6] font-sora text-sm mb-4">
                  {cs.client}
                </p>

                {/* Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaExclamationTriangle className="text-amber-400 text-sm" />
                    <span className="text-sm font-sora font-semibold text-amber-400 uppercase tracking-wider">
                      The Problem
                    </span>
                  </div>
                  <p className="text-[#ffffffa0] text-sm leading-relaxed font-sora">
                    {cs.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaLightbulb className="text-emerald-400 text-sm" />
                    <span className="text-sm font-sora font-semibold text-emerald-400 uppercase tracking-wider">
                      The Solution
                    </span>
                  </div>
                  <p className="text-[#ffffffa0] text-sm leading-relaxed font-sora">
                    {cs.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture + Impact Row */}
            <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8 border-t border-white/10">
              {/* Architecture */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <FaCogs className="text-violet-400 text-sm" />
                  <span className="text-sm font-sora font-semibold text-violet-400 uppercase tracking-wider">
                    Architecture Decisions
                  </span>
                </div>
                <ul className="space-y-2">
                  {cs.architecture.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#ffffff90] font-sora"
                    >
                      <span className="text-violet-400 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#0EABE6]/10 text-[#0EABE6] border border-[#0EABE6]/20 font-sora"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <FaChartBar className="text-cyan-400 text-sm" />
                  <span className="text-sm font-sora font-semibold text-cyan-400 uppercase tracking-wider">
                    Impact & Results
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {cs.impact.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/[0.04] border border-white/10 p-4 text-center"
                    >
                      <div className="text-xl font-bold text-white font-sora">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#ffffff70] font-sora mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={cs.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#0EABE6] text-sm font-sora font-semibold hover:underline"
                >
                  <FaExternalLinkAlt className="text-xs" /> View Live Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      {/* Other Case Studies — Compact Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {caseStudies
          .filter((cs) => !cs.featured)
          .map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl backdrop-blur-md bg-white/[0.06] border border-white/10 shadow-xl p-6 hover:border-[#0EABE6]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-20 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-lg font-sora font-bold text-white">
                    {cs.title}
                  </h4>
                  <p className="text-[#0EABE6] font-sora text-xs">
                    {cs.client}
                  </p>
                </div>
              </div>

              {/* Problem/Solution */}
              <div className="mb-3">
                <span className="text-xs font-sora font-semibold text-amber-400 uppercase tracking-wider">
                  Problem:
                </span>
                <p className="text-[#ffffff90] text-xs mt-1 font-sora leading-relaxed">
                  {cs.problem}
                </p>
              </div>
              <div className="mb-4">
                <span className="text-xs font-sora font-semibold text-emerald-400 uppercase tracking-wider">
                  Solution:
                </span>
                <p className="text-[#ffffff90] text-xs mt-1 font-sora leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-wrap gap-3 mb-4">
                {cs.impact.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-bold text-white font-sora">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#ffffff60] font-sora">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech + Link */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {cs.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-[#0EABE6]/10 text-[#0EABE6] border border-[#0EABE6]/20 font-sora"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={cs.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EABE6] text-xs font-sora font-semibold hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="text-[10px]" /> Live
                </a>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default CaseStudies;
