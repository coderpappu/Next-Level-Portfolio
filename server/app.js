const path = require("path");
const express = require("express");
const cors = require("cors");
const corsOptions = require("./src/middleware/cors");
const errorHandler = require("./src/middleware/errorHandler");

const authRoutes = require("./src/routes/auth");
const siteContentRoutes = require("./src/routes/siteContent");
const publicPostsRoutes = require("./src/routes/posts");
const publicPagesRoutes = require("./src/routes/pages");
const adminRoutes = require("./src/routes/admin");

const app = express();

app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(express.json({ limit: "2mb" }));
app.use(cors(corsOptions));

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), { maxAge: "30d" }),
);

app.use("/api/auth", authRoutes);
app.use("/api/public/site-content", siteContentRoutes);
app.use("/api/public/posts", publicPostsRoutes);
app.use("/api/public/pages", publicPagesRoutes);
app.use("/api/admin", adminRoutes);

// The admin SPA is built separately (see /admin) and its output copied into
// server/public/admin before each deploy — served same-origin so the admin
// app never has to deal with CORS to talk to its own API.
const adminDist = path.join(__dirname, "public", "admin");
app.use("/admin", express.static(adminDist));
app.get(/^\/admin(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(adminDist, "index.html"));
});

app.use(errorHandler);

module.exports = app;
