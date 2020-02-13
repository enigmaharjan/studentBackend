
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('student_fee');

  return await knex.schema.createTable('student_fee', table=>{
      table.increments();
      table.integer('student_id');
      table.string('batch');
      table.string('amount');
      table.string('fee_date');
      table.string('due_date');
      table.boolean('cleared');

      table.foreign('student_id').references('student_id').inTable('student_list');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_tbl');
};
