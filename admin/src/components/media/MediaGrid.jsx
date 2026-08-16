import React from "react";
import { FileText } from "lucide-react";
import { mediaUrl } from "../../api.js";
import { formatBytes, formatDate } from "./formatters.js";

// Grid of media thumbnails. `onSelect` (if given) makes each tile clickable
// for picking; `actions(item)` (if given) renders custom per-item buttons
// (delete / copy URL) below each tile — used by the standalone Media page.
export default function MediaGrid({ items, onSelect, actions, emptyMessage = "No media uploaded yet." }) {
  if (!items.length) {
    return <p className="py-8 text-center text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => onSelect?.(item)}
            disabled={!onSelect}
            className={`block w-full ${onSelect ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="flex aspect-square items-center justify-center bg-slate-100">
              {item.mime_type?.startsWith("image/") ? (
                <img src={mediaUrl(item.url)} alt={item.filename} className="h-full w-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <FileText size={28} />
                  <span className="text-[10px] font-medium uppercase">
                    {item.filename.split(".").pop()}
                  </span>
                </div>
              )}
            </div>
          </button>
          <div className="p-2">
            <p className="truncate text-xs font-medium text-slate-700" title={item.filename}>
              {item.filename}
            </p>
            <p className="text-[11px] text-slate-400">
              {formatBytes(item.size_bytes)} · {formatDate(item.created_at)}
            </p>
            {actions && <div className="mt-2 flex gap-2">{actions(item)}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
