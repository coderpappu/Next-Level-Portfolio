import About from "../components/About";
import CareerSummary from "../components/CareerSummary";
import Counter from "../components/Counter";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import StackCard from "../components/StackCard";
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
      </div>
    </div>
  );
};

export default Layout;
