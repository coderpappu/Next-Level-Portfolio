import React from "react";
import TextField from "./fields/TextField.jsx";
import TextareaField from "./fields/TextareaField.jsx";
import SelectField from "./fields/SelectField.jsx";
import CheckboxField from "./fields/CheckboxField.jsx";
import ArrayOfStringsInput from "./fields/ArrayOfStringsInput.jsx";
import ArrayOfObjectsInput from "./fields/ArrayOfObjectsInput.jsx";
import ProjectSelectField from "./fields/ProjectSelectField.jsx";
import ImagePicker from "./ImagePicker.jsx";
import MarkdownEditor from "./MarkdownEditor.jsx";

// Renders a single form field from a resourceConfigs.js field descriptor.
// Centralizing this dispatch is what lets <CollectionFormPage> stay generic
// across all 12 collections instead of needing a bespoke form per resource.
export default function FieldRenderer({ field, value, onChange }) {
  switch (field.type) {
    case "textarea":
      return <TextareaField label={field.label} value={value} onChange={onChange} required={field.required} hint={field.hint} />;
    case "select":
      return (
        <SelectField
          label={field.label}
          value={value}
          onChange={onChange}
          options={field.options}
          required={field.required}
          hint={field.hint}
        />
      );
    case "checkbox":
      return <CheckboxField label={field.label} value={value} onChange={onChange} hint={field.hint} />;
    case "array-of-strings":
      return <ArrayOfStringsInput label={field.label} value={value} onChange={onChange} hint={field.hint} />;
    case "array-of-objects":
      return (
        <ArrayOfObjectsInput
          label={field.label}
          value={value}
          onChange={onChange}
          subfields={field.subfields}
          itemLabel={field.itemLabel}
          hint={field.hint}
        />
      );
    case "image":
      return <ImagePicker label={field.label} value={value} onChange={onChange} category={field.category} hint={field.hint} />;
    case "richtext":
      return (
        <div>
          {field.label && <span className="mb-1 block text-sm font-medium text-slate-700">{field.label}</span>}
          <MarkdownEditor markdown={value || ""} onChange={onChange} />
          {field.hint && <span className="mt-1 block text-xs text-slate-500">{field.hint}</span>}
        </div>
      );
    case "project-select":
      return <ProjectSelectField label={field.label} value={value} onChange={onChange} />;
    case "url":
    case "text":
    default:
      return (
        <TextField label={field.label} value={value} onChange={onChange} required={field.required} hint={field.hint} />
      );
  }
}
