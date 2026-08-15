import { useScrollProgress, useReveal } from "./hooks";

/* Wraps content that should fade+rise into view once, on first intersection. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`w-reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* Hairline reading-progress bar pinned to the top of the viewport. */
export function ReadingProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="w-no-print fixed inset-x-0 top-0 z-[60] h-[2px]"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background:
            "linear-gradient(90deg, var(--w-ring-1), var(--w-ring-2) 40%, var(--w-ring-3) 75%, var(--w-ring-4))",
          transition: "transform 80ms linear",
        }}
      />
    </div>
  );
}
