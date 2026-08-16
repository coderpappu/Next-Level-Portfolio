exports.up = function (knex) {
  return knex.schema.createTable("testimonials", (table) => {
    table.increments("id").primary();
    table.text("quote").notNullable();
    table.string("name", 255).notNullable();
    table.string("title", 255);
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("testimonials");
};
