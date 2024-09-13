import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading";
import Counter from "../components/Counter";
import About from "../components/About";
import CareerSummary from "../components/CareerSummary";
const Layout = () => {
  return (
    <div>
      <Heading />
      <div className="xl:wrapper-container">
        <HeroSection />
        <Counter />
        <About />
        <CareerSummary />
      </div>
    </div>
  );
};

export default Layout;
