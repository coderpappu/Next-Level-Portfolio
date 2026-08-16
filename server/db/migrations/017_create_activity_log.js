exports.up = function (knex) {
  return knex.schema.createTable("activity_log", (table) => {
    table.increments("id").primary();
    table.string("admin_email", 255);
    // created | updated | deleted | reordered | logged_in | uploaded_media | deleted_media
    table.string("action", 32).notNullable();
    table.string("resource", 64).notNullable();
    table.integer("resource_id").unsigned();
    table.string("resource_label", 255);
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());

    table.index(["created_at"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("activity_log");
};
