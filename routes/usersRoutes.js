const express = require('express');
const usersController = require('../controllers/usersControllers');
const router = express.Router();

router.get('/:ID', usersController.getUser);

router.get('/:ID/pokemon', usersController.getUsersPokemon);

router.post('/', usersController.createUser);

router.patch('/:ID', usersController.updateUser);

router.delete('/:ID', usersController.deleteUser);

router.all('*', (req, res) => {
  res.send('This users route does not exist');
});

module.exports = router;
