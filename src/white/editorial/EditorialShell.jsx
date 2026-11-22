"use client";

/* ---------------------------------------------------------------------------
   Site shell (every page): nav, mobile drawer, skip link, search palette,
   theme toggle and footer. The theme is set on <html> by an inline script
   in the root layout before first paint; this component only reads and
   flips it, so the server-rendered HTML never depends on it.
   --------------------------------------------------------------------------- */

import { Menu, Moon, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { profile } from "../data";
import CommandPalette from "./CommandPalette";
import { Roll } from "./motion";
import { useMotionReady } from "./useMotion";

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Awards", href: "/awards" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ICON = { width: 16, height: 16, strokeWidth: 1.5, "aria-hidden": true };
const THEME_KEY = "pd-theme";

const isActive = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

const isTypingTarget = (el) =>
  !!el &&
  (el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT" ||
    el.isContentEditable);

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("white-dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#ffffff");
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* storage unavailable */
  }
}

export default function EditorialShell({ children }) {
  const pathname = usePathname() || "/";
  const ready = useMotionReady();
  const headerRef = useRef(null);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  /* Read the theme the pre-paint script chose. */
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  /* Close the drawer and return to the top on every navigation. */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* White glass with a hairline once the page moves. Slides away scrolling
     down past 60% of the viewport and returns on the way up. Never hides
     while it holds focus. */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setSolid(y > 8);
      if (!reduced && Math.abs(y - last) > 6) {
        const focused = headerRef.current?.matches(":focus-within");
        setHidden(y > last && y > window.innerHeight * 0.6 && !focused);
        last = y;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ⌘K / Ctrl+K anywhere; "/" when not already typing. */
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

  /* Drawer: Escape closes it, and the page behind does not scroll. */
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  const headerClass = [
    "et-nav",
    solid && !menuOpen && "is-solid",
    hidden && !menuOpen && "is-hidden",
    menuOpen && "is-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={ready ? "et is-loaded" : "et"}>
      <a href="#main" className="et-skip btn btn--primary">
        Skip to content
      </a>

      {/* --------------------------------- nav -------------------------------- */}
      <header ref={headerRef} className={headerClass}>
        <div className="et-container et-nav__inner">
          <Link href="/" aria-label={`${profile.name}, home page`} className="et-logo">
            <img src={logo.src} alt="" width={20} height={20} />
            <span>{profile.name}</span>
          </Link>

          <nav aria-label="Primary" className="et-nav__right">
            <ul className="et-nav__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="et-nav__link"
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    <Roll>{item.label}</Roll>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="et-nav__utils">
              <button
                type="button"
                className="icon-btn"
                onClick={() => setPaletteOpen(true)}
                aria-label="Open search"
                title="Search — ⌘K"
              >
                <Search {...ICON} />
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label="Dark theme"
                aria-pressed={theme === "dark"}
              >
                <Moon {...ICON} className="et-theme-moon" />
                <Sun {...ICON} className="et-theme-sun" />
              </button>
              <button
                type="button"
                className="icon-btn et-nav__menu"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                {menuOpen ? <X {...ICON} /> : <Menu {...ICON} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ------------------------------- drawer ------------------------------- */}
      <div id="mobile-menu" className={menuOpen ? "et-drawer is-open" : "et-drawer"}>
        <ul className="et-drawer__links">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                tabIndex={menuOpen ? undefined : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="label-lg et-drawer__meta">{profile.location} · UTC+6</p>
      </div>

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      {/* ------------------------------- footer ------------------------------- */}
      <footer className="et-footer">
        <div className="et-container">
          <div className="et-footer__bar body-sm">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <nav aria-label="Footer" className="et-footer__links">
              <Link href="/resume">Résumé</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>

      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
