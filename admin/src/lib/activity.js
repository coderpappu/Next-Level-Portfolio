import {
  Plus,
  Pencil,
  Trash2,
  ArrowUpDown,
  LogIn,
  Upload,
  ImageOff,
} from "lucide-react";

// Colors from the validated dataviz palette's status set (good/critical) plus
// two categorical slots for the neutral action types — chosen so no action
// type impersonates another, and paired with an icon + label everywhere
// (status/action color is never the only signal, per the palette's own rule).
export const ACTION_META = {
  created: { label: "Created", color: "#0ca30c", Icon: Plus },
  updated: { label: "Updated", color: "#2a78d6", Icon: Pencil },
  deleted: { label: "Deleted", color: "#d03b3b", Icon: Trash2 },
  reordered: { label: "Reordered", color: "#4a3aa7", Icon: ArrowUpDown },
  logged_in: { label: "Logged in", color: "#898781", Icon: LogIn },
  uploaded_media: { label: "Uploaded", color: "#1baf7a", Icon: Upload },
  deleted_media: { label: "Removed", color: "#d03b3b", Icon: ImageOff },
};

export const RESOURCE_LABELS = {
  projects: "Projects",
  awards: "Awards",
  testimonials: "Testimonials",
  experience: "Experience",
  education: "Education",
  services: "Services",
  process_steps: "Process Steps",
  tech_stack_groups: "Tech Stack",
  socials: "Socials",
  known_for: "Known For",
  professional_profiles: "Professional Profiles",
  pages: "Pages (SEO)",
  posts: "Posts",
  settings: "Settings",
  media: "Media",
  auth: "Account",
};

export function resourceLabel(resource) {
  return (
    RESOURCE_LABELS[resource] ||
    resource
      .split(/[_-]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export function relativeTime(iso) {
  const diffSec = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diffSec < 45) return "just now";
  if (diffSec < 3600) return `${Math.round(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.round(diffSec / 3600)}h ago`;
  if (diffSec < 2592000) return `${Math.round(diffSec / 86400)}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
