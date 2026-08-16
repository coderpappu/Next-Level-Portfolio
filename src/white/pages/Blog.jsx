import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BlogCard } from "../BlogCard";
import { Reveal } from "../motion";
import { PageTitle } from "../ui";
import { usePosts } from "../lib/blog";

const PAGE_SIZE = 9;

const Blog = () => {
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const { posts, total, loading, unavailable } = usePosts({ page, pageSize: PAGE_SIZE });

  // usePosts returns one page at a time; "Load more" accumulates pages here
  // rather than replacing the visible list, deduped in case a page is refetched.
  useEffect(() => {
    if (page === 1) {
      setAllPosts(posts);
      return;
    }
    if (posts.length === 0) return;
    setAllPosts((prev) => {
      const seen = new Set(prev.map((p) => p.slug));
      return [...prev, ...posts.filter((p) => !seen.has(p.slug))];
    });
  }, [posts, page]);

  const hasMore = allPosts.length > 0 && allPosts.length < total;

  return (
    <>
      <Helmet>
        <title>Blog | Pappu Dey</title>
        <meta
          name="description"
          content="Articles on software engineering, SaaS architecture, and building products, written by Pappu Dey."
        />
      </Helmet>

      <PageTitle lede="Notes on shipping SaaS platforms, the architecture decisions behind them, and running a software company alongside a full-time engineering job.">
        Pappu Dey&apos;s Blog
      </PageTitle>

      {loading && page === 1 ? (
        <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
          Loading posts…
        </p>
      ) : unavailable ? (
        <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
          The blog isn&apos;t reachable right now — check back soon.
        </p>
      ) : allPosts.length === 0 ? (
        <p className="py-8 text-center text-sm text-[color:var(--w-muted)]">
          No posts published yet — check back soon.
        </p>
      ) : (
        <>
          <Reveal
            as="div"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {allPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </Reveal>

          {hasMore ? (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={loading}
                className="w-chip-secondary cursor-pointer !px-4 !py-2 disabled:opacity-60"
              >
                {loading ? "Loading…" : "Load more"}
              </button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Blog;
