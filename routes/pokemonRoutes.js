const express = require('express');
const pokemonController = require('../controllers/pokemonControllers');
const router = express.Router();

router.get('/', pokemonController.getPokemon);

router.post('/', pokemonController.createPokemon);

router.all('*', (req, res) => {
  res.send('This pokemon route does not exist');
});

module.exports = router;
