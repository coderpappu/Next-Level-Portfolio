import React from "react";
import { Trash2, ArrowUp, ArrowDown, Plus } from "lucide-react";
import TextField from "./TextField.jsx";
import TextareaField from "./TextareaField.jsx";
import CheckboxField from "./CheckboxField.jsx";

// Reusable repeatable-row editor for "array of objects" shapes: awards.links,
// settings.stats, settings.fast_facts, settings.practice, and the nested
// settings.now.items list. `subfields` describes each object's own fields
// (name/label/type — text | textarea | url | checkbox).
export default function ArrayOfObjectsInput({ label, value, onChange, subfields, itemLabel = "Item", hint }) {
  const items = Array.isArray(value) ? value : [];

  function updateItem(idx, patch) {
    const next = items.map((it, i) => (i === idx ? { ...it, ...patch } : it));
    onChange(next);
  }

  function removeAt(idx) {
    onChange(items.filter((_, i) => i !== idx));
  }

  function move(idx, dir) {
    const target = idx + dir;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  }

  function addItem() {
    const blank = {};
    for (const sf of subfields) blank[sf.name] = sf.type === "checkbox" ? false : "";
    onChange([...items, blank]);
  }

  return (
    <div>
      {label && <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>}
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-md border border-slate-300 bg-slate-50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {itemLabel} {idx + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(idx, -1)}
                  disabled={idx === 0}
                  className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  disabled={idx === items.length - 1}
                  className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ArrowDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeAt(idx)}
                  className="rounded p-1 text-red-500 hover:bg-red-100"
                  aria-label="Remove"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              {subfields.map((sf) => {
                const fieldValue = item[sf.name];
                const onFieldChange = (v) => updateItem(idx, { [sf.name]: v });
                if (sf.type === "textarea") {
                  return <TextareaField key={sf.name} label={sf.label} value={fieldValue} onChange={onFieldChange} rows={3} />;
                }
                if (sf.type === "checkbox") {
                  return <CheckboxField key={sf.name} label={sf.label} value={fieldValue} onChange={onFieldChange} />;
                }
                return <TextField key={sf.name} label={sf.label} value={fieldValue} onChange={onFieldChange} />;
              })}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addItem}
        className="mt-2 inline-flex items-center gap-1 rounded-md border border-dashed border-slate-400 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
      >
        <Plus size={14} /> Add {itemLabel}
      </button>
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    </div>
  );
}
