import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";
import { resourceConfigs } from "../resourceConfigs.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";
import ContentBarChart from "../components/ContentBarChart.jsx";
import ActivityFeed from "../components/ActivityFeed.jsx";

// Sentence case, no trailing colon, value in the system sans — the stat-tile
// contract from the dataviz skill.
function StatTile({ label, value, loading }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{loading ? "…" : value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [counts, setCounts] = useState({});
  const [posts, setPosts] = useState([]);
  const [mediaCount, setMediaCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState([]);
  const [activityLoading, setActivityLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      Promise.all(
        resourceConfigs.map((c) =>
          api
            .get(`/api/admin/${c.apiPath}`)
            .then((rows) => [c.uiPath, Array.isArray(rows) ? rows.length : 0])
            .catch(() => [c.uiPath, null]),
        ),
      ),
      api.get("/api/admin/posts").catch(() => []),
      api.get("/api/admin/media").catch(() => []),
    ])
      .then(([countEntries, postRows, mediaRows]) => {
        if (cancelled) return;
        setCounts(Object.fromEntries(countEntries));
        setPosts(postRows);
        setMediaCount(mediaRows.length);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    api
      .get("/api/admin/activity?limit=8")
      .then((res) => {
        if (!cancelled) setActivity(res.items);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setActivityLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const totalContentItems = resourceConfigs.reduce((sum, c) => sum + (counts[c.uiPath] || 0), 0);
  const publishedPosts = posts.filter((p) => p.status === "published").length;
  const draftPosts = posts.filter((p) => p.status === "draft").length;

  const chartData = [
    ...resourceConfigs.map((c) => ({ label: c.label, value: counts[c.uiPath] ?? 0, href: `/${c.uiPath}` })),
    { label: "Posts", value: posts.length, href: "/posts" },
  ];

  return (
    <div>
      <PageHeader title="Dashboard" description="An overview of everything managed through this admin panel." />
      <Banner type="error">{error}</Banner>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile label="Content items" value={totalContentItems} loading={loading} />
        <StatTile label="Published posts" value={publishedPosts} loading={loading} />
        <StatTile label="Draft posts" value={draftPosts} loading={loading} />
        <StatTile label="Media files" value={mediaCount ?? 0} loading={loading} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContentBarChart data={chartData} loading={loading} />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">Recent activity</h2>
            <Link to="/activity" className="text-xs font-medium text-slate-500 hover:text-slate-900">
              View all
            </Link>
          </div>
          <ActivityFeed items={activity} loading={activityLoading} />
        </div>
      </div>
    </div>
  );
}
