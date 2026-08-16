import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Award,
  MessageSquareQuote,
  Briefcase,
  GraduationCap,
  Wrench,
  ListChecks,
  Layers,
  Share2,
  Star,
  Users,
  FileText,
  Newspaper,
  Settings,
  Image as ImageIcon,
  Activity,
  LogOut,
} from "lucide-react";
import { useAuth } from "../auth/AuthContext.jsx";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
  }`;

function NavGroup({ title, children }) {
  return (
    <div className="mb-4">
      <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{title}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

export default function Sidebar() {
  const { email, logout } = useAuth();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-800 px-4 py-4">
        <p className="text-sm font-semibold">Portfolio Admin</p>
        {email && <p className="truncate text-xs text-slate-400">{email}</p>}
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <NavGroup title="Overview">
          <NavLink to="/" end className={linkClass}>
            <LayoutDashboard size={16} /> Dashboard
          </NavLink>
        </NavGroup>

        <NavGroup title="Content">
          <NavLink to="/projects" className={linkClass}>
            <FolderKanban size={16} /> Projects
          </NavLink>
          <NavLink to="/awards" className={linkClass}>
            <Award size={16} /> Awards
          </NavLink>
          <NavLink to="/testimonials" className={linkClass}>
            <MessageSquareQuote size={16} /> Testimonials
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            <Briefcase size={16} /> Experience
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            <GraduationCap size={16} /> Education
          </NavLink>
        </NavGroup>

        <NavGroup title="Site">
          <NavLink to="/services" className={linkClass}>
            <Wrench size={16} /> Services
          </NavLink>
          <NavLink to="/process-steps" className={linkClass}>
            <ListChecks size={16} /> Process Steps
          </NavLink>
          <NavLink to="/tech-stack" className={linkClass}>
            <Layers size={16} /> Tech Stack
          </NavLink>
          <NavLink to="/socials" className={linkClass}>
            <Share2 size={16} /> Socials
          </NavLink>
          <NavLink to="/known-for" className={linkClass}>
            <Star size={16} /> Known For
          </NavLink>
          <NavLink to="/professional-profiles" className={linkClass}>
            <Users size={16} /> Professional Profiles
          </NavLink>
          <NavLink to="/pages" className={linkClass}>
            <FileText size={16} /> Pages (SEO)
          </NavLink>
        </NavGroup>

        <NavGroup title="Blog">
          <NavLink to="/posts" className={linkClass}>
            <Newspaper size={16} /> Posts
          </NavLink>
        </NavGroup>

        <NavGroup title="System">
          <NavLink to="/settings" className={linkClass}>
            <Settings size={16} /> Settings
          </NavLink>
          <NavLink to="/media" className={linkClass}>
            <ImageIcon size={16} /> Media
          </NavLink>
          <NavLink to="/activity" className={linkClass}>
            <Activity size={16} /> Activity Log
          </NavLink>
        </NavGroup>
      </nav>

      <div className="border-t border-slate-800 p-3">
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white"
        >
          <LogOut size={16} /> Log out
        </button>
      </div>
    </aside>
  );
}
