import React, { useState } from "react";
import { ImageIcon, FileText, X } from "lucide-react";
import { mediaUrl } from "../api.js";
import MediaPickerModal from "./media/MediaPickerModal.jsx";

function isImagePath(url) {
  return /\.(jpe?g|png|gif|webp)$/i.test(url || "");
}

// Reusable file field used by every image_url / cover_image_url /
// avatar_url / og_image_url / etc. across the app, and — via `accept` — the
// one non-image field (profile.cv_url, a PDF). `category` decides which
// uploads/<category>/ folder a NEW upload from this field lands in.
export default function ImagePicker({
  label,
  value,
  onChange,
  category,
  hint,
  accept, // e.g. "application/pdf" — omit for the default image-only behavior
  dropLabel,
  uploadHint,
  pickerTitle,
  chooseLabel = "Choose image",
  changeLabel = "Change image",
}) {
  const [open, setOpen] = useState(false);
  const showImage = value && isImagePath(value);

  return (
    <div>
      {label && <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>}
      <div className="flex items-center gap-3">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-slate-100">
          {showImage ? (
            <img src={mediaUrl(value)} alt="" className="h-full w-full object-cover" />
          ) : value ? (
            <div className="flex flex-col items-center gap-1 text-slate-400">
              <FileText size={22} />
              <span className="text-[9px] font-medium uppercase">{value.split(".").pop()}</span>
            </div>
          ) : (
            <ImageIcon size={22} className="text-slate-400" />
          )}
        </div>
        <div className="flex flex-col gap-2">
          {value && !showImage && (
            <a
              href={mediaUrl(value)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              View current file
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            {value ? changeLabel : chooseLabel}
          </button>
          {value && (
            <button
              type="button"
              onClick={() => onChange(null)}
              className="inline-flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-700"
            >
              <X size={12} /> Remove
            </button>
          )}
        </div>
      </div>
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}

      {open && (
        <MediaPickerModal
          category={category}
          accept={accept}
          dropLabel={dropLabel}
          hint={uploadHint}
          title={pickerTitle}
          onSelect={(url) => {
            onChange(url);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
