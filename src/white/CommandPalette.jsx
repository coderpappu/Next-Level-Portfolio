import {
  ArrowUpRight,
  Calendar,
  Check,
  Copy,
  CornerDownLeft,
  FileText,
  Github,
  Linkedin,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images, profile, projects } from "./data";
import { useCvUrl } from "./hooks";

const PAGES = [
  { label: "Home", to: "/", keywords: "start index hero" },
  { label: "About", to: "/about", keywords: "bio biography story journey" },
  { label: "Projects", to: "/projects", keywords: "work portfolio case study" },
  { label: "Services", to: "/services", keywords: "hire capabilities process" },
  { label: "Experience", to: "/experience", keywords: "resume cv jobs education" },
  { label: "Awards", to: "/awards", keywords: "recognition icpc certificate" },
  { label: "Blog", to: "/blog", keywords: "articles writing posts notes" },
  { label: "Testimonials", to: "/testimonials", keywords: "reviews clients" },
  { label: "Résumé", to: "/resume", keywords: "cv print pdf one page" },
  { label: "Contact", to: "/contact", keywords: "email hire message call" },
];

const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const CommandPalette = ({ open, onClose, theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const cvUrl = useCvUrl(images.cv);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const items = useMemo(() => {
    const go = (to) => () => navigate(to);

    const pageItems = PAGES.map((p) => ({
      id: `page:${p.to}`,
      group: "Pages",
      label: p.label,
      keywords: p.keywords,
      icon: ArrowUpRight,
      run: go(p.to),
    }));

    const projectItems = projects.map((p) => ({
      id: `project:${p.id}`,
      group: "Projects",
      label: p.name,
      hint: `${p.category} · ${p.year}`,
      keywords: `${p.stack.join(" ")} ${p.category}`,
      icon: ArrowUpRight,
      run: () => window.open(p.live, "_blank", "noopener,noreferrer"),
    }));

    const actionItems = [
      {
        id: "action:copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        keywords: "mail contact clipboard",
        icon: copied ? Check : Copy,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            window.location.href = `mailto:${profile.email}`;
          }
        },
      },
      {
        id: "action:cv",
        group: "Actions",
        label: "Download CV",
        hint: "PDF",
        keywords: "resume curriculum vitae pdf",
        icon: FileText,
        run: () => {
          const a = document.createElement("a");
          a.href = cvUrl;
          a.download = "Pappu_Dey_CV.pdf";
          a.click();
        },
      },
      {
        id: "action:call",
        group: "Actions",
        label: "Book a discovery call",
        hint: "15 min · Calendly",
        keywords: "meeting schedule hire",
        icon: Calendar,
        run: () =>
          window.open(profile.calendly, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action:theme",
        group: "Actions",
        label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        keywords: "dark light mode appearance toggle",
        icon: theme === "dark" ? Sun : Moon,
        keepOpen: true,
        run: onToggleTheme,
      },
      {
        id: "action:github",
        group: "Actions",
        label: "Open GitHub profile",
        keywords: "code repos source",
        icon: Github,
        run: () => window.open(profile.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action:linkedin",
        group: "Actions",
        label: "Open LinkedIn profile",
        keywords: "network hire social",
        icon: Linkedin,
        run: () =>
          window.open(profile.linkedin, "_blank", "noopener,noreferrer"),
      },
    ];

    return [...pageItems, ...projectItems, ...actionItems];
  }, [navigate, theme, onToggleTheme, copied, cvUrl]);

  const results = useMemo(() => {
    const q = normalise(query);
    if (!q) return items;
    return items.filter((item) =>
      normalise(`${item.label} ${item.hint || ""} ${item.keywords || ""}`).includes(
        q,
      ),
    );
  }, [items, query]);

  const groups = useMemo(() => {
    const order = ["Pages", "Projects", "Actions"];
    const map = new Map();
    results.forEach((item) => {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group).push(item);
    });
    return order
      .filter((g) => map.has(g))
      .map((g) => ({ group: g, items: map.get(g) }));
  }, [results]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const id = window.requestAnimationFrame(() => inputRef.current?.focus());
      return () => window.cancelAnimationFrame(id);
    }
    return undefined;
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return undefined;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [active, results.length]);

  const runItem = useCallback(
    (item) => {
      if (!item) return;
      item.run();
      if (!item.keepOpen) onClose();
    },
    [onClose],
  );

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      runItem(results[active]);
    }
  };

  if (!open) return null;

  let index = -1;

  return (
    <div
      className="w-fade-in fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      style={{ backgroundColor: "var(--w-overlay)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onKeyDown={onKeyDown}
        className="w-palette w-full max-w-xl overflow-hidden rounded-lg border border-[color:var(--w-border)] shadow-2xl"
        style={{ backgroundColor: "var(--w-elevated)" }}
      >
        <div className="flex items-center gap-2 border-b border-[color:var(--w-border)] px-4">
          <Search
            className="h-4 w-4 shrink-0 text-[color:var(--w-muted)]"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, actions…"
            aria-label="Search pages, projects and actions"
            className="w-full border-none bg-transparent py-3.5 text-sm text-[color:var(--w-heading)] outline-none placeholder:text-[color:var(--w-sep)]"
          />
          <kbd className="w-chip-secondary shrink-0 !text-[10px]">esc</kbd>
        </div>

        <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
          {groups.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-[color:var(--w-muted)]">
              No matches for “{query}”
            </p>
          ) : (
            groups.map(({ group, items: groupItems }) => (
              <div key={group} className="mb-1">
                <p className="px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--w-muted)]">
                  {group}
                </p>
                {groupItems.map((item) => {
                  index += 1;
                  const i = index;
                  const Icon = item.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-active={isActive}
                      onMouseMove={() => setActive(i)}
                      onClick={() => runItem(item)}
                      className={`flex w-full cursor-pointer items-center gap-3 border-none px-4 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-[color:var(--w-hover)] text-[color:var(--w-heading)]"
                          : "bg-transparent text-[color:var(--w-text)]"
                      }`}
                    >
                      <Icon
                        className="h-3.5 w-3.5 shrink-0 text-[color:var(--w-heading)]"
                        aria-hidden="true"
                      />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.hint ? (
                        <span className="hidden shrink-0 text-xs text-[color:var(--w-muted)] sm:block">
                          {item.hint}
                        </span>
                      ) : null}
                      {isActive ? (
                        <CornerDownLeft
                          className="h-3 w-3 shrink-0 text-[color:var(--w-muted)]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-[color:var(--w-border)] px-4 py-2 text-[11px] text-[color:var(--w-muted)]">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
          <span className="ml-auto">
            {results.length} result{results.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
