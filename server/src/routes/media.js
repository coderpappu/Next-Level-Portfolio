const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const db = require("../db");
const { logActivity } = require("../lib/activityLog");

const router = express.Router();

const UPLOADS_ROOT = path.join(__dirname, "..", "..", "uploads");
const ALLOWED_CATEGORIES = new Set(["projects", "awards", "posts", "profile", "testimonials", "services"]);
const EXT_BY_MIME = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "application/pdf": ".pdf", // CV/résumé uploads — not an image, skip sharp below
};
const IMAGE_MIMES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (!EXT_BY_MIME[file.mimetype]) {
      return cb(new Error("Unsupported file type — use JPEG, PNG, WebP, GIF, or PDF."));
    }
    cb(null, true);
  },
});

router.get("/", async (req, res, next) => {
  try {
    const rows = await db("media").orderBy("created_at", "desc");
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const category = ALLOWED_CATEGORIES.has(req.body.category)
      ? req.body.category
      : "profile";
    const dir = path.join(UPLOADS_ROOT, category);
    fs.mkdirSync(dir, { recursive: true });

    const ext = EXT_BY_MIME[req.file.mimetype];
    const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`;

    // Only actual images go through sharp (resize/re-encode) — a PDF has no
    // pixels to resize and sharp would just reject it.
    const processed = IMAGE_MIMES.has(req.file.mimetype)
      ? await sharp(req.file.buffer)
          .rotate() // normalize EXIF orientation before it's lost
          .resize({ width: 1600, withoutEnlargement: true })
          .toBuffer()
      : req.file.buffer;

    fs.writeFileSync(path.join(dir, filename), processed);

    const url = `/uploads/${category}/${filename}`;
    const [row] = await db("media")
      .insert({
        filename,
        url,
        mime_type: req.file.mimetype,
        size_bytes: processed.length,
      })
      .returning("*");

    logActivity({ email: req.admin?.email, action: "uploaded_media", resource: "media", resourceId: row.id, resourceLabel: row.filename });
    res.status(201).json(row);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const row = await db("media").where({ id: req.params.id }).first();
    if (!row) return res.status(404).json({ error: "Not found" });

    const filePath = path.join(UPLOADS_ROOT, row.url.replace(/^\/uploads\//, ""));
    fs.rm(filePath, { force: true }, () => {});

    await db("media").where({ id: req.params.id }).del();
    logActivity({ email: req.admin?.email, action: "deleted_media", resource: "media", resourceId: row.id, resourceLabel: row.filename });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
