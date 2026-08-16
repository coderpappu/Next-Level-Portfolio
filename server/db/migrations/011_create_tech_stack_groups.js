exports.up = function (knex) {
  return knex.schema.createTable("tech_stack_groups", (table) => {
    table.increments("id").primary();
    table.string("label", 255).notNullable();
    table.jsonb("items").notNullable().defaultTo("[]");
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tech_stack_groups");
};
