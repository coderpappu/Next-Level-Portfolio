import { useState } from "react";
import Logo from "../assets/logo.png";

const menuMap = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "Work", section: "work" },
  { label: "Resume", section: "resume" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="border-b border-[#506b860f] py-5 font-poppins  w-full bg-[#0F172A] z-50">
      <div className="xl:wrapper-container lg:px-0 px-6 flex flex-wrap items-center justify-between text-[#e0e0e0]">
        {/* Logo */}
        <div>
          <img src={Logo} alt="pappudey Logo" className="w-8 h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8 font-semibold">
            {menuMap.map((item, idx) => (
              <li key={idx} className="relative group">
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="relative group bg-transparent border-none outline-none cursor-pointer text-inherit"
                >
                  {item.label}
                  <span className="top-6 absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#0F172A] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-in-out"></span>
                </button>
              </li>
            ))}
          </ul>
          <div className="w-36 text-center">
            <a
              href="https://www.linkedin.com/in/coderpappu/"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonStyle px-4 inline-block"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#0F172A] py-5 px-8`}
      >
        <ul className="space-y-4 text-center font-semibold">
          {menuMap.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => scrollToSection(item.section)}
                className="block py-2 hover:text-[#38BDF8] text-[#ddd] w-full bg-transparent border-none outline-none cursor-pointer text-inherit"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <a
            href="https://www.linkedin.com/in/coderpappu/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-violet-950 via-violet-900 to-violet-950 px-4 inline-block"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heading;
