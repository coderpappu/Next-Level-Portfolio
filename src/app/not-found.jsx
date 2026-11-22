import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "This page does not exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="et-404">
      <div className="et-container">
        <span className="eyebrow">Error 404</span>
        <h1 className="h2">This page does not exist.</h1>
        <p className="body-lg">
          It may have moved, or the link may be mistyped. These pages are a good place to pick up from.
        </p>
        <div className="et-btn-row">
          <Link href="/" className="btn btn--primary">
            Go to the home page
          </Link>
          <Link href="/projects" className="btn btn--secondary">
            See projects
          </Link>
          <Link href="/contact" className="btn btn--tertiary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
