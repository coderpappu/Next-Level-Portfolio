const express = require("express");
const db = require("../../db");
const { logActivity } = require("../../lib/activityLog");

const router = express.Router();

// Matches the settings groups the seed script populates — see
// db/seeds/001_from_data_js.js. Keeps PUT from creating stray/misspelled keys.
const KNOWN_KEYS = new Set([
  "profile",
  "availability",
  "practice",
  "now",
  "about_paragraphs",
  "stats",
  "fast_facts",
  "expertise",
  "skills",
  "seo",
]);

router.get("/", async (req, res, next) => {
  try {
    const rows = await db("site_settings").select("key", "value");
    const out = {};
    for (const row of rows) out[row.key] = row.value;
    res.json(out);
  } catch (err) {
    next(err);
  }
});

router.put("/:key", async (req, res, next) => {
  try {
    const { key } = req.params;
    if (!KNOWN_KEYS.has(key)) {
      return res.status(400).json({ error: `Unknown settings key "${key}"` });
    }
    if (req.body.value === undefined) {
      return res.status(400).json({ error: "Body must be { value: ... }" });
    }

    // Every settings value is an array or object bound for a jsonb column —
    // see collectionRouter.js's stringifyJsonFields comment for why pg needs
    // it pre-stringified rather than passed as a raw JS array/object.
    const [row] = await db("site_settings")
      .insert({
        key,
        value: JSON.stringify(req.body.value),
        updated_at: db.fn.now(),
      })
      .onConflict("key")
      .merge(["value", "updated_at"])
      .returning("*");

    logActivity({ email: req.admin?.email, action: "updated", resource: "settings", resourceLabel: key });
    res.json(row);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
