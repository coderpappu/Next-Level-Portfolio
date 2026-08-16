exports.up = function (knex) {
  return knex.schema.createTable("experience", (table) => {
    table.increments("id").primary();
    table.string("role", 255).notNullable();
    table.string("org", 255).notNullable();
    table.string("type", 64);
    table.string("location", 255);
    table.string("period", 64);
    table.string("summary", 500);
    table.text("description");
    table.jsonb("highlights").notNullable().defaultTo("[]");
    // Stays a plain display string ("React, Node.js, ...") to match the
    // existing frontend shape — unlike projects.stack, which is an array.
    table.string("stack", 500);
    table.string("url", 500);
    table.integer("sort_order").unsigned().notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("experience");
};
