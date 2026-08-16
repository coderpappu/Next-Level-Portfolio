import React from "react";

export default function SectionFooter({ saving, error, success, onSave }) {
  return (
    <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 disabled:opacity-60"
      >
        {saving ? "Saving…" : "Save section"}
      </button>
      {success && <span className="text-sm text-green-600">Saved.</span>}
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
