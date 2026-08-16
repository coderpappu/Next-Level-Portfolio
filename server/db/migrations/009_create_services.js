exports.up = function (knex) {
  return knex.schema.createTable("services", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("description");
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("services");
};
