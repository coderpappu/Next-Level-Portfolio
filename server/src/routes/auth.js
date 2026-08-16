const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const db = require("../db");
const { requireAuth } = require("../middleware/auth");
const { logActivity } = require("../lib/activityLog");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts. Try again later." },
});

router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }

    const admin = await db("admin_users").where({ email }).first();
    const ok = admin && (await bcrypt.compare(password, admin.password_hash));
    if (!ok) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { sub: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    logActivity({ email: admin.email, action: "logged_in", resource: "auth", resourceLabel: admin.email });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ email: req.admin.email });
});

module.exports = router;
