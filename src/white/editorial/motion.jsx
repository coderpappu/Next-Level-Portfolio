/* ---------------------------------------------------------------------------
   Editorial Taste motion for React: reveal, word masks, image unmask,
   count-up, label roll. Hidden start states live in editorial.css behind
   `html.js` + prefers-reduced-motion: no-preference, so with reduced motion
   (or no IntersectionObserver) everything renders in its final state.
   --------------------------------------------------------------------------- */

import { Fragment, useEffect, useRef, useState } from "react";
import { easeOutExpo, prefersReduced, useInView } from "./useMotion";

const cx = (...parts) => parts.filter(Boolean).join(" ");

/* Fade and rise 32px, once. `delay` in ms staggers siblings. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <Tag
      ref={ref}
      className={cx("et-reveal", inView && "is-in", className)}
      style={delay ? { "--d": `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Heading whose words rise out of masks. Screen readers get the sentence once,
   from the sr-only copy; the split words are aria-hidden. Pass `play` to drive
   it from the hero intro instead of the viewport. */
export function MaskedText({
  as: Tag = "h2",
  text,
  delay = 0,
  play,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const seen = useInView(ref);
  const inView = play === undefined ? seen : play;
  // Split on ordinary whitespace only, so a non-breaking space keeps words together.
  const words = String(text).split(/[ \t\n\r]+/).filter(Boolean);

  return (
    <Tag
      ref={ref}
      data-reveal="text"
      className={cx(className, inView && "is-in")}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <span className="tw">
              <span
                className="tw__i"
                style={{ "--d": `${delay + Math.min(i * 40, 600)}ms` }}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}

/* Frame that unmasks upward while its image settles from a slight zoom. */
export function RevealImage({ className = "", delay = 0, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { watchParent: true });
  return (
    <div
      ref={ref}
      data-reveal="image"
      className={cx(className, inView && "is-in")}
      style={delay ? { "--d": `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* Counts the numeric part of a value ("25+") up over 1.6s with expo-out.
   An invisible copy of the final value reserves the width, so nothing
   jitters; assistive tech only ever hears the final value. Pass `play`
   (and `delay` in ms) to start it with the hero intro instead of the
   viewport. */
export function CountUp({ value, play, delay = 0 }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  const inView = play === undefined ? seen : play;
  const match = String(value).match(/-?\d+(?:[.,]\d+)?/);
  const [text, setText] = useState(() =>
    match && !prefersReduced()
      ? value.slice(0, match.index) + "0" + value.slice(match.index + match[0].length)
      : value,
  );

  useEffect(() => {
    if (!inView) return undefined;
    if (!match || prefersReduced()) {
      setText(value);
      return undefined;
    }
    const target = parseFloat(match[0].replace(",", "."));
    const decimals = (match[0].split(/[.,]/)[1] || "").length;
    const pre = value.slice(0, match.index);
    const post = value.slice(match.index + match[0].length);
    const start = performance.now() + delay;
    let frame = 0;
    const tick = (now) => {
      const p = Math.max(0, Math.min((now - start) / 1600, 1));
      if (p >= 1) {
        setText(value);
        return;
      }
      setText(pre + (target * easeOutExpo(p)).toFixed(decimals) + post);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, delay]);

  return (
    <span ref={ref} className="et-count">
      <span className="et-count__sizer" aria-hidden="true">
        {value}
      </span>
      <span aria-hidden="true">{text}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

/* Button / nav label that rolls up on hover. The duplicate is aria-hidden. */
export function Roll({ children }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
