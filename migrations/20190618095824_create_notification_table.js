
exports.up = async function(knex, Promise) {
  // await knex.schema.hasTable('notification_tbl')

  // return await knex.schema.createTable('notification_tbl', tbl=>{
  //     tbl.increments();
  //     tbl.string('title');
  //     tbl.string('content');
  // });
};

exports.down = function(knex, Promise) {
  // await knex.schema.dropTable('notification_tbl');
};
