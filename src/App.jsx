import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

// Direct default export components
const About = lazy(() => import("./components/About"));
const BackToTop = lazy(() => import("./components/BackToTop"));
const CareerSummary = lazy(() => import("./components/CareerSummary"));
const Counter = lazy(() => import("./components/Counter"));
const FloatingCTA = lazy(() => import("./components/FloatingCTA"));
const Footer = lazy(() => import("./components/Footer"));
const Heading = lazy(() => import("./components/Heading"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const RecommendationSection = lazy(() => import("./components/Recomendation"));
const EngineeringProcess = lazy(
  () => import("./components/EngineeringProcess"),
);
const GitHubActivity = lazy(() => import("./components/GitHubActivity"));
const Preloader = lazy(() => import("./components/Preloader"));
const Services = lazy(() => import("./components/Services"));
const StackCard = lazy(() => import("./components/StackCard"));
const TrustedBy = lazy(() => import("./components/TrustedBy"));
const WorkWithMe = lazy(() => import("./components/WorkWithMe"));

// Named export components
const LayoutGridDemo = lazy(() =>
  import("./components/Gallary").then((module) => ({
    default: module.LayoutGridDemo,
  })),
);
const AnimatedPinDemo = lazy(() =>
  import("./components/Project").then((module) => ({
    default: module.AnimatedPinDemo,
  })),
);
const InfiniteMovingCardsDemo = lazy(() =>
  import("./components/Testomonials").then((module) => ({
    default: module.InfiniteMovingCardsDemo,
  })),
);

function App() {
  return (
    <div className="relative bg-[#0F172A] w-full h-auto overflow-hidden dark">
      <Helmet>
        <title>Pappu Dey — Software Engineer & SaaS Builder</title>
        <meta
          name="description"
          content="Pappu Dey is a software engineer building scalable SaaS applications, AI automation systems, and modern web solutions with React, Node.js, and Laravel."
        />
        <meta
          name="keywords"
          content="Pappu Dey, Software Engineer, SaaS Developer, React Developer Bangladesh, Node.js Developer, Laravel Developer, Full Stack Developer, AI Automation"
        />
        <meta name="author" content="Pappu Dey" />
      </Helmet>

      {/* Background Gradients */}
      <div className="absolute bottom-44 top-96 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-40 xl:w-[400px]"></div>
      <div className="absolute right-[28%] top-0 hidden h-[200px] w-[200px] rotate-45 bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-20 lg:-top-22 lg:-right-28 lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px] rounded-full z-20"></div>
      <span className="absolute bottom-0 top-[400px] right-1/3 w-[250px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>
      <span className="absolute bottom-0 top-[32%] right-[58%] w-[300px] sm:w-[180px] md:w-[300px] lg:w-[300px] h-[300px] sm:h-[180px] md:h-[300px] lg:h-[300px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>

      {/* Preloader */}
      <Suspense fallback={null}>
        <Preloader />
      </Suspense>

      {/* Lazy Loaded Layout */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen bg-[#0F172A] text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-4"></div>
          </div>
        }
      >
        {/* Navigation */}
        <Suspense fallback={null}>
          <Heading />
        </Suspense>

        <div className="xl:wrapper-container">
          {/* 1. Hero */}
          <Suspense fallback={null}>
            <HeroSection />
          </Suspense>

          {/* 2. Social Proof Bar */}
          <Suspense fallback={null}>
            <Counter />
          </Suspense>

          {/* 3. Services */}
          <Suspense fallback={null}>
            <Services />
          </Suspense>
          {/* Trusted By */}
          <Suspense fallback={null}>
            <TrustedBy />
          </Suspense>

          {/* 4. Featured Projects */}
          <Suspense fallback={null}>
            <AnimatedPinDemo />
          </Suspense>

          {/* 6. About */}
          <Suspense fallback={null}>
            <About />
          </Suspense>

          {/* 7. Engineering Process */}
          <Suspense fallback={null}>
            <EngineeringProcess />
          </Suspense>

          {/* 6. How We Work Together */}
          {/* <Suspense fallback={null}>
            <WorkWithMe />
          </Suspense> */}

          {/* 9. Technology Stack */}
          <Suspense fallback={null}>
            <StackCard />
          </Suspense>

          {/* 10. GitHub & Open Source */}

          {/* 11. Experience & Education */}
          <Suspense fallback={null}>
            <CareerSummary />
          </Suspense>

          {/* 12. Recognition & Achievements */}
          <Suspense fallback={null}>
            <RecommendationSection />
          </Suspense>
          <Suspense fallback={null}>
            <GitHubActivity />
          </Suspense>

          {/* 10. Testimonials */}
          <Suspense fallback={null}>
            <InfiniteMovingCardsDemo />
          </Suspense>

          {/* 11. Gallery */}
          <Suspense fallback={null}>
            <LayoutGridDemo />
          </Suspense>

          {/* 12. Contact & Footer */}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>

        {/* Floating CTA */}
        <Suspense fallback={null}>
          <FloatingCTA />
        </Suspense>

        {/* Back to Top */}
        <Suspense fallback={null}>
          <BackToTop />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
