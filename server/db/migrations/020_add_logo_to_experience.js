exports.up = function (knex) {
  return knex.schema.alterTable("experience", (table) => {
    table.string("logo_url", 500);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("experience", (table) => {
    table.dropColumn("logo_url");
  });
};
