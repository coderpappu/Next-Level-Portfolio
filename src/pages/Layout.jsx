import { Suspense, lazy } from "react";

// Direct default export components
const About = lazy(() => import("../components/About"));
const CareerSummary = lazy(() => import("../components/CareerSummary"));
const Counter = lazy(() => import("../components/Counter"));
const Footer = lazy(() => import("../components/Footer"));
const Heading = lazy(() => import("../components/Heading"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const RecommendationSection = lazy(() => import("../components/Recomendation"));
const StackCard = lazy(() => import("../components/StackCard"));

// Named export components — imported and set as default in .then()
const LayoutGridDemo = lazy(() =>
  import("../components/Gallary").then((module) => ({
    default: module.LayoutGridDemo,
  }))
);
const AnimatedPinDemo = lazy(() =>
  import("../components/Project").then((module) => ({
    default: module.AnimatedPinDemo,
  }))
);
const InfiniteMovingCardsDemo = lazy(() =>
  import("../components/Testomonials").then((module) => ({
    default: module.InfiniteMovingCardsDemo,
  }))
);

const Layout = () => {
  return (
    <div>
      {/* Heading */}
      <Suspense
        fallback={
          <div className="text-white text-center mt-10">Loading Heading...</div>
        }
      >
        <Heading />
      </Suspense>

      <div className="xl:wrapper-container">
        {/* Hero */}
        <Suspense fallback={null}>
          <HeroSection />
        </Suspense>

        {/* Counter */}
        <Suspense fallback={null}>
          <Counter />
        </Suspense>

        {/* About */}
        <Suspense fallback={null}>
          <About />
        </Suspense>

        {/* Recommendation */}
        <Suspense fallback={null}>
          <RecommendationSection />
        </Suspense>

        {/* Career Summary */}
        <Suspense fallback={null}>
          <CareerSummary />
        </Suspense>

        {/* Stack Card */}
        <Suspense fallback={null}>
          <StackCard />
        </Suspense>

        {/* Projects */}
        <Suspense fallback={null}>
          <AnimatedPinDemo />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={null}>
          <InfiniteMovingCardsDemo />
        </Suspense>

        {/* Gallery */}
        <Suspense fallback={null}>
          <LayoutGridDemo />
        </Suspense>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
