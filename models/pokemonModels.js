const pool = require('../database');

class Pokemon {
  static getPokemonFromDB() {
    return pool.query('SELECT * FROM pokemon ORDER BY id').then((results) => results.rows);
  }

  static createPokemonFromDB(...args) {
    return pool.query(`INSERT INTO pokemon (user_id, name, hp, front, back) VALUES ($1, $2, $3, $4, $5) 
            RETURNING *`, args).then((results) => results.rows);
  }
}

module.exports = Pokemon;
