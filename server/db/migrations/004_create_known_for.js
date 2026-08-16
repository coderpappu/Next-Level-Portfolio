exports.up = function (knex) {
  return knex.schema.createTable("known_for", (table) => {
    table.increments("id").primary();
    table.string("label", 255).notNullable();
    table.string("suffix", 255);
    table.string("href", 500);
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("SET NULL");
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("known_for");
};
