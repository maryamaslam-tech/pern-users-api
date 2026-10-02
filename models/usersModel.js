// models/usersModel.js
const pool = require("../db");

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query("SELECT * From users Where id = $1", [id]);
  return result.rows[0];
};

const addUser = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
  );
  return result.rows[0];
};

const updateUser = async (name, email, id) => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id],
  );
  return result.rows[0];
};

const patchUser = async (name, email, id) => {
  // if(name === undefined && email === undefined) {
  //   throw new Error("At least one field (name or email) must be provided");
  // }
  if (email === undefined) {
    const result = await pool.query(
      "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
      [name, id],
    );
    return result.rows[0];
  } else if (name === undefined) {
    const result = await pool.query(
      "UPDATE users SET email = $1 WHERE id = $2 RETURNING *",
      [email, id],
    );
    return result.rows[0];
  } else {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id],
    );
    return result.rows[0];
  }
};

const deleteUser = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id],
  );
  return result.rows[0];
};
module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
};
