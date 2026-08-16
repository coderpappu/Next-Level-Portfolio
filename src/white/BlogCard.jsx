import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { resolveMediaUrl, formatPostDate } from "./lib/blog";

export function BlogCard({ post }) {
  const cover = resolveMediaUrl(post.cover_image_url);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-[color:var(--w-border)] transition-colors hover:border-[color:var(--w-heading)]"
    >
      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-[color:var(--w-hover)]">
        {cover ? (
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Newspaper
              className="h-6 w-6 text-[color:var(--w-sep)]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        {post.tags?.length ? (
          <div className="mb-2 flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="w-chip-secondary">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <h3 className="line-clamp-2 text-sm font-medium text-[color:var(--w-heading)] group-hover:underline">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="w-prose mt-1.5 line-clamp-3 flex-1 text-xs text-[color:var(--w-muted)]">
            {post.excerpt}
          </p>
        ) : null}

        <span className="mt-3 text-[11px] text-[color:var(--w-muted)]">
          {formatPostDate(post.published_at)}
        </span>
      </div>
    </Link>
  );
}
