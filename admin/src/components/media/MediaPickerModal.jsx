import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { api } from "../../api.js";
import MediaGrid from "./MediaGrid.jsx";
import UploadDropzone from "./UploadDropzone.jsx";

export default function MediaPickerModal({
  category,
  onSelect,
  onClose,
  accept,
  hint,
  dropLabel,
  title = "Choose image",
}) {
  const [tab, setTab] = useState("existing");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    api
      .get("/api/admin/media")
      .then((rows) => {
        if (!cancelled) setItems(rows);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function handleUploaded(row) {
    onSelect(row.url);
  }

  // Only offer files matching this field's accepted types on the "existing"
  // tab — a CV field shouldn't surface JPEGs, and an image field shouldn't
  // surface PDFs. No `accept` means "any" (image fields didn't set one
  // before this prop existed, and still don't need to).
  const acceptedMimes = accept?.split(",").map((s) => s.trim());
  const visibleItems = acceptedMimes ? items.filter((item) => acceptedMimes.includes(item.mime_type)) : items;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[85vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-base font-semibold text-slate-800">{title}</h2>
          <button type="button" onClick={onClose} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
            <X size={18} />
          </button>
        </div>

        <div className="flex border-b border-slate-200 px-4">
          <button
            type="button"
            onClick={() => setTab("existing")}
            className={`border-b-2 px-3 py-2 text-sm font-medium ${
              tab === "existing" ? "border-slate-800 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Choose existing
          </button>
          <button
            type="button"
            onClick={() => setTab("upload")}
            className={`border-b-2 px-3 py-2 text-sm font-medium ${
              tab === "upload" ? "border-slate-800 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Upload new
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {tab === "existing" ? (
            loading ? (
              <p className="py-8 text-center text-sm text-slate-500">Loading media…</p>
            ) : error ? (
              <p className="py-8 text-center text-sm text-red-600">{error}</p>
            ) : (
              <MediaGrid items={visibleItems} onSelect={(item) => onSelect(item.url)} />
            )
          ) : (
            <UploadDropzone category={category} onUploaded={handleUploaded} accept={accept} hint={hint} dropLabel={dropLabel} />
          )}
        </div>
      </div>
    </div>
  );
}
