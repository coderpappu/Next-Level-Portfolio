import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading";
import Counter from "../components/Counter";
import About from "../components/About";
const Layout = () => {
  return (
    <div>
      <Heading />
      <div className="xl:wrapper-container">
        <HeroSection />
        <Counter />
        <About />
      </div>
    </div>
  );
};

export default Layout;
