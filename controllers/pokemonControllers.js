const Pokemon = require('../models/pokemonModels');

const getPokemon = async (req, res) => {
  const pokemon = await Pokemon.getPokemonFromDB();
  console.log(pokemon);
  res.status(200).json(pokemon);
};

const createPokemon = async (req, res) => {
  const {
    user_id, name, hp, front, back,
  } = req.body;
  const pokemon = await Pokemon.createPokemonFromDB(user_id, name, hp, front, back);
  res.status(201).send(pokemon);
  res.end();
};

module.exports = {
  getPokemon,
  createPokemon,
};
