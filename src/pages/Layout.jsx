import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading";
import Counter from "../components/Counter";
const Layout = () => {
  return (
    <div>
      <Heading />
      <div className="xl:wrapper-container">
        <HeroSection />
        <Counter />
      </div>
    </div>
  );
};

export default Layout;
