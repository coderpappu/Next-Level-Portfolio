import JsonLd from "../white/editorial/JsonLd";
import { getJobPhotos, getPostSummaries } from "../white/lib/server";
import { graph, pageMeta, SITE, webPageSchema } from "../white/seo";
import Home from "../white/views/Home";

export const metadata = pageMeta({
  description: SITE.description,
  path: "/",
});

export default async function HomePage() {
  const posts = await getPostSummaries();
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            type: "ProfilePage",
            path: "/",
            name: SITE.title,
            description: SITE.description,
          }),
        )}
      />
      <Home posts={posts} jobPhotos={getJobPhotos()} />
    </>
  );
}
