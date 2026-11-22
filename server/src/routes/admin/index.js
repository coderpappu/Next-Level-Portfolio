const express = require("express");
const { requireAuth } = require("../../middleware/auth");
const { collectionRouter } = require("../../lib/collectionRouter");
const settingsRouter = require("./settings");
const postsRouter = require("./posts");
const mediaRouter = require("../media");
const activityRouter = require("./activity");

const router = express.Router();

// Every route under /api/admin requires a valid admin JWT.
router.use(requireAuth);

// The 12 resources whose CRUD shape is identical — see
// src/lib/collectionRouter.js for what each generated router exposes
// (list/get/create/update/delete, plus /reorder when hasSortOrder).
const COLLECTIONS = [
  {
    path: "projects",
    table: "projects",
    fields: [
      "slug",
      "name",
      "category",
      "role",
      "year",
      "description",
      "stack",
      "live_url",
      "repo_url",
      "image_url",
      "constraint_text",
      "seo_title",
      "seo_description",
      "sort_order",
    ],
    jsonFields: ["stack"],
  },
  {
    path: "awards",
    table: "awards",
    fields: [
      "title",
      "subtitle",
      "year",
      "role",
      "description",
      "image_url",
      "links",
      "seo_title",
      "seo_description",
      "sort_order",
    ],
    jsonFields: ["links"],
  },
  {
    path: "testimonials",
    table: "testimonials",
    fields: ["quote", "name", "title", "avatar_url", "sort_order"],
  },
  {
    path: "experience",
    table: "experience",
    fields: [
      "role",
      "org",
      "type",
      "location",
      "period",
      "summary",
      "description",
      "highlights",
      "stack",
      "url",
      "logo_url",
      "sort_order",
    ],
    // NOTE: `stack` here is a plain display string ("React, Node.js"), not
    // jsonb — unlike projects.stack. Only `highlights` needs stringifying.
    jsonFields: ["highlights"],
  },
  {
    path: "education",
    table: "education",
    fields: ["institution", "degree", "period", "note", "sort_order"],
  },
  {
    path: "services",
    table: "services",
    fields: [
      "title",
      "description",
      "slug",
      "content_md",
      "cover_image_url",
      "seo_title",
      "seo_description",
      "sort_order",
    ],
  },
  {
    path: "process-steps",
    table: "process_steps",
    fields: ["title", "description", "sort_order"],
  },
  {
    path: "tech-stack-groups",
    table: "tech_stack_groups",
    fields: ["label", "items", "sort_order"],
    jsonFields: ["items"],
  },
  {
    path: "socials",
    table: "socials",
    fields: ["group", "icon", "title", "href", "is_download", "sort_order"],
  },
  {
    path: "known-for",
    table: "known_for",
    fields: ["label", "suffix", "href", "project_id", "sort_order"],
  },
  {
    path: "professional-profiles",
    table: "professional_profiles",
    fields: ["label", "href", "sort_order"],
  },
  {
    path: "pages",
    table: "pages",
    fields: [
      "route",
      "label",
      "meta_title",
      "meta_description",
      "og_image_url",
      "canonical_path",
      "no_index",
    ],
    hasSortOrder: false,
  },
];

for (const config of COLLECTIONS) {
  router.use(`/${config.path}`, collectionRouter(config));
}

router.use("/settings", settingsRouter);
router.use("/posts", postsRouter);
router.use("/media", mediaRouter);
router.use("/activity", activityRouter);

module.exports = router;
