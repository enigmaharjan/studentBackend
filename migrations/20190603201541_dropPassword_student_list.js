
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('student_list')

  return await knex.schema.alterTable('student_list',tbl=>{
      tbl.dropColumn('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_list');
};
