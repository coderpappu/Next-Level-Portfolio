exports.up = function (knex) {
  return knex.schema.createTable("education", (table) => {
    table.increments("id").primary();
    table.string("institution", 255).notNullable();
    table.string("degree", 255);
    table.string("period", 64);
    table.text("note");
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("education");
};
