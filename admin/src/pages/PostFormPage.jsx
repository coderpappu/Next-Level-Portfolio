import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { api } from "../api.js";
import { slugify } from "../lib/slugify.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";
import TextField from "../components/fields/TextField.jsx";
import TextareaField from "../components/fields/TextareaField.jsx";
import SelectField from "../components/fields/SelectField.jsx";
import ArrayOfStringsInput from "../components/fields/ArrayOfStringsInput.jsx";
import ImagePicker from "../components/ImagePicker.jsx";
import MarkdownEditor from "../components/MarkdownEditor.jsx";

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
];

const EMPTY_FORM = {
  title: "",
  slug: "",
  excerpt: "",
  content_md: "",
  cover_image_url: "",
  tags: [],
  status: "draft",
  seo_title: "",
  seo_description: "",
};

function formatPublishedAt(value) {
  if (!value) return "Not yet published";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "Not yet published";
  return d.toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default function PostFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState(EMPTY_FORM);
  const [publishedAt, setPublishedAt] = useState(null);
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isNew) {
      setForm(EMPTY_FORM);
      setPublishedAt(null);
      setSlugTouched(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    api
      .get(`/api/admin/posts/${id}`)
      .then((row) => {
        setForm({
          title: row.title || "",
          slug: row.slug || "",
          excerpt: row.excerpt || "",
          content_md: row.content_md || "",
          cover_image_url: row.cover_image_url || "",
          tags: row.tags || [],
          status: row.status || "draft",
          seo_title: row.seo_title || "",
          seo_description: row.seo_description || "",
        });
        setPublishedAt(row.published_at || null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isNew]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleTitleChange(value) {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  }

  function handleSlugChange(value) {
    setSlugTouched(true);
    setField("slug", value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (isNew) {
        await api.post("/api/admin/posts", form);
      } else {
        await api.put(`/api/admin/posts/${id}`, form);
      }
      navigate("/posts");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm(`Delete "${form.title}"? This cannot be undone.`)) return;
    setSaving(true);
    setError(null);
    try {
      await api.del(`/api/admin/posts/${id}`);
      navigate("/posts");
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  }

  return (
    <div>
      <PageHeader
        title={isNew ? "New Post" : "Edit Post"}
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
          <div className="grid grid-cols-1 gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
            <TextField label="Title" value={form.title} onChange={handleTitleChange} required />
            <TextField label="Slug" value={form.slug} onChange={handleSlugChange} required hint="Must be unique." />
            <SelectField label="Status" value={form.status} onChange={(v) => setField("status", v)} options={STATUS_OPTIONS} />
            <div>
              <span className="mb-1 block text-sm font-medium text-slate-700">Published</span>
              <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                {formatPublishedAt(publishedAt)}
              </p>
            </div>
            <div className="md:col-span-2">
              <TextareaField label="Excerpt" value={form.excerpt} onChange={(v) => setField("excerpt", v)} rows={2} />
            </div>
            <div className="md:col-span-2">
              <ImagePicker
                label="Cover Image"
                value={form.cover_image_url}
                onChange={(v) => setField("cover_image_url", v)}
                category="posts"
              />
            </div>
            <div className="md:col-span-2">
              <ArrayOfStringsInput label="Tags" value={form.tags} onChange={(v) => setField("tags", v)} />
            </div>
            <TextField label="SEO Title" value={form.seo_title} onChange={(v) => setField("seo_title", v)} />
            <TextareaField label="SEO Description" value={form.seo_description} onChange={(v) => setField("seo_description", v)} rows={2} />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <span className="mb-3 block text-sm font-medium text-slate-700">Content</span>
            {/* WYSIWYG — no visible Markdown syntax. Drop, paste, or use the
                toolbar's image button anywhere in the body to insert an
                image at that exact point; each upload goes through the same
                media pipeline as the cover image. */}
            <MarkdownEditor markdown={form.content_md} onChange={(v) => setField("content_md", v)} />
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
              onClick={() => navigate("/posts")}
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
