import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { profile } from "./data";
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

const WhiteLayout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // The classic portfolio ships a dark scrollbar on <html>; swap it while the
  // white edition is mounted and restore it on unmount.
  useEffect(() => {
    document.documentElement.classList.add("white-page");
    document.body.classList.add("white-page");
    return () => {
      document.documentElement.classList.remove("white-page");
      document.body.classList.remove("white-page");
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="white-root min-h-screen">
      <main className="mx-auto max-w-screen-lg md:px-4">
        {/* ------------------------------- nav ------------------------------ */}
        <nav className="sticky top-0 z-50 bg-white md:bg-transparent md:backdrop-blur-sm">
          <div className="flex h-14 items-center justify-between">
            <Link
              to="/"
              aria-label={`Go to ${profile.name} home page`}
              className="mx-4 md:mx-0"
            >
              {/* The mark is a hairline outline on transparency: it disappears
                  if drawn dark-on-white at 36px, and a circular object-cover
                  crop lops off its edges. Forcing it to pure white inside a
                  dark disc keeps the whole mark visible and echoes the nav
                  pills. */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--w-heading)]">
                <img
                  src={Logo}
                  alt=""
                  width={22}
                  height={22}
                  className="w-logo-mark h-[22px] w-[22px] object-contain"
                />
              </span>
            </Link>

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

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="mr-2 cursor-pointer border-none bg-transparent p-2 text-[color:var(--w-icon)] md:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
              open ? "max-h-screen" : "max-h-0"
            }`}
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
          <Outlet />
        </section>

        {/* ----------------------------- footer ----------------------------- */}
        <footer>
          <div className="mx-auto max-w-screen-md px-4 py-6">
            <p className="text-center text-sm text-[color:var(--w-muted)]">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default WhiteLayout;
