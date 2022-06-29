const pool = require('../database');

class Users {
  static getSingleUserFromDB(id) {
    return pool.query('SELECT * FROM users WHERE id = $1', [id]).then((results) => results.rows[0]);
  }

  static getUsersPokemonFromDB(id) {
    return pool.query('SELECT * FROM pokemon WHERE user_id = $1', [id]).then((results) => results.rows);
  }

  static createUserfromDB(...args) {
    return pool.query(`INSERT INTO users (name, bio, age) VALUES ($1, $2, $3) 
            RETURNING *`, args).then((results) => results.rows);
  }

  static updateUserFromDB(bio, id) {
    return pool.query(
      'UPDATE users SET bio = $1 WHERE id = $2 RETURNING *',
      [bio, id],
    ).then((results) => results.rows);
  }

  static deleteUserFromDB(id) {
    return pool.query(
      'DELETE FROM users WHERE id = $1',
      [id],
    );
  }
}

module.exports = Users;
