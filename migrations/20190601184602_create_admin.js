
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("admin")

  return await knex.schema.createTable('admin', tbl=>{
      tbl.increments('adminId');
      tbl.string('admin_username');
      tbl.string('admin_password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};
