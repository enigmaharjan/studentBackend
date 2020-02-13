
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('student_list')

  return await knex.schema.alterTable('student_list', tbl=>{
      tbl.string('date_of_birth'),
      tbl.string('date_joined')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_list')
};
