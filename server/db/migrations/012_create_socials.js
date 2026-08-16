exports.up = function (knex) {
  return knex.schema.createTable("socials", (table) => {
    table.increments("id").primary();
    // "profiles" | "contact" — which cluster this link renders in.
    table.string("group", 32).notNullable();
    // Maps to a lucide icon component in the frontend's ICONS lookup.
    table.string("icon", 32).notNullable();
    table.string("title", 255).notNullable();
    table.string("href", 500).notNullable();
    table.boolean("is_download").notNullable().defaultTo(false);
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("socials");
};
