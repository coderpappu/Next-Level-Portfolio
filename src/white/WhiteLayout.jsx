import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import CommandPalette from "./CommandPalette";
import { profile } from "./data";
import { useTheme } from "./hooks";
import { ReadingProgress } from "./motion";
import "./white.css";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Awards", href: "/awards" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const isActive = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

const isTypingTarget = (el) =>
  !!el &&
  (el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT" ||
    el.isContentEditable);

const WhiteLayout = () => {
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.documentElement.classList.add("white-page");
    document.body.classList.add("white-page");
    return () => {
      document.documentElement.classList.remove("white-page", "white-dark");
      document.body.classList.remove("white-page", "white-dark");
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // ⌘K / Ctrl+K anywhere; "/" when not already typing.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === "/" && !isTypingTarget(document.activeElement)) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  return (
    <div className="white-root min-h-screen" data-theme={theme}>
      <ReadingProgress />

      <main className="mx-auto max-w-screen-lg md:px-4">
        {/* ------------------------------- nav ------------------------------ */}
        <nav
          className="sticky top-0 z-50 md:backdrop-blur-sm"
          style={{ backgroundColor: "var(--w-bg)" }}
        >
          <div className="flex h-14 items-center justify-between">
            <Link
              to="/"
              aria-label={`Go to ${profile.name} home page`}
              className="mx-4 md:mx-0"
            >
              {/* The mark is a hairline outline on transparency: it disappears
                  if drawn dark-on-white at 36px, and a circular object-cover
                  crop lops off its edges. Forcing it to a solid fill inside a
                  contrasting disc keeps the whole mark visible. */}
              <span className="w-logo-disc flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--w-heading)]">
                <img
                  src={Logo}
                  alt=""
                  width={22}
                  height={22}
                  className="w-logo-mark h-[22px] w-[22px] object-contain"
                />
              </span>
            </Link>

            <div className="flex items-center gap-x-3">
              <ul className="hidden items-center md:flex md:gap-x-4">
                {NAV.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        aria-current={active ? "page" : undefined}
                        className={
                          active
                            ? "w-chip !px-3 !py-1"
                            : "text-sm text-[color:var(--w-muted)] transition-colors hover:text-[color:var(--w-strong)]"
                        }
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden items-center gap-x-2 md:flex">
                <span
                  className="h-4 w-px"
                  style={{ backgroundColor: "var(--w-border)" }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  aria-label="Open command palette"
                  title="Search — ⌘K"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[color:var(--w-border)] bg-transparent px-2 py-1.5 text-xs text-[color:var(--w-muted)] transition-colors hover:bg-[color:var(--w-hover)]"
                >
                  <Search className="h-3.5 w-3.5" aria-hidden="true" />
                  <kbd className="font-[inherit]">⌘K</kbd>
                </button>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border border-[color:var(--w-border)] bg-transparent p-2 text-[color:var(--w-icon)] transition-colors hover:bg-[color:var(--w-hover)]"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-x-1 md:hidden">
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  aria-label="Open command palette"
                  className="cursor-pointer border-none bg-transparent p-2 text-[color:var(--w-icon)]"
                >
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                  className="cursor-pointer border-none bg-transparent p-2 text-[color:var(--w-icon)]"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  className="mr-2 cursor-pointer border-none bg-transparent p-2 text-[color:var(--w-icon)]"
                >
                  <span className="sr-only">
                    {open ? "Close menu" : "Open menu"}
                  </span>
                  {open ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              open ? "max-h-screen" : "max-h-0"
            }`}
            style={{ backgroundColor: "var(--w-bg)" }}
          >
            <ul className="space-y-1 px-4 pb-4 pt-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={
                      isActive(pathname, item.href)
                        ? "w-chip !px-3 !py-1"
                        : "inline-block px-3 py-2 text-sm"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ------------------------------ card ------------------------------ */}
        <section className="w-card mx-auto my-2 w-full space-y-8 border-b border-t border-[color:var(--w-border)] px-6 py-6 md:my-8 md:rounded-lg md:border md:px-12">
          {/* Re-keying on pathname replays the entrance animation per page. */}
          <div key={pathname} className="w-page-in space-y-8">
            <Outlet />
          </div>
        </section>

        {/* ----------------------------- footer ----------------------------- */}
        <footer>
          <div className="mx-auto max-w-screen-md space-y-2 px-4 py-6">
            <p className="text-center text-sm text-[color:var(--w-muted)]">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="w-no-print text-center text-xs text-[color:var(--w-muted)]">
              Press{" "}
              <kbd className="w-chip-secondary !text-[10px]">⌘K</kbd> or{" "}
              <kbd className="w-chip-secondary !text-[10px]">/</kbd> to search
            </p>
          </div>
        </footer>
      </main>

      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        theme={theme}
        onToggleTheme={toggle}
      />
    </div>
  );
};

export default WhiteLayout;
