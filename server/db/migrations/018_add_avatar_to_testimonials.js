exports.up = function (knex) {
  return knex.schema.alterTable("testimonials", (table) => {
    table.string("avatar_url", 500);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("testimonials", (table) => {
    table.dropColumn("avatar_url");
  });
};
