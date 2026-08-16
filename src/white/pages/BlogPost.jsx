import { marked } from "marked";
import { useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { GlyphLink } from "../ui";
import { usePost, resolveMediaUrl, formatPostDate } from "../lib/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, notFound } = usePost(slug);

  const html = useMemo(() => {
    if (!post?.content_md) return "";
    try {
      return marked.parse(post.content_md);
    } catch {
      return "<p><em>Could not render this post.</em></p>";
    }
  }, [post]);

  if (loading) {
    return (
      <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
        Loading…
      </p>
    );
  }

  if (notFound || !post) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-[color:var(--w-muted)]">
          That post doesn&apos;t exist, or the blog isn&apos;t reachable right now.
        </p>
        <GlyphLink href="/blog" internal>
          Back to Blog
        </GlyphLink>
      </div>
    );
  }

  const cover = resolveMediaUrl(post.cover_image_url);

  return (
    <>
      <Helmet>
        <title>{post.seo_title || post.title} | Pappu Dey</title>
        <meta name="description" content={post.seo_description || post.excerpt || ""} />
      </Helmet>

      <div className="space-y-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-xs text-[color:var(--w-muted)] hover:underline"
        >
          ← Back to Blog
        </Link>

        <div>
          {post.tags?.length ? (
            <div className="mb-3 flex flex-wrap gap-1">
              {post.tags.map((t) => (
                <span key={t} className="w-chip-secondary">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <h1 className="text-2xl font-semibold tracking-[-0.01em]">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-[color:var(--w-muted)]">
            {formatPostDate(post.published_at)}
          </p>
        </div>

        {cover ? (
          <img
            src={cover}
            alt=""
            className="w-full rounded-md border border-[color:var(--w-border)] object-cover"
          />
        ) : null}

        <div
          className="w-blog-content w-prose text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
};

export default BlogPost;
