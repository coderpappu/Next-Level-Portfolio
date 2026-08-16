// Mirrors server/src/lib/slugify.js so the client-side slug suggestion in
// the blog post editor matches what the server would derive if slug were
// left blank.
export function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
