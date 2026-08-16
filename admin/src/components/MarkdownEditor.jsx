import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  linkPlugin,
  linkDialogPlugin,
  thematicBreakPlugin,
  imagePlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  ListsToggle,
  InsertThematicBreak,
  Separator,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { api, API_BASE } from "../api.js";

// WYSIWYG post body editor — no visible Markdown syntax, but the stored/
// emitted value is still plain Markdown (content_md), so the backend schema
// and the public site's `marked.parse()` renderer needed zero changes.
//
// Images dropped/pasted/inserted anywhere in the body upload through the
// same /api/admin/media/upload endpoint the cover-image picker uses, and get
// written into the markdown as a genuinely absolute URL (not the relative
// path the rest of the app uses for image fields) — a discrete DB column
// like cover_image_url gets resolved to an absolute URL at render time via
// mediaUrl(), but a URL sitting inside free-text markdown has no such render
// step; marked() just outputs whatever's literally in the text. Baking in
// the absolute URL at upload time is what every real CMS does for exactly
// this reason. The one consequence: if the API's public domain ever changes,
// old posts' inline images need a one-time find/replace — not a design flaw,
// just the tradeoff every CMS makes for this feature.
//
// NOTE: this deliberately does NOT reuse api.js's mediaUrl() helper — that
// helper falls back to a bare relative path when API_BASE is unset (the
// intended *production* config, since the admin is served same-origin with
// the API there). A relative path is fine for an <img> the admin itself
// renders, but wrong here: this URL gets embedded in post content read by
// the public site, on a different origin, which has no way to resolve a
// relative path against the API's host. window.location.origin covers
// exactly that same-origin production case; API_BASE covers local dev,
// where the admin and API run on different ports.
async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("category", "posts");
  const row = await api.upload("/api/admin/media/upload", formData);
  const origin = API_BASE || window.location.origin;
  return `${origin}${row.url}`;
}

// MDXEditor treats `markdown` as an initial value, not a controlled prop —
// updating it after mount does NOT refresh the editor's visible content.
// PostFormPage only ever mounts this component once its async data fetch has
// resolved (gated behind its own `loading` check), so the initial value is
// already correct by the time this renders; no key-based remount trick needed.
export default function MarkdownEditor({ markdown, onChange }) {
  return (
    <div className="w-full rounded-md border border-slate-300 [&_.mdxeditor]:min-h-[24rem] [&_.mdxeditor]:text-sm">
      <MDXEditor
        markdown={markdown}
        onChange={onChange}
        contentEditableClassName="w-blog-editor-content px-4 py-3 text-sm"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          thematicBreakPlugin(),
          imagePlugin({ imageUploadHandler: uploadImage }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
}
