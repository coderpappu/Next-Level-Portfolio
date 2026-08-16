const db = require("../db");

// Best-effort human label for an activity row — tries the most likely
// "name-ish" column first, falls back to the numeric id.
function pickLabel(row) {
  if (!row) return null;
  return (
    row.name ||
    row.title ||
    row.label ||
    row.role ||
    row.route ||
    row.slug ||
    row.quote ||
    row.filename ||
    (row.id ? `#${row.id}` : null)
  );
}

// Logging must never break the mutation it's recording — failures are
// swallowed (and reported to the server log) rather than propagated.
async function logActivity({ email, action, resource, resourceId, resourceLabel }) {
  try {
    await db("activity_log").insert({
      admin_email: email || null,
      action,
      resource,
      resource_id: resourceId ?? null,
      resource_label: resourceLabel ? String(resourceLabel).slice(0, 255) : null,
    });
  } catch (err) {
    console.error("Failed to record activity log:", err.message);
  }
}

module.exports = { logActivity, pickLabel };
