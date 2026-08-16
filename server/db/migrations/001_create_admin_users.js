exports.up = function (knex) {
  return knex.schema.createTable("admin_users", (table) => {
    table.increments("id").primary();
    table.string("email", 255).notNullable().unique();
    table.string("password_hash", 255).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("admin_users");
};
