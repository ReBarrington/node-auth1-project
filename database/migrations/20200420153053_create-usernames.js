exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('accounts', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('username', 128).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.varchar('password').notNullable();
    });
  };
  
exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts');
  };