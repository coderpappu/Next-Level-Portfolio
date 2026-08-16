import React from "react";
import { Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import TextField from "../../components/fields/TextField.jsx";
import TextareaField from "../../components/fields/TextareaField.jsx";
import CheckboxField from "../../components/fields/CheckboxField.jsx";

// settings.about_paragraphs is the trickiest shape in the app:
//   Array<{ id: string, parts: Array<string | { text, href, internal? }> }>
//
// Each "part" is either a plain string (rendered as plain text on the site)
// or a { text, href, internal } object (rendered as a link). There is no
// separate "type" field in the data — the type toggle below is purely a UI
// affordance that's inferred from typeof(part) on load, and switching it
// converts the stored value's shape immediately so the array always
// round-trips as the same mixed string/object list the server expects.

function typePill(active) {
  return `rounded px-2 py-1 text-xs font-medium ${
    active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
  }`;
}

function PartEditor({ part, onChange, onRemove, onMoveUp, onMoveDown, canMoveUp, canMoveDown }) {
  const isLink = typeof part === "object" && part !== null;

  function setType(nextIsLink) {
    if (nextIsLink === isLink) return;
    if (nextIsLink) {
      onChange({ text: typeof part === "string" ? part : "", href: "", internal: false });
    } else {
      onChange(isLink ? part.text || "" : "");
    }
  }

  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex gap-1">
          <button type="button" onClick={() => setType(false)} className={typePill(!isLink)}>
            Plain text
          </button>
          <button type="button" onClick={() => setType(true)} className={typePill(isLink)}>
            Link
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onMoveUp} disabled={!canMoveUp} className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30" aria-label="Move up">
            <ArrowUp size={13} />
          </button>
          <button type="button" onClick={onMoveDown} disabled={!canMoveDown} className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30" aria-label="Move down">
            <ArrowDown size={13} />
          </button>
          <button type="button" onClick={onRemove} className="rounded p-1 text-red-500 hover:bg-red-100" aria-label="Remove part">
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {!isLink ? (
        <TextareaField value={part} onChange={onChange} rows={2} />
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          <TextField label="Text" value={part.text} onChange={(v) => onChange({ ...part, text: v })} />
          <TextField label="Href" value={part.href} onChange={(v) => onChange({ ...part, href: v })} />
          <CheckboxField label="Internal link" value={part.internal} onChange={(v) => onChange({ ...part, internal: v })} />
        </div>
      )}
    </div>
  );
}

function ParagraphEditor({ paragraph, onChange, onRemove, onMoveUp, onMoveDown, canMoveUp, canMoveDown }) {
  const parts = Array.isArray(paragraph.parts) ? paragraph.parts : [];

  function setParts(nextParts) {
    onChange({ ...paragraph, parts: nextParts });
  }

  function updatePart(idx, nextValue) {
    setParts(parts.map((p, i) => (i === idx ? nextValue : p)));
  }

  function removePart(idx) {
    setParts(parts.filter((_, i) => i !== idx));
  }

  function movePart(idx, dir) {
    const target = idx + dir;
    if (target < 0 || target >= parts.length) return;
    const next = parts.slice();
    [next[idx], next[target]] = [next[target], next[idx]];
    setParts(next);
  }

  function addPart() {
    setParts([...parts, ""]);
  }

  return (
    <div className="rounded-lg border border-slate-300 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="w-40">
          <TextField label="Paragraph ID" value={paragraph.id} onChange={(v) => onChange({ ...paragraph, id: v })} />
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onMoveUp} disabled={!canMoveUp} className="rounded p-1.5 text-slate-500 hover:bg-slate-200 disabled:opacity-30" aria-label="Move paragraph up">
            <ArrowUp size={14} />
          </button>
          <button type="button" onClick={onMoveDown} disabled={!canMoveDown} className="rounded p-1.5 text-slate-500 hover:bg-slate-200 disabled:opacity-30" aria-label="Move paragraph down">
            <ArrowDown size={14} />
          </button>
          <button type="button" onClick={onRemove} className="rounded p-1.5 text-red-500 hover:bg-red-100" aria-label="Remove paragraph">
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {parts.map((part, idx) => (
          <PartEditor
            key={idx}
            part={part}
            onChange={(v) => updatePart(idx, v)}
            onRemove={() => removePart(idx)}
            onMoveUp={() => movePart(idx, -1)}
            onMoveDown={() => movePart(idx, 1)}
            canMoveUp={idx > 0}
            canMoveDown={idx < parts.length - 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={addPart}
        className="mt-2 inline-flex items-center gap-1 rounded-md border border-dashed border-slate-400 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-white"
      >
        <Plus size={13} /> Add Part
      </button>
    </div>
  );
}

export default function AboutParagraphsSection({ value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection("about_paragraphs", remoteValue);
  const paragraphs = Array.isArray(value) ? value : [];

  function updateParagraph(idx, next) {
    setValue(paragraphs.map((p, i) => (i === idx ? next : p)));
  }

  function removeParagraph(idx) {
    setValue(paragraphs.filter((_, i) => i !== idx));
  }

  function moveParagraph(idx, dir) {
    const target = idx + dir;
    if (target < 0 || target >= paragraphs.length) return;
    const next = paragraphs.slice();
    [next[idx], next[target]] = [next[target], next[idx]];
    setValue(next);
  }

  function addParagraph() {
    setValue([...paragraphs, { id: `p${paragraphs.length + 1}`, parts: [""] }]);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">
        The About page's body copy. Each paragraph is a sequence of parts — plain text or inline links.
      </p>

      <div className="space-y-4">
        {paragraphs.map((paragraph, idx) => (
          <ParagraphEditor
            key={idx}
            paragraph={paragraph}
            onChange={(next) => updateParagraph(idx, next)}
            onRemove={() => removeParagraph(idx)}
            onMoveUp={() => moveParagraph(idx, -1)}
            onMoveDown={() => moveParagraph(idx, 1)}
            canMoveUp={idx > 0}
            canMoveDown={idx < paragraphs.length - 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={addParagraph}
        className="mt-3 inline-flex items-center gap-1 rounded-md border border-dashed border-slate-400 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
      >
        <Plus size={14} /> Add Paragraph
      </button>

      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
