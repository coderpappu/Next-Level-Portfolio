import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
        >
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5ea] to-[#0dd1d1] text-white rounded-full font-sora font-semibold shadow-lg shadow-[#0EABE6]/25 hover:shadow-[#0EABE6]/40 hover:scale-105 transition-all duration-300"
          >
            <FaCalendarAlt className="text-sm" />
            <span className="hidden sm:inline">Book a Free Call →</span>
            <span className="sm:hidden">Book Call →</span>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="w-8 h-8 rounded-full bg-[#172442] border border-slate-600/30 text-slate-400 hover:text-white flex items-center justify-center transition-colors duration-300"
          >
            <FaTimes className="text-xs" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
