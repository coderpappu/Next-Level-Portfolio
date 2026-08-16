const express = require("express");
const db = require("../../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const offset = Math.max(0, Number(req.query.offset) || 0);

    const [items, [{ count }]] = await Promise.all([
      db("activity_log").orderBy("created_at", "desc").limit(limit).offset(offset),
      db("activity_log").count({ count: "*" }),
    ]);

    res.json({ items, total: Number(count), limit, offset });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
