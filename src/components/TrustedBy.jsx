import { motion } from "framer-motion";

import chattogramPolyLogo from "../assets/logos/chattogram-polytechnic.png";
import codexLogo from "../assets/logos/codexLogo.png";
import CriboHealth from "../assets/logos/CriboHealth.png";
import decEngineersClub from "../assets/logos/decEngineersClub.webp";
import researchLabLogo from "../assets/logos/researchLabLogo.png";
import xceedLogo from "../assets/logos/xceedLogo.png";

const companies = [
  { name: "Codex Devware", logo: codexLogo, url: "https://codexdevware.com" },
  {
    name: "Chattogram Polytechnic Institute",
    logo: chattogramPolyLogo,
    url: "https://chattogram.polytech.gov.bd",
  },
  {
    name: "Xceed Bangladesh",
    logo: xceedLogo,
    url: "https://xceedbd.com",
  },

  {
    name: "Research Lab CTG",
    logo: researchLabLogo,
    url: "https://researchlabctg.com",
  },

  {
    name: "D Engineers Club",
    logo: decEngineersClub,
    url: "https://dengineersclub.org",
  },
  {
    name: "Cribo Health",
    logo: CriboHealth,
    url: "https://cribohealth.com",
  },
  // { name: "East Delta University", logo: eduLogo, url: "https://eastdelta.edu.bd" },
];

const TrustedBy = () => {
  // Duplicate for seamless infinite loop
  const track = [...companies, ...companies];

  return (
    <section className="py-10 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <p className="text-xs font-sora text-[#0EABE6] uppercase tracking-[0.3em] font-semibold">
          Built for & trusted by
        </p>
      </motion.div>

      {/* Infinite scrolling logo carousel */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 " />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 " />

        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {track.map((company, idx) => (
            <a
              key={idx}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              title={company.name}
              aria-label={company.name}
              className="group flex-shrink-0"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale brightness-200 transition-all duration-500 group-hover:opacity-90 group-hover:grayscale-0 group-hover:brightness-100"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
