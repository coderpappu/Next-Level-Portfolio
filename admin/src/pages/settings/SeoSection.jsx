import React from "react";
import { useSettingSection } from "./useSettingSection.js";
import SectionFooter from "./SectionFooter.jsx";
import TextField from "../../components/fields/TextField.jsx";
import TextareaField from "../../components/fields/TextareaField.jsx";
import ImagePicker from "../../components/ImagePicker.jsx";

export default function SeoSection({ value: remoteValue }) {
  const { value, setValue, save, saving, error, success } = useSettingSection("seo", remoteValue);
  const v = value || {};
  const set = (key) => (val) => setValue({ ...v, [key]: val });

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">
        Sitewide SEO defaults, used as a fallback when a page, post, or project doesn't override them.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Site Name" value={v.siteName} onChange={set("siteName")} />
        <TextField label="Title Template" value={v.titleTemplate} onChange={set("titleTemplate")} hint="%s is replaced with the page title" />
        <div className="sm:col-span-2">
          <TextareaField label="Default Description" value={v.defaultDescription} onChange={set("defaultDescription")} rows={3} />
        </div>
        <TextField label="Twitter Handle" value={v.twitterHandle} onChange={set("twitterHandle")} />
        <TextField label="Locale" value={v.locale} onChange={set("locale")} />
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Theme Color</span>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={/^#[0-9a-fA-F]{6}$/.test(v.themeColor || "") ? v.themeColor : "#000000"}
              onChange={(e) => set("themeColor")(e.target.value)}
              className="h-9 w-12 shrink-0 rounded border border-slate-300"
            />
            <input
              type="text"
              value={v.themeColor ?? ""}
              onChange={(e) => set("themeColor")(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
            />
          </div>
        </label>
      </div>

      <div className="mt-4">
        <ImagePicker label="Default OG Image" value={v.defaultOgImage} onChange={set("defaultOgImage")} category="profile" />
      </div>

      <SectionFooter saving={saving} error={error} success={success} onSave={save} />
    </div>
  );
}
