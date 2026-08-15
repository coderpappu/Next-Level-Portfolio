import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "./hooks";

/*
 * Preview card that appears when a project link is hovered or focused.
 * Pointer-coarse devices (phones, tablets) skip it entirely — there is no
 * hover there, and a card triggered by a tap would fight the link itself.
 */
export function ProjectHoverCard({ project, children }) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const timer = useRef(0);
  const wrapRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (!canHover) return children;

  const show = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (rect) setAlignRight(rect.left + 320 > window.innerWidth - 16);
      setOpen(true);
    }, 140);
  };

  const hide = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), 80);
  };

  return (
    <span
      ref={wrapRef}
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          className="w-hovercard w-no-print pointer-events-none absolute top-full z-50 mt-2 block w-[300px] overflow-hidden rounded-lg border border-[color:var(--w-border)] shadow-xl"
          style={{
            backgroundColor: "var(--w-elevated)",
            left: alignRight ? "auto" : 0,
            right: alignRight ? 0 : "auto",
          }}
        >
          <img
            src={project.image}
            alt=""
            className="h-[140px] w-full object-cover"
          />
          <span className="block border-t border-[color:var(--w-border)] p-3">
            <span className="block text-sm font-semibold text-[color:var(--w-heading)]">
              {project.name}
            </span>
            <span className="mt-0.5 block text-xs text-[color:var(--w-muted)]">
              {project.category} · {project.year}
            </span>
            <span className="mt-2 flex flex-wrap gap-1">
              {project.stack.slice(0, 4).map((t) => (
                <span key={t} className="w-chip-secondary">
                  {t}
                </span>
              ))}
            </span>
          </span>
        </span>
      ) : null}
    </span>
  );
}
