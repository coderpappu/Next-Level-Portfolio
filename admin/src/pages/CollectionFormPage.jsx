import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { api } from "../api.js";
import { getResourceConfig } from "../resourceConfigs.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";
import FieldRenderer from "../components/FieldRenderer.jsx";

// Field types with enough content to warrant the full form width — everything
// else (text/url/select/checkbox/project-select) is compact enough to sit
// two-per-row, which is what actually fixes a form full of short fields
// (Type, Location, Period, Year…) looking like empty boxes down a narrow column.
const FULL_WIDTH_TYPES = new Set(["textarea", "array-of-strings", "array-of-objects", "image", "richtext"]);

function defaultValueFor(field) {
  switch (field.type) {
    case "checkbox":
      return false;
    case "array-of-strings":
    case "array-of-objects":
      return [];
    case "project-select":
      return null;
    default:
      return "";
  }
}

function buildInitialForm(config, row) {
  const form = {};
  for (const field of config.fields) {
    if (row && Object.prototype.hasOwnProperty.call(row, field.name)) {
      form[field.name] = row[field.name] ?? defaultValueFor(field);
    } else {
      form[field.name] = defaultValueFor(field);
    }
  }
  return form;
}

// Generic create/edit form for all 12 collection-router-backed resources —
// renders one <FieldRenderer> per field in resourceConfigs.js and POSTs or
// PUTs the resulting object shape back to the matching /api/admin/{apiPath}.
export default function CollectionFormPage() {
  const { uiPath, id } = useParams();
  const config = getResourceConfig(uiPath);
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState(() => buildInitialForm(config, null));
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isNew) {
      setForm(buildInitialForm(config, null));
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    api
      .get(`/api/admin/${config.apiPath}/${id}`)
      .then((row) => setForm(buildInitialForm(config, row)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiPath, id]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (isNew) {
        await api.post(`/api/admin/${config.apiPath}`, form);
      } else {
        await api.put(`/api/admin/${config.apiPath}/${id}`, form);
      }
      navigate(`/${config.uiPath}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm(`Delete this ${config.singular.toLowerCase()}? This cannot be undone.`)) return;
    setSaving(true);
    setError(null);
    try {
      await api.del(`/api/admin/${config.apiPath}/${id}`);
      navigate(`/${config.uiPath}`);
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  }

  if (!config) {
    return <Banner type="error">Unknown resource "{uiPath}".</Banner>;
  }

  return (
    <div>
      <PageHeader
        title={isNew ? `New ${config.singular}` : `Edit ${config.singular}`}
        actions={
          !isNew && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={saving}
              className="inline-flex items-center gap-1 rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-60"
            >
              <Trash2 size={15} /> Delete
            </button>
          )
        }
      />

      <Banner type="error">{error}</Banner>

      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
            {config.fields.map((field) => (
              <div key={field.name} className={FULL_WIDTH_TYPES.has(field.type) ? "md:col-span-2" : ""}>
                <FieldRenderer field={field} value={form[field.name]} onChange={(v) => setField(field.name, v)} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => navigate(`/${config.uiPath}`)}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
