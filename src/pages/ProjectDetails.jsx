import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Mock data for projects — in a real app this would come from an API/context
const projectsData = {
  "e-clearance": {
    name: "E-Clearance System",
    subtitle: "Automated student clearance platform for universities",
    description: "A comprehensive SaaS platform built to digitize the entire student graduation and clearance workflow. Reduces processing time from 2 weeks to 2 days.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overview: "The E-Clearance system solves a critical bottleneck in higher education institutions: the manual, paper-based workflow required for graduating students to clear their dues across multiple departments (Library, Finance, Labs, etc.). This system automates the entire process.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    live: "http://clearance.codexdevware.com/",
    github: "https://github.com/coderpappu"
  },
  "mini-dokan": {
    name: "Mini Dokan",
    subtitle: "Multi-vendor digital marketplace",
    description: "A robust e-commerce and multi-vendor platform allowing independent sellers to manage shops, track inventory, and process orders.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    overview: "Built for scale, Mini Dokan provides a seamless vendor dashboard and customer storefront. It handles complex multi-cart checkouts, vendor payouts, and dynamic product catalogs.",
    tech: ["WordPress", "PHP", "MySQL", "WooCommerce Customization"],
    live: "https://eshop.codexdevware.com/",
    github: "https://github.com/coderpappu"
  },
  "react-dashboard": {
    name: "Nexus Dashboard",
    subtitle: "Enterprise data visualization and reporting tool",
    description: "A responsive admin dashboard featuring real-time data visualization, dark/light mode, and complex data tables.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    overview: "Designed for internal enterprise teams, this dashboard aggregates data from multiple sources to provide actionable analytics. Includes role-based access control and exportable reporting features.",
    tech: ["React", "Material UI", "Recharts", "Redux"],
    live: "https://react-dashboard-nine-tawny.vercel.app/",
    github: "https://github.com/coderpappu"
  },
  "react-lms": {
    name: "LMS System",
    subtitle: "Comprehensive Learning Management Platform",
    description: "An interactive e-learning platform supporting course video streaming, quiz creation, student progress tracking, and secure payments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    overview: "The LMS solves course delivery for independent creators. Instructors can drag-and-drop course curriculums, while students get a distraction-free learning environment with progress retention.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    live: "https://react-lms-nine.vercel.app/",
    github: "https://github.com/coderpappu"
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-white font-sora">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#0EABE6] hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sora">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full p-6 bg-[#0F172A]/80 backdrop-blur-md z-50 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-[#ffffffa0] hover:text-white transition-colors cursor-pointer group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-semibold px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
              GitHub Repo
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#0ea5ea] to-[#0dd1d1] text-white hover:opacity-90 transition-opacity">
              Live Preview
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0EABE6] to-[#0dd1d1]">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-[#ffffff80] font-light max-w-2xl mx-auto line-clamp-2">
            {project.subtitle}
          </p>
        </header>

        {/* Hero Image placeholder (Using Unsplash for now as requested) */}
        <div className="w-full h-auto aspect-video rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-2xl relative">
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#0EABE6]"></span> Project Overview
              </h2>
              <p className="text-[#ffffffa0] leading-relaxed text-lg">
                {project.overview}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#0EABE6]"></span> The Challenge
              </h2>
              <p className="text-[#ffffffa0] leading-relaxed text-lg">
                Building an ecosystem that is both highly performant and user-friendly for non-technical users while managing complex technical state on the backend. This required a strict architectural approach separating concerns and optimizing database queries.
              </p>
            </section>
          </div>

          {/* Sidebar Tech Stack */}
          <div className="md:col-span-1 space-y-8">
            <div className="p-6 rounded-2xl bg-[#172033] border border-white/5">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#0a0f1a] border border-white/10 rounded-lg text-sm text-[#0EABE6] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#172033] border border-white/5">
              <h3 className="text-xl font-bold mb-4">Role</h3>
              <ul className="text-[#ffffff80] space-y-2 text-sm list-disc pl-4">
                <li>Lead Full-Stack Developer</li>
                <li>System Architecture</li>
                <li>Database Design</li>
                <li>UI/UX Implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action bottom */}
        <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-[#0EABE6]/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to build something similar?</h2>
          <p className="text-[#ffffff80] mb-8 max-w-xl mx-auto">
            Let's discuss your project goals and how we can architect a scalable solution together.
          </p>
          <a href="mailto:pappu@example.com" className="inline-block px-8 py-3 bg-[#0EABE6] text-white font-bold rounded-xl hover:bg-[#0bc0ff] transition-colors">
            Start a Conversation
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
