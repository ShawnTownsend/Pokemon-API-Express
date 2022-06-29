/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    // return knex.schema.createTable('user', (table) => {
    //   table.increments('id').primary();
    //   table.text('name').notNullable();
    //   table.text('bio').notNullable();
    //   table.integer('age').notNullable();
    // })
  
    //   .createTable('pokemon', (table) => {
    //     table.increments('id').primary();
    //     table.integer('user_id').references('id').inTable('user');
    //     table.text('name').notNullable();
    //     table.integer('hp').notNullable();
    //     table.text('front');
    //     table.text('back');
    //   });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    // return knex.schema.dropTable('user').dropTable('pokemon');
  };
  