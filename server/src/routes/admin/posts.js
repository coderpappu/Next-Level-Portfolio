const express = require("express");
const db = require("../../db");
const { slugify } = require("../../lib/slugify");
const { pick } = require("../../lib/collectionRouter");
const { logActivity } = require("../../lib/activityLog");

const router = express.Router();

const FIELDS = [
  "title",
  "slug",
  "excerpt",
  "content_md",
  "cover_image_url",
  "tags",
  "status",
  "published_at",
  "seo_title",
  "seo_description",
];

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("posts").orderBy("created_at", "desc"));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const row = await db("posts").where({ id: req.params.id }).first();
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(row);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = pick(req.body, FIELDS);
    if (!payload.slug) payload.slug = slugify(payload.title || "");
    if (payload.status === "published" && !payload.published_at) {
      payload.published_at = db.fn.now();
    }
    // See collectionRouter.js's stringifyJsonFields comment: pg serializes a
    // raw JS array as a Postgres ARRAY literal, not JSON, for a jsonb column.
    if (payload.tags) payload.tags = JSON.stringify(payload.tags);
    const [row] = await db("posts").insert(payload).returning("*");
    logActivity({ email: req.admin?.email, action: "created", resource: "posts", resourceId: row.id, resourceLabel: row.title });
    res.status(201).json(row);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const existing = await db("posts").where({ id: req.params.id }).first();
    if (!existing) return res.status(404).json({ error: "Not found" });

    const payload = pick(req.body, FIELDS);
    const becomingPublished =
      payload.status === "published" && existing.status !== "published";
    if (becomingPublished && !payload.published_at && !existing.published_at) {
      payload.published_at = db.fn.now();
    }
    if (payload.tags) payload.tags = JSON.stringify(payload.tags);
    payload.updated_at = db.fn.now();

    const [row] = await db("posts")
      .where({ id: req.params.id })
      .update(payload)
      .returning("*");
    logActivity({ email: req.admin?.email, action: "updated", resource: "posts", resourceId: row.id, resourceLabel: row.title });
    res.json(row);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const existing = await db("posts").where({ id: req.params.id }).first();
    if (!existing) return res.status(404).json({ error: "Not found" });
    await db("posts").where({ id: req.params.id }).del();
    logActivity({ email: req.admin?.email, action: "deleted", resource: "posts", resourceId: existing.id, resourceLabel: existing.title });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
