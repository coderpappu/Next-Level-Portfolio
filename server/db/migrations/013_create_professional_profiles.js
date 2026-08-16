exports.up = function (knex) {
  return knex.schema.createTable("professional_profiles", (table) => {
    table.increments("id").primary();
    table.string("label", 255).notNullable();
    table.string("href", 500).notNullable();
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("professional_profiles");
};
