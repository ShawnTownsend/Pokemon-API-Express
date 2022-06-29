/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, name: 'Devon Thompson', bio: 'Pikachu fanatic', age: 22},
    {id: 2, name: 'Yumi Nakamura', bio: 'I love Pokemon!', age: 32},
    {id: 3, name: 'Ashton Ketchumington', bio: 'I choose you!', age: 17},
    {id: 4, name: 'Danny Fenton', bio: 'Going ghost!', age: 26},
    {id: 5, name: 'Phantom Stranger', bio: 'Gotta catch them all!', age: 50}
  ]);
};
