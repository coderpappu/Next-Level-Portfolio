import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";

/* ------------------------------ white edition ----------------------------- */
import WhiteLayout from "./white/WhiteLayout.jsx";
import About from "./white/pages/About.jsx";
import Awards from "./white/pages/Awards.jsx";
import Blog from "./white/pages/Blog.jsx";
import BlogPost from "./white/pages/BlogPost.jsx";
import Contact from "./white/pages/Contact.jsx";
import Experience from "./white/pages/Experience.jsx";
import Home from "./white/pages/Home.jsx";
import Projects from "./white/pages/Projects.jsx";
import Resume from "./white/pages/Resume.jsx";
import ServiceDetail from "./white/pages/ServiceDetail.jsx";
import Services from "./white/pages/Services.jsx";
import Testimonials from "./white/pages/Testimonials.jsx";

/* ---------------- classic dark edition + standalone pages ----------------- */
const ClassicApp = lazy(() => import("./App.jsx"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails.jsx"));
const ProScannerPage = lazy(() => import("./pages/ScanfApp.jsx"));

const withSuspense = (node) => (
  <Suspense fallback={<div className="min-h-screen bg-[#0F172A]" />}>
    {node}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <WhiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "experience", element: <Experience /> },
      { path: "resume", element: <Resume /> },
      { path: "awards", element: <Awards /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  // Previous dark portfolio, preserved and reachable.
  { path: "/classic", element: withSuspense(<ClassicApp />) },

  { path: "/project/:id", element: withSuspense(<ProjectDetails />) },
  { path: "/scanf-app-download", element: withSuspense(<ProScannerPage />) },

  { path: "*", element: <Navigate to="/" replace /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
