
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('batchTbl')

  return await knex.schema.createTable('batchTbl', tbl=>{
      tbl.increments();
      tbl.string('batch_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('batchTbl');
};
