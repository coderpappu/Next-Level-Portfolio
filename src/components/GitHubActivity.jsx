import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const pinnedRepos = [
  {
    name: "e-clearance-system",
    description:
      "SaaS-based E-Clearance system for universities — multi-department digital approvals, real-time tracking, and automated notifications.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    stars: 12,
    forks: 3,
    url: "https://github.com/coderpappu",
  },
  {
    name: "hrm-saas-platform",
    description:
      "Enterprise HRM SaaS platform with multi-tenant architecture, payroll processing, RBAC, and attendance management.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 8,
    forks: 2,
    url: "https://github.com/coderpappu",
  },
  {
    name: "codex-lms",
    description:
      "Full-stack Learning Management System — course creation, student enrollment, progress tracking, and payment integration.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    stars: 6,
    forks: 1,
    url: "https://github.com/coderpappu",
  },
  {
    name: "react-dashboard",
    description:
      "Modern e-commerce admin dashboard with interactive charts, real-time analytics, and responsive design.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    stars: 15,
    forks: 5,
    url: "https://react-dashboard-nine-tawny.vercel.app/",
  },
];

const stats = [
  { label: "Repositories", value: "30+" },
  { label: "Contributions", value: "500+" },
  { label: "Languages", value: "6" },
  { label: "Open Source", value: "Active" },
];

const GitHubActivity = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative">
      <div className="text-center mb-16">
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Open Source & GitHub
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base max-w-2xl mx-auto">
          I believe in building in public — here are some of my repositories and
          contributions
        </p>
      </div>

      {/* GitHub Stats Bar */}
      <div className="max-w-4xl mx-auto mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/10 px-5 py-3"
            >
              <span className="text-2xl font-bold text-white font-sora">
                {stat.value}
              </span>
              <span className="text-xs text-[#ffffff80] font-sora uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pinned Repositories */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4">
        {pinnedRepos.map((repo, idx) => (
          <motion.a
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-xl backdrop-blur-md bg-white/[0.06] border border-white/10 p-5 hover:border-[#0EABE6]/40 hover:bg-white/[0.09] transition-all duration-500 block"
          >
            {/* Repo Name */}
            <div className="flex items-center gap-2 mb-3">
              <IoLogoGithub className="text-xl text-[#ffffff90]" />
              <span className="text-base font-sora font-semibold text-[#0EABE6] group-hover:underline">
                {repo.name}
              </span>
              <FaExternalLinkAlt className="text-[10px] text-[#ffffff50] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Description */}
            <p className="text-sm text-[#ffffff90] font-sora leading-relaxed mb-4 line-clamp-2">
              {repo.description}
            </p>

            {/* Footer: Language + Stats */}
            <div className="flex items-center gap-5 text-xs text-[#ffffff70] font-sora">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: repo.languageColor }}
                ></span>
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-[10px]" />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-[#ffffff60] text-[10px]" />
                {repo.forks}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/coderpappu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#0EABE6] text-[#0EABE6] rounded-full font-sora font-semibold hover:bg-[#0EABE6] hover:text-white transition-all duration-300"
        >
          <IoLogoGithub className="text-lg" />
          View Full GitHub Profile →
        </a>
      </div>
    </section>
  );
};

export default GitHubActivity;
