// Public read of per-route SEO metadata. Small, fixed-size dataset (one row
// per site route) so it's returned in one shot rather than paginated — the
// frontend matches the current pathname against `route` client-side.
const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const rows = await db("pages").orderBy("route", "asc");
    res.set("Cache-Control", "public, max-age=300");
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
