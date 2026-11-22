import { marked } from "marked";
import { notFound } from "next/navigation";
import JsonLd from "../../../white/editorial/JsonLd";
import { getAllPosts } from "../../../white/lib/blog";
import { toSummary } from "../../../white/lib/server";
import { absoluteUrl, articleSchema, breadcrumbSchema, graph, pageMeta } from "../../../white/seo";
import BlogPost from "../../../white/views/BlogPost";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

async function find(params) {
  const { slug } = await params;
  const posts = await getAllPosts();
  return { post: posts.find((p) => p.slug === slug) || null, posts };
}

export async function generateMetadata({ params }) {
  const { post } = await find(params);
  if (!post) return {};
  return pageMeta({
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.published_at,
    modifiedTime: post.updated_at,
    tags: post.tags,
  });
}

export default async function Page({ params }) {
  const { post, posts } = await find(params);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const more = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map(toSummary);
  return (
    <>
      <JsonLd
        data={graph(
          articleSchema(post, path),
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        )}
      />
      <BlogPost
        post={toSummary(post)}
        html={marked.parse(post.content_md || "")}
        url={absoluteUrl(path)}
        more={more}
      />
    </>
  );
}
