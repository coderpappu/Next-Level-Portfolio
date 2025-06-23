import About from "../components/About";
import CareerSummary from "../components/CareerSummary";
import Counter from "../components/Counter";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import { AnimatedPinDemo } from "../components/Project";

import StackCard from "../components/StackCard";
import { InfiniteMovingCardsDemo } from "../components/Testomonials";

const Layout = () => {
  return (
    <div>
      <Heading />
      <div className="xl:wrapper-container">
        <HeroSection />
        <Counter />
        <About />
        <CareerSummary />

        <StackCard />

        <AnimatedPinDemo />
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Layout;
