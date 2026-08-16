exports.up = function (knex) {
  return knex.schema.createTable("media", (table) => {
    table.increments("id").primary();
    table.string("filename", 255).notNullable();
    table.string("url", 500).notNullable();
    table.string("mime_type", 100);
    table.integer("size_bytes").unsigned();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("media");
};
