/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemon').del()
  await knex('pokemon').insert([
    {user_id: 1, name: 'bulbasaur', hp: 45, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'},
    {user_id: 1, name: 'ivysaur', hp: 60, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'},
    {user_id: 2, name: 'venusaur', hp: 80, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png'},
    {user_id: 2, name: 'charmander', hp: 39, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'},
    {user_id: 3, name: 'charmeleon', hp: 58, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png'},
    {user_id: 3, name: 'charizard', hp: 78, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'},
    {user_id: 4, name: 'squirtle', hp: 44, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png'},
    {user_id: 4, name: 'wartortle', hp: 59, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png'},
    {user_id: 5, name: 'blastoise', hp: 79, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png'},
    {user_id: 5, name: 'caterpie', hp: 45, front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png'}
  ]);
};
