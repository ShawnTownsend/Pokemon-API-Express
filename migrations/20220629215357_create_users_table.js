/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.text('name').notNullable();
      table.text('bio').notNullable();
      table.integer('age').notNullable();
    })
  
      .createTable('pokemon', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.text('name').notNullable();
        table.integer('hp').notNullable();
        table.text('front');
        table.text('back');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('users').dropTable('pokemon');
  };
  