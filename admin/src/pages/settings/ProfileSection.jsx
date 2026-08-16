import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import TextField from "../../components/fields/TextField.jsx";
import TextareaField from "../../components/fields/TextareaField.jsx";
import ImagePicker from "../../components/ImagePicker.jsx";

export default function ProfileSection({ value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection("profile", remoteValue);
  const v = value || {};
  const set = (key) => (val) => setValue({ ...v, [key]: val });

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">Core identity info shown across the site.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Name" value={v.name} onChange={set("name")} />
        <TextField label="Role A" value={v.roleA} onChange={set("roleA")} />
        <TextField label="Role B" value={v.roleB} onChange={set("roleB")} />
        <TextField label="Headline" value={v.headline} onChange={set("headline")} />
        <div className="sm:col-span-2">
          <TextareaField label="Intro" value={v.intro} onChange={set("intro")} rows={3} />
        </div>
        <TextField label="Location" value={v.location} onChange={set("location")} />
        <TextField label="Maps URL" value={v.mapsUrl} onChange={set("mapsUrl")} />
        <TextField label="Email" value={v.email} onChange={set("email")} type="email" />
        <TextField label="Site" value={v.site} onChange={set("site")} />
        <TextField label="Calendly" value={v.calendly} onChange={set("calendly")} />
        <TextField label="GitHub" value={v.github} onChange={set("github")} />
        <TextField label="LinkedIn" value={v.linkedin} onChange={set("linkedin")} />
        <TextField label="Facebook" value={v.facebook} onChange={set("facebook")} />
        <TextField label="WhatsApp" value={v.whatsapp} onChange={set("whatsapp")} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ImagePicker label="Avatar" value={v.avatar_url} onChange={set("avatar_url")} category="profile" />
        <ImagePicker label="Workstation Image" value={v.workstation_image_url} onChange={set("workstation_image_url")} category="profile" />
        <ImagePicker
          label="CV / Resume file"
          value={v.cv_url}
          onChange={set("cv_url")}
          category="profile"
          accept="application/pdf"
          dropLabel="Drag and drop a PDF, or click to browse"
          uploadHint="PDF — up to 8MB"
          pickerTitle="Choose CV / résumé"
          chooseLabel="Choose file"
          changeLabel="Change file"
        />
      </div>

      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
