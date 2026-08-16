exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("title", 255).notNullable();
    table.string("excerpt", 500);
    // Raw Markdown, rendered client-side — never store rendered HTML so the
    // renderer can change later without a data migration.
    table.text("content_md");
    table.string("cover_image_url", 500);
    table.jsonb("tags").notNullable().defaultTo("[]");
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft");
    table.timestamp("published_at");
    table.string("seo_title", 255);
    table.string("seo_description", 500);
    table.timestamps(true, true);

    table.index(["status", "published_at"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};
