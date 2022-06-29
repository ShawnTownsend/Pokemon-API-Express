/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'Devon Thompson', bio: 'Pikachu fanatic', age: 22},
    {name: 'Yumi Nakamura', bio: 'I love Pokemon!', age: 32},
    {name: 'Ashton Ketchumington', bio: 'I choose you!', age: 17},
    {name: 'Danny Fenton', bio: 'Going ghost!', age: 26},
    {name: 'Phantom Stranger', bio: 'Gotta catch them all!', age: 50}
  ]);
};
