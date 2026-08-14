import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label1: "Years of", label2: "Experience" },
  { value: 25, suffix: "+", label1: "Projects", label2: "Completed" },
  { value: 18, suffix: "+", label1: "Happy", label2: "Clients" },
  { value: 4, suffix: "+", label1: "SaaS", label2: "Products" },
];

const AnimatedNumber = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {String(count).padStart(2, "0")}
      {suffix}
    </span>
  );
};

const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 0.7, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full py-5 flex flex-wrap justify-center items-center"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
          className="flex-col flex sm:flex-row flex-wrap justify-center lg:justify-start text-center lg:text-left items-center sm:text-left w-1/2 md:w-[25%] mb-10 sm:mb-4 px-4"
        >
          <h2 className="text-5xl sm:text-6xl text-white font-poppins font-bold">
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              isInView={isInView}
            />
          </h2>
          <div className="sm:ml-3">
            <h2 className="text-base sm:text-lg text-white font-sora">
              {stat.label1}
            </h2>
            <h2 className="text-base sm:text-lg text-white font-sora">
              {stat.label2}
            </h2>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Counter;
