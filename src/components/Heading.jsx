import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const menuMap = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "Projects", section: "projects" },
  { label: "Resume", section: "resume" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = menuMap.map((m) => m.section);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* ── Original Default Navbar (unchanged) ── */}
      <div
        className={`w-full py-5 font-poppins z-[9998] transition-all duration-500 border-b border-white/[0.08] ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="xl:wrapper-container lg:px-0 px-6 flex flex-wrap items-center justify-between text-[#e0e0e0]">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Pappu Dey" className="w-8 h-8" />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 font-semibold text-base">
              {menuMap.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="bg-transparent border-none outline-none cursor-pointer text-inherit hover:text-[#0EABE6] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="ml-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="buttonStyle px-5 py-2 text-white text-sm font-semibold rounded cursor-pointer"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white focus:outline-none bg-transparent border-none cursor-pointer"
            onClick={toggleMenu}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown — original style */}
        <div className={`${isOpen && !isScrolled ? "block" : "hidden"} md:hidden py-4 px-6`}>
          <ul className="space-y-3 text-center">
            {menuMap.map((item, idx) => (
              <li key={idx}>
                <button onClick={() => scrollToSection(item.section)}
                  className="block py-2 w-full text-[#ddd] hover:text-[#0EABE6] bg-transparent border-none cursor-pointer transition-colors duration-300 font-semibold text-sm">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => scrollToSection("contact")}
                className="buttonStyle px-6 py-2 text-white text-sm font-semibold rounded cursor-pointer">
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Floating Glass Navbar (on scroll) — BIGGER SIZE ── */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[9999] w-[92%] max-w-[900px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/50"
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center cursor-pointer bg-transparent border-none shrink-0"
          >
            <img src={Logo} alt="Pappu Dey" className="w-8 h-8" />
          </button>

          {/* Desktop nav items */}
          <ul className="hidden md:flex items-center gap-1">
            {menuMap.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className={`px-4 py-2 rounded-xl text-sm font-sora font-medium transition-all duration-300 cursor-pointer border-none outline-none ${
                    activeSection === item.section
                      ? "bg-[#0EABE6]/15 text-[#0EABE6]"
                      : "bg-transparent text-[#ffffffb0] hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#0ea5ea] to-[#0dd1d1] text-white text-sm font-sora font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0EABE6]/25 transition-all duration-300 cursor-pointer border-none whitespace-nowrap shrink-0"
          >
            Book a Call
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none bg-transparent border-none cursor-pointer"
            onClick={toggleMenu}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown for floating nav */}
        <div
          className={`${isOpen && isScrolled ? "block" : "hidden"} md:hidden mt-2 rounded-2xl border border-white/[0.1] p-5 shadow-2xl shadow-black/50`}
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          <ul className="space-y-2">
            {menuMap.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-sora font-medium transition-all duration-300 cursor-pointer border-none ${
                    activeSection === item.section
                      ? "bg-[#0EABE6]/15 text-[#0EABE6]"
                      : "text-[#ffffffb0] hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#0ea5ea] to-[#0dd1d1] text-white text-sm font-sora font-semibold rounded-xl cursor-pointer border-none"
              >
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Heading;
