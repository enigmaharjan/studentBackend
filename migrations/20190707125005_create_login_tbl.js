const bcrypt = require('bcrypt')
const password = bcrypt.hashSync('admin', 10);
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('login_tbl');
  return await knex.schema.createTable('login_tbl', tbl =>{
      tbl.increments();
      tbl.string('username').unique();
      tbl.string('password');
      tbl.string('designation')
  }).then(function(){
      return knex('login_tbl').insert({
          'username':'admin',
          'password':password,
          'designation':'admin'
      })
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('login_tbl');
  
};
