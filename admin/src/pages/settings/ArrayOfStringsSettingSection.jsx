import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import ArrayOfStringsInput from "../../components/fields/ArrayOfStringsInput.jsx";

// Reused for settings.expertise and settings.skills — same tag-input shape
// as projects.stack.
export default function ArrayOfStringsSettingSection({ sectionKey, description, value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection(sectionKey, remoteValue);

  return (
    <div>
      {description && <p className="mb-4 text-sm text-slate-500">{description}</p>}
      <ArrayOfStringsInput value={value} onChange={setValue} />
      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
