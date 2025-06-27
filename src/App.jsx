import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

// Direct default export components
const About = lazy(() => import("./components/About"));
const CareerSummary = lazy(() => import("./components/CareerSummary"));
const Counter = lazy(() => import("./components/Counter"));
const Footer = lazy(() => import("./components/Footer"));
const Heading = lazy(() => import("./components/Heading"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const RecommendationSection = lazy(() => import("./components/Recomendation"));
const StackCard = lazy(() => import("./components/StackCard"));

// Named export components — imported and set as default in .then()
const LayoutGridDemo = lazy(() =>
  import("./components/Gallary").then((module) => ({
    default: module.LayoutGridDemo,
  }))
);
const AnimatedPinDemo = lazy(() =>
  import("./components/Project").then((module) => ({
    default: module.AnimatedPinDemo,
  }))
);
const InfiniteMovingCardsDemo = lazy(() =>
  import("./components/Testomonials").then((module) => ({
    default: module.InfiniteMovingCardsDemo,
  }))
);

function App() {
  return (
    <div className="relative bg-[#0F172A] w-full h-auto overflow-hidden">
      <Helmet>
        <title>Pappu Dey — Full-Stack Developer & React Expert</title>
        <meta
          name="description"
          content="Official portfolio of Pappu Dey, React.js and Full-Stack Software Engineer."
        />
        <meta
          name="keywords"
          content="Pappu Dey, React Developer, Bangladesh, Software Engineer, Web Developer"
        />
        <meta name="author" content="Pappu Dey" />
      </Helmet>

      {/* Gradients */}
      <div className="absolute bottom-44 top-96 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-40 xl:w-[400px]"></div>
      <div className="absolute right-[28%] top-0 hidden h-[200px] w-[200px] rotate-45 bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-20 lg:-top-22 lg:-right-28 lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px] rounded-full z-20"></div>
      <span className="absolute bottom-0 top-[400px] right-1/3 w-[250px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>
      <span className="absolute bottom-0 top-[32%] right-[58%] w-[300px] sm:w-[180px] md:w-[300px] lg:w-[300px] h-[300px] sm:h-[180px] md:h-[300px] lg:h-[300px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>

      {/* Lazy Loaded Layout */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen bg-[#0F172A] text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-4"></div>
          </div>
        }
      >
        {/* Heading */}
        <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
}

export default App;
