exports.up = function (knex) {
  return knex.schema.createTable("awards", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.string("subtitle", 255);
    table.string("year", 16);
    table.string("role", 500);
    table.text("description");
    table.string("image_url", 500);
    table.jsonb("links").notNullable().defaultTo("[]");
    table.string("seo_title", 255);
    table.string("seo_description", 500);
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("awards");
};
