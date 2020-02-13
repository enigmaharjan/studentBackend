
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("student_list");
  return await knex.schema.createTable('student_list', table =>{
      table.integer('student_id').primary().unique();
      table.string('batch');
      table.string('student_name');
      table.string('address');
      table.string('email');
      table.string('contact_number');
      table.string('guardian_name');
      table.string('guardian_contact');
      table.string('password');
      table.date('date_of_birth');
      table.date('date_joined');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('studentTbl');
};
