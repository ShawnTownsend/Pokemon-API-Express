const Users = require('../models/usersModel');

const getUser = async (req, res) => {
  const id = req.params.ID;
  const users = await Users.getSingleUserFromDB(id);
  if (users) {
    res.status(200).json(users);
  } else {
    res.sendStatus(404);
  }
};

const getUsersPokemon = async (req, res) => {
  const id = req.params.ID;
  const users = await Users.getUsersPokemonFromDB(id);
  if (users) {
    res.status(200).json(users);
  } else {
    res.sendStatus(404);
  }
};

const createUser = async (req, res) => {
  const { name, bio, age } = req.body;
  const users = await Users.createUserfromDB(name, bio, age);
  res.status(201).send(users);
  res.end();
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.ID);
  const { bio } = req.body;
  const users = await Users.updateUserFromDB(bio, id);
  res.status(200).send(users);
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.ID);
  const users = await Users.deleteUserFromDB(id);
  if (users) {
    res.status(204).json();
  }
  res.end();
};

module.exports = {
  getUser,
  getUsersPokemon,
  createUser,
  updateUser,
  deleteUser,
};
