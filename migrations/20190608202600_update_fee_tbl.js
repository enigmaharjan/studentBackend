
exports.up = async function(knex, Promise) {
  // await knex.schema.hasTable('student_fee')

  // return await knex.schema.updateTable('student_fee', tbl=>{
  //     tbl.string('student_name');
  // })
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('student_fee')
};
