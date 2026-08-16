import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import TextField from "../../components/fields/TextField.jsx";
import TextareaField from "../../components/fields/TextareaField.jsx";
import ArrayOfObjectsInput from "../../components/fields/ArrayOfObjectsInput.jsx";

const ITEM_SUBFIELDS = [
  { name: "mode", label: "Mode", type: "text" },
  { name: "subject", label: "Subject", type: "text" },
  { name: "short", label: "Short", type: "textarea" },
  { name: "text", label: "Text", type: "textarea" },
];

export default function NowSection({ value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection("now", remoteValue);
  const v = value || {};
  const set = (key) => (val) => setValue({ ...v, [key]: val });

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">The "what I'm doing right now" section.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Updated" value={v.updated} onChange={set("updated")} />
        <TextField label="Headline" value={v.headline} onChange={set("headline")} />
        <div className="sm:col-span-2">
          <TextareaField label="Prose" value={v.prose} onChange={set("prose")} rows={3} />
        </div>
        <div className="sm:col-span-2">
          <TextField label="Lead" value={v.lead} onChange={set("lead")} />
        </div>
      </div>

      <div className="mt-4">
        <ArrayOfObjectsInput
          label="Items"
          value={v.items}
          onChange={set("items")}
          subfields={ITEM_SUBFIELDS}
          itemLabel="Now Item"
        />
      </div>

      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
