/* ---------------------------------------------------------------------------
   Editorial Taste shell, used by the home page only. WhiteLayout keeps the
   state (menu, theme, command palette) and every other route keeps the
   white edition frame; this only swaps what the home route is drawn in.
   --------------------------------------------------------------------------- */

import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { profile } from "../data";
import { Roll } from "./motion";
import { useMotionReady } from "./useMotion";
import "./editorial.css";

const ICON = { width: 16, height: 16, strokeWidth: 1.5, "aria-hidden": true };

const isActive = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function EditorialShell({
  nav,
  pathname,
  theme,
  onToggleTheme,
  onOpenPalette,
  menuOpen,
  setMenuOpen,
  children,
}) {
  const ready = useMotionReady();
  const headerRef = useRef(null);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* White glass with a hairline once the page moves. Slides away scrolling
     down past 60% of the viewport and returns on the way up. Never hides
     while it holds focus. */
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
  }, [menuOpen, setMenuOpen]);

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
          <Link
            to="/"
            aria-label={`Go to ${profile.name} home page`}
            className="et-logo"
          >
            <img src={Logo} alt="" width={20} height={20} />
            <span>{profile.name}</span>
          </Link>

          <nav aria-label="Primary" className="et-nav__right">
            <ul className="et-nav__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="et-nav__link"
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
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
                onClick={onOpenPalette}
                aria-label="Open command palette"
                title="Search — ⌘K"
              >
                <Search {...ICON} />
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={onToggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
              >
                {theme === "dark" ? <Sun {...ICON} /> : <Moon {...ICON} />}
              </button>
              <button
                type="button"
                className="icon-btn et-nav__menu"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">
                  {menuOpen ? "Close menu" : "Open menu"}
                </span>
                {menuOpen ? <X {...ICON} /> : <Menu {...ICON} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ------------------------------- drawer ------------------------------- */}
      <div
        id="mobile-menu"
        className={menuOpen ? "et-drawer is-open" : "et-drawer"}
      >
        <ul className="et-drawer__links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={
                  isActive(pathname, item.href) ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="label-lg et-drawer__meta">
          {profile.location} · UTC+6
        </p>
      </div>

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      {/* ------------------------------- footer ------------------------------- */}
      <footer className="et-footer">
        <div className="et-container">
          <div className="et-footer__bar body-sm">
            <p>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
