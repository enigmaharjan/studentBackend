
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('tbl_batch')
  
    return await knex.schema.createTable('tbl_batch', tbl=>{
        tbl.increments();
        tbl.string('batch_name');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tbl_batch');
  };
  