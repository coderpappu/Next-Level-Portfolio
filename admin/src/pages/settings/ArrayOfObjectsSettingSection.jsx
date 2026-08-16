import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import ArrayOfObjectsInput from "../../components/fields/ArrayOfObjectsInput.jsx";

// Reused for settings.stats, settings.fast_facts, settings.practice — each
// is just an array of small objects, same shape the awards.links editor
// already handles.
export default function ArrayOfObjectsSettingSection({ sectionKey, description, subfields, itemLabel, value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection(sectionKey, remoteValue);

  return (
    <div>
      {description && <p className="mb-4 text-sm text-slate-500">{description}</p>}
      <ArrayOfObjectsInput value={value} onChange={setValue} subfields={subfields} itemLabel={itemLabel} />
      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
