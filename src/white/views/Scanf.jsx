"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import scanfLogo from "../../assets/scanf-app.jpeg";
import view01 from "../../assets/view01.jpeg";
import view02 from "../../assets/view02.jpeg";
import view03 from "../../assets/view03.jpeg";
import view04 from "../../assets/view04.jpeg";
import view05 from "../../assets/view05.jpeg";
import { Reveal } from "../editorial/motion";
import { Intro, PageHeader } from "../editorial/ui";

const SHOTS = [view01, view02, view03, view04, view05];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Firebase is loaded in the browser only, so the static build never runs it. */
const loadDb = () => import("../../firebase").then((m) => m.database);

function Stars({ value, label }) {
  return (
    <span className="et-stars" role="img" aria-label={label || `${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={n <= Math.round(value) ? undefined : "is-off"}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </span>
  );
}

export default function Scanf() {
  const [stats, setStats] = useState(null); // only real values from Firebase
  const [reviews, setReviews] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let unsubs = [];
    let cancelled = false;
    (async () => {
      try {
        const db = await loadDb();
        const { onValue, ref } = await import("firebase/database");
        if (cancelled) return;
        unsubs.push(
          onValue(ref(db, "app-db"), (snap) => setStats(snap.exists() ? snap.val() : null)),
          onValue(ref(db, "reviews"), (snap) => {
            if (!snap.exists()) return setReviews([]);
            const data = snap.val();
            setReviews(
              Object.keys(data)
                .map((id) => ({ id, ...data[id] }))
                .sort((a, b) => b.timestamp - a.timestamp),
            );
          }),
        );
      } catch {
        /* reviews unavailable: the page still works without them */
      }
    })();
    return () => {
      cancelled = true;
      unsubs.forEach((u) => u());
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const found = {};
    if (!rating) found.rating = "Choose a rating.";
    if (!EMAIL_RE.test(email.trim())) found.email = "Enter a valid email address.";
    if (!comment.trim()) found.comment = "Write a short comment.";
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const db = await loadDb();
      const { get, push, ref, set } = await import("firebase/database");
      const statsRef = ref(db, "app-db");
      const snap = await get(statsRef);
      if (snap.exists()) {
        const cur = snap.val();
        const total = (cur.totalReviews || 0) + 1;
        const avg = ((cur.averageRating || 0) * (cur.totalReviews || 0) + rating) / total;
        await set(statsRef, { ...cur, totalReviews: total, averageRating: Math.round(avg * 10) / 10 });
      }
      await set(push(ref(db, "reviews")), {
        email: email.trim(),
        initial: email.trim().charAt(0).toUpperCase(),
        comment: comment.trim(),
        stars: rating,
        timestamp: Date.now(),
      });
      setRating(0);
      setEmail("");
      setComment("");
      setFormOpen(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        trail={[{ name: "Scanf", href: "/scanf-app-download" }]}
        title="Scanf — free document scanner"
        lede="Capture, crop, enhance and extract text, then export clean PDFs or images in seconds. Free, no ads, no in-app purchases."
      >
        <div className="et-app-head">
          <div className="et-app-id">
            <img src={scanfLogo.src} alt="Scanf app icon" width={96} height={96} />
            <div>
              <p className="h5">Scanf</p>
              <p className="body-sm">Version 1.0 · Android · by Pappu Dey</p>
            </div>
          </div>
          <button type="button" className="btn btn--primary" disabled aria-describedby="scanf-availability">
            Download coming soon
          </button>
        </div>
        <p id="scanf-availability" className="body-sm et-muted et-scanf__note">
          Not yet available to download.
        </p>
      </PageHeader>

      {stats ? (
        <section className="et-section" aria-label="App stats">
          <div className="et-container">
            <dl className="et-hero__stats et-statbar et-scanf__stats">
              {typeof stats.averageRating === "number" ? (
                <div className="et-hero__stat">
                  <dt className="label-lg">Average rating</dt>
                  <dd className="h1">{stats.averageRating}</dd>
                </div>
              ) : null}
              {typeof stats.totalReviews === "number" ? (
                <div className="et-hero__stat">
                  <dt className="label-lg">Reviews</dt>
                  <dd className="h1">{stats.totalReviews.toLocaleString("en-US")}</dd>
                </div>
              ) : null}
              <div className="et-hero__stat">
                <dt className="label-lg">Content rating</dt>
                <dd className="h1">E</dd>
              </div>
            </dl>
          </div>
        </section>
      ) : null}

      <section className="et-section" aria-labelledby="screenshots">
        <div className="et-container">
          <Intro index="01" title="Screenshots" id="screenshots" />
          <div className="et-shots" role="region" aria-label="App screenshots" tabIndex={0}>
            {SHOTS.map((shot, i) => (
              <img key={shot.src} src={shot.src} alt={`Scanf screen ${i + 1} of ${SHOTS.length}`} width={540} height={1200} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      <section className="et-section" aria-labelledby="about-app">
        <div className="et-container et-split">
          <Intro index="02" title="About this app" id="about-app" />
          <Reveal className="et-split__text">
            <p className="body-lg">
              Turn your phone into a scanner. Capture, crop, enhance and extract text instantly,
              then export high-quality PDFs or images in seconds.
            </p>
            <p className="body-md">
              Scanf is free, secure and ad-free, and it respects your privacy: data is temporary
              and removed after 30 days.
            </p>
            <h3 className="h5">What is new in 1.0</h3>
            <ul className="et-bullets body-md">
              <li>Free, with no ads and no in-app purchases</li>
              <li>Faster scanning</li>
              <li>Privacy-friendly: data removed after 30 days</li>
              <li>Better document edge detection and OCR accuracy</li>
              <li>Multi-page batch scanning</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="et-section" aria-labelledby="reviews">
        <div className="et-container">
          <Intro
            index="03"
            title="Ratings & reviews"
            id="reviews"
            aside={
              <button
                type="button"
                className="btn btn--secondary"
                aria-expanded={formOpen}
                aria-controls="review-form"
                onClick={() => setFormOpen((v) => !v)}
              >
                {formOpen ? "Cancel" : "Write a review"}
              </button>
            }
          />

          {formOpen ? (
            <form id="review-form" className="et-form et-scanf__form" onSubmit={submit} noValidate>
              <div className="et-field">
                <span className="label-lg" id="rating-label">Your rating</span>
                <div className="et-rate" role="radiogroup" aria-labelledby="rating-label">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      className={n <= rating ? "is-on" : undefined}
                      onClick={() => setRating(n)}
                    >
                      <Star aria-hidden="true" fill="currentColor" strokeWidth={0} />
                    </button>
                  ))}
                </div>
                {errors.rating ? <p className="label-lg et-field__error">{errors.rating}</p> : null}
              </div>
              <div className="et-field">
                <label htmlFor="review-email" className="label-lg">Email</label>
                <input id="review-email" className="et-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-invalid={errors.email ? true : undefined} />
                {errors.email ? <p className="label-lg et-field__error">{errors.email}</p> : null}
              </div>
              <div className="et-field">
                <label htmlFor="review-comment" className="label-lg">Comment</label>
                <textarea id="review-comment" className="et-input" rows={4} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Share your experience" aria-invalid={errors.comment ? true : undefined} />
                {errors.comment ? <p className="label-lg et-field__error">{errors.comment}</p> : null}
              </div>
              <div className="et-btn-row">
                <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                  {status === "sending" ? "Submitting…" : "Submit review"}
                </button>
              </div>
            </form>
          ) : null}

          <p className="body-sm et-form__status" aria-live="polite">
            {status === "sent" ? "Thank you for your review." : ""}
            {status === "error" ? "Could not submit the review. Please try again." : ""}
          </p>

          {reviews.length ? (
            <ul className="et-reviews">
              {reviews.map((r) => (
                <li key={r.id}>
                  <div className="et-review">
                    <span className="et-avatar" aria-hidden="true">{r.initial}</span>
                    <span className="h6">Anonymous user</span>
                    <Stars value={r.stars} />
                    <p className="body-md">{r.comment}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="body-md et-muted">No reviews yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
