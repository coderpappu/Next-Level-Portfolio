import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { api } from "../../api.js";

const CATEGORIES = ["projects", "awards", "posts", "profile"];

const DEFAULT_ACCEPT = "image/jpeg,image/png,image/webp,image/gif";
const DEFAULT_HINT = "JPEG, PNG, WebP, or GIF — up to 8MB";

// Drag-and-drop + click-to-browse upload area. `category` is fixed by the
// caller when it's known from context (e.g. an <ImagePicker category="projects">);
// pass `allowCategoryChange` to show a selector instead (used on the
// standalone Media Library page where the category isn't implied). `accept`/
// `hint`/`dropLabel` let a non-image field (e.g. a PDF résumé) reuse this
// same dropzone instead of a bespoke upload widget.
export default function UploadDropzone({
  category,
  allowCategoryChange = false,
  onUploaded,
  accept = DEFAULT_ACCEPT,
  hint = DEFAULT_HINT,
  dropLabel = "Drag and drop an image, or click to browse",
}) {
  const [selectedCategory, setSelectedCategory] = useState(category || "profile");
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const effectiveCategory = allowCategoryChange ? selectedCategory : category;

  async function doUpload(file) {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", effectiveCategory);
      const row = await api.upload("/api/admin/media/upload", formData);
      onUploaded?.(row);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    doUpload(file);
  }

  return (
    <div>
      {allowCategoryChange && (
        <label className="mb-3 block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Category</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      )}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-8 text-center transition-colors ${
          dragOver ? "border-slate-500 bg-slate-100" : "border-slate-300 bg-white hover:bg-slate-50"
        }`}
      >
        <UploadCloud size={28} className="text-slate-400" />
        <p className="text-sm text-slate-600">{uploading ? "Uploading…" : dropLabel}</p>
        <p className="text-xs text-slate-400">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => doUpload(e.target.files?.[0])}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
