// Per-route SEO metadata for the site's static pages (Home, About, Projects
// index, etc.) — the "every page gets its own SEO controls" requirement,
// distinct from the per-entity seo_title/seo_description on projects/awards/
// posts, which cover content that has (or will have) its own detail route.
exports.up = function (knex) {
  return knex.schema.createTable("pages", (table) => {
    table.increments("id").primary();
    table.string("route", 191).notNullable().unique();
    table.string("label", 255).notNullable();
    table.string("meta_title", 255).notNullable();
    table.string("meta_description", 500).notNullable();
    table.string("og_image_url", 500);
    table.string("canonical_path", 191);
    table.boolean("no_index").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pages");
};
