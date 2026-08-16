const express = require("express");
const db = require("../db");

const router = express.Router();

const LIST_COLUMNS = [
  "slug",
  "title",
  "excerpt",
  "cover_image_url",
  "tags",
  "published_at",
];

router.get("/", async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const pageSize = Math.min(50, Math.max(1, Number(req.query.pageSize) || 10));

    const base = db("posts").where({ status: "published" });

    const [{ count }] = await base.clone().count({ count: "*" });
    const items = await base
      .clone()
      .select(LIST_COLUMNS)
      .orderBy("published_at", "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    res.set("Cache-Control", "public, max-age=120");
    res.json({ items, total: Number(count), page, pageSize });
  } catch (err) {
    next(err);
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const post = await db("posts")
      .where({ slug: req.params.slug, status: "published" })
      .first();
    if (!post) return res.status(404).json({ error: "Not found" });
    res.set("Cache-Control", "public, max-age=120");
    res.json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
