import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { api } from "../api.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";

const TABS = [
  { key: "all", label: "All" },
  { key: "draft", label: "Draft" },
  { key: "published", label: "Published" },
];

function StatusBadge({ status }) {
  const styles =
    status === "published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles}`}>{status}</span>;
}

function formatDate(value) {
  if (!value) return "Not yet published";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "Not yet published";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    load();
  }, []);

  function load() {
    setLoading(true);
    setError(null);
    api
      .get("/api/admin/posts")
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  async function handleDelete(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    try {
      await api.del(`/api/admin/posts/${post.id}`);
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } catch (err) {
      setError(err.message);
    }
  }

  const filtered = useMemo(() => (tab === "all" ? posts : posts.filter((p) => p.status === tab)), [posts, tab]);

  return (
    <div>
      <PageHeader
        title="Posts"
        description="Blog posts for the site."
        actions={
          <Link
            to="/posts/new"
            className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            <Plus size={16} /> New Post
          </Link>
        }
      />

      <Banner type="error">{error}</Banner>

      <div className="mb-4 flex gap-1 border-b border-slate-200">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`border-b-2 px-3 py-2 text-sm font-medium ${
              tab === t.key ? "border-slate-800 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {t.label}
            {t.key !== "all" && ` (${posts.filter((p) => p.status === t.key).length})`}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <p className="p-6 text-center text-sm text-slate-500">Loading…</p>
        ) : filtered.length === 0 ? (
          <p className="p-6 text-center text-sm text-slate-500">No posts here yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2 font-medium">Title</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Published</th>
                <th className="w-24 px-3 py-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr key={post.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="px-3 py-2 text-slate-700">
                    <span className="font-medium text-slate-900">{post.title}</span>
                    <span className="ml-2 text-xs text-slate-400">/{post.slug}</span>
                  </td>
                  <td className="px-3 py-2">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="px-3 py-2 text-slate-500">{formatDate(post.published_at)}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        to={`/posts/${post.id}`}
                        className="rounded p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                        aria-label="Edit"
                      >
                        <Pencil size={15} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(post)}
                        className="rounded p-1.5 text-red-500 hover:bg-red-100"
                        aria-label="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
