exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("name", 255).notNullable();
    table.string("category", 255);
    table.string("role", 255);
    table.string("year", 16);
    table.text("description");
    table.jsonb("stack").notNullable().defaultTo("[]");
    table.string("live_url", 500);
    table.string("repo_url", 500);
    table.string("image_url", 500);
    table.text("constraint_text");
    // SEO overrides — falls back to site_settings.seo defaults when null.
    table.string("seo_title", 255);
    table.string("seo_description", 500);
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
