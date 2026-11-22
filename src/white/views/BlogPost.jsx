"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { profile } from "../data";
import { Reveal } from "../editorial/motion";
import { ContactBand, Intro, LINE, PageHeader, stagger, TertiaryLink } from "../editorial/ui";
import { postArt } from "../illustrations";

export default function BlogPost({ post, html, url, more }) {
  const share = encodeURIComponent(url);
  const text = encodeURIComponent(post.title);

  return (
    <>
      <PageHeader
        trail={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
        title={post.title}
        lede={post.excerpt}
        media={{ ...postArt(post), alt: `Illustration for ${post.title}` }}
      />

      <section className="et-section" aria-label="Article">
        <div className="et-container">
          <div className="label-lg et-article-meta et-article-meta--top">
            <span>
              By <Link href="/about" className="et-link">{profile.name}</Link>
            </span>
            <time dateTime={post.publishedAt}>{post.date}</time>
            {post.minutes ? <span>{post.minutes} min read</span> : null}
            {post.tags.length ? <span>{post.tags.join(" · ")}</span> : null}
          </div>

          <article className="et-article">
            <div className="et-prose" dangerouslySetInnerHTML={{ __html: html }} />
            <footer className="et-article__foot">
              <p className="body-sm">
                Written by {profile.name}, software engineer and founder of Codex Devware.
              </p>
              <div className="et-linkrow">
                <TertiaryLink
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}
                  label="Share on LinkedIn"
                />
                <TertiaryLink href={`https://x.com/intent/post?url=${share}&text=${text}`} label="Share on X" />
              </div>
            </footer>
          </article>
        </div>
      </section>

      {more.length ? (
        <section className="et-section" aria-labelledby="more-articles">
          <div className="et-container">
            <Intro
              title="More articles"
              id="more-articles"
              action={{ href: "/blog", label: "All articles", internal: true }}
            />
            <ol className="et-journal__list et-more">
              {more.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={stagger(i)}>
                  <Link href={`/blog/${p.slug}`} className="et-journal__row">
                    <span className="label-lg et-journal__date">
                      {p.date}
                      {p.minutes ? ` · ${p.minutes} min` : ""}
                    </span>
                    <span className="h5 et-journal__title">{p.title}</span>
                    {p.tags.length ? (
                      <span className="body-sm et-journal__tags">{p.tags.slice(0, 3).join(" · ")}</span>
                    ) : null}
                    <ArrowUpRight className="et-journal__arrow" {...LINE} />
                  </Link>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <ContactBand />
    </>
  );
}
