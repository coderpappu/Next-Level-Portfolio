"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../editorial/motion";
import { ContactBand, LINE, PageHeader, stagger } from "../editorial/ui";
import { postArt } from "../illustrations";

function Art({ post, className }) {
  const art = postArt(post);
  return (
    <span className={className}>
      <img src={art.src} alt="" width={art.width} height={art.height} loading="lazy" decoding="async" />
    </span>
  );
}

/* Newest article as a wide feature card; the rest in a three-column grid of
   typographic cards. Every card inverts to black on hover. */
export default function Blog({ posts }) {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        trail={[{ name: "Blog", href: "/blog" }]}
        title="Blog"
        lede="Notes on shipping SaaS platforms, the architecture decisions behind them, and running a software company alongside a full-time engineering job."
      />

      <section className="et-section" aria-label="Articles">
        <div className="et-container">
          {!featured ? (
            <div className="et-empty">
              <p className="h5">No articles yet.</p>
              <p className="body-md et-muted">The first one is on its way.</p>
            </div>
          ) : (
            <>
              <Reveal className="et-blog-feature">
                <Link href={`/blog/${featured.slug}`} className="et-feature et-feature--art">
                  <Art post={featured} className="et-feature__art" />
                  <span className="label-lg et-feature__meta">
                    Latest · {featured.date}
                    {featured.minutes ? ` · ${featured.minutes} min read` : ""}
                  </span>
                  <span className="et-feature__body">
                    <span className="h2 et-feature__title">{featured.title}</span>
                    {featured.excerpt ? (
                      <span className="body-lg et-feature__excerpt">{featured.excerpt}</span>
                    ) : null}
                    <span className="et-feature__foot">
                      <span className="et-tags">
                        {featured.tags.slice(0, 3).map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </span>
                      <span className="btn btn--tertiary et-feature__cta">
                        Read article
                        <ArrowRight {...LINE} />
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>

              {rest.length ? (
                <ul className="et-postgrid">
                  {rest.map((post, i) => (
                    <Reveal as="li" key={post.slug} delay={stagger(i)}>
                      <Link href={`/blog/${post.slug}`} className="et-postcard">
                        <Art post={post} className="et-postcard__art" />
                        <span className="label-lg et-postcard__meta">
                          {post.date}
                          {post.minutes ? ` · ${post.minutes} min` : ""}
                        </span>
                        <span className="h4">{post.title}</span>
                        {post.excerpt ? (
                          <span className="body-md et-postcard__excerpt">{post.excerpt}</span>
                        ) : null}
                        <span className="et-tags et-postcard__foot">
                          {post.tags.slice(0, 2).map((t) => (
                            <span key={t} className="tag">
                              {t}
                            </span>
                          ))}
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
