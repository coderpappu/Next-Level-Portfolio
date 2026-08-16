import React, { useEffect, useState } from "react";
import { Trash2, Copy, Check } from "lucide-react";
import { api, mediaUrl } from "../api.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";
import MediaGrid from "../components/media/MediaGrid.jsx";
import UploadDropzone from "../components/media/UploadDropzone.jsx";

export default function MediaPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    load();
  }, []);

  function load() {
    setLoading(true);
    setError(null);
    api
      .get("/api/admin/media")
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  async function handleDelete(item) {
    if (!window.confirm(`Delete "${item.filename}"? This cannot be undone.`)) return;
    try {
      await api.del(`/api/admin/media/${item.id}`);
      setItems((prev) => prev.filter((i) => i.id !== item.id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleCopy(item) {
    const full = mediaUrl(item.url);
    try {
      await navigator.clipboard.writeText(full);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId((cur) => (cur === item.id ? null : cur)), 1500);
    } catch {
      window.prompt("Copy this URL:", full);
    }
  }

  function handleUploaded(row) {
    setItems((prev) => [row, ...prev]);
  }

  return (
    <div>
      <PageHeader title="Media Library" description="Images available to every image field across the admin panel." />
      <Banner type="error">{error}</Banner>

      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <UploadDropzone allowCategoryChange onUploaded={handleUploaded} />
      </div>

      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <MediaGrid
          items={items}
          actions={(item) => (
            <>
              <button
                type="button"
                onClick={() => handleCopy(item)}
                className="inline-flex items-center gap-1 rounded border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-100"
              >
                {copiedId === item.id ? <Check size={12} /> : <Copy size={12} />}
                {copiedId === item.id ? "Copied" : "Copy URL"}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item)}
                className="inline-flex items-center gap-1 rounded border border-red-200 px-2 py-1 text-[11px] font-medium text-red-600 hover:bg-red-50"
              >
                <Trash2 size={12} /> Delete
              </button>
            </>
          )}
        />
      )}
    </div>
  );
}
