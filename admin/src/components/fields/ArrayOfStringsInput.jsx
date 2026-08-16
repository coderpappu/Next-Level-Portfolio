import React, { useState } from "react";
import { X } from "lucide-react";

// Simple tag input: type a value, press Enter or comma to commit it as a
// tag, backspace on an empty input removes the last tag. Used for
// projects.stack, experience.highlights, tech-stack-groups.items,
// settings.expertise, settings.skills.
export default function ArrayOfStringsInput({ label, value, onChange, hint }) {
  const items = Array.isArray(value) ? value : [];
  const [draft, setDraft] = useState("");

  function commit() {
    const trimmed = draft.trim();
    if (trimmed) onChange([...items, trimmed]);
    setDraft("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit();
    } else if (e.key === "Backspace" && draft === "" && items.length > 0) {
      onChange(items.slice(0, -1));
    }
  }

  function removeAt(idx) {
    onChange(items.filter((_, i) => i !== idx));
  }

  return (
    <div>
      {label && <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>}
      <div className="flex flex-wrap items-center gap-2 rounded-md border border-slate-300 bg-white p-2 shadow-sm focus-within:border-slate-500 focus-within:ring-1 focus-within:ring-slate-500">
        {items.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="flex items-center gap-1 rounded bg-slate-200 px-2 py-1 text-xs font-medium text-slate-800"
          >
            {item}
            <button
              type="button"
              onClick={() => removeAt(idx)}
              className="text-slate-500 hover:text-slate-900"
              aria-label={`Remove ${item}`}
            >
              <X size={12} />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commit}
          placeholder="Type and press Enter…"
          className="min-w-[8rem] flex-1 border-none p-1 text-sm outline-none"
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    </div>
  );
}
