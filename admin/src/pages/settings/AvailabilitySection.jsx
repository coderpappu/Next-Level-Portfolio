import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import TextField from "../../components/fields/TextField.jsx";
import CheckboxField from "../../components/fields/CheckboxField.jsx";

export default function AvailabilitySection({ value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection("availability", remoteValue);
  const v = value || {};
  const set = (key) => (val) => setValue({ ...v, [key]: val });

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">Controls the "available for work" indicator on the site.</p>
      <div className="max-w-sm space-y-4">
        <CheckboxField label="Currently open to work" value={v.open} onChange={set("open")} />
        <TextField label="Label" value={v.label} onChange={set("label")} />
      </div>
      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
