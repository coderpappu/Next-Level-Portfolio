import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading";
const Layout = () => {
  return (
    <div>
      <Heading />
      <div className="xl:wrapper-container">
        <HeroSection />
      </div>
    </div>
  );
};

export default Layout;
