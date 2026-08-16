import React from "react";

export default function CheckboxField({ label, value, onChange, hint }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-slate-700 focus:ring-slate-500"
      />
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {hint && <span className="text-xs text-slate-500">{hint}</span>}
    </label>
  );
}
