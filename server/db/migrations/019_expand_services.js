// Turns each service from a card-only {title, description} into something
// with its own dedicated, SEO-indexable detail page: a slug for the route,
// long-form content (Markdown, images included via the same rich editor as
// blog posts), a cover image, and SEO overrides.
exports.up = function (knex) {
  return knex.schema.alterTable("services", (table) => {
    table.string("slug", 191).unique();
    table.text("content_md");
    table.string("cover_image_url", 500);
    table.string("seo_title", 255);
    table.string("seo_description", 500);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("services", (table) => {
    table.dropColumn("slug");
    table.dropColumn("content_md");
    table.dropColumn("cover_image_url");
    table.dropColumn("seo_title");
    table.dropColumn("seo_description");
  });
};
