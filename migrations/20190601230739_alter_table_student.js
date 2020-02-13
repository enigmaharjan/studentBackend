
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('student_list')

  return await knex.schema.alterTable('student_list',tbl=>{
      tbl.dropColumn('date_of_birth'),
      tbl.dropColumn('date_joined')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_list')
};
