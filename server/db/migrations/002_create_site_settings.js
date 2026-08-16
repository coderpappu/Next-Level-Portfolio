exports.up = function (knex) {
  return knex.schema.createTable("site_settings", (table) => {
    table.increments("id").primary();
    table.string("key", 64).notNullable().unique();
    table.jsonb("value").notNullable().defaultTo("{}");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_settings");
};
