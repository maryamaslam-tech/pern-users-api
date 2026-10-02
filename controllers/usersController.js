// controllers/usersController.js
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
} = require("../models/usersModel.js");

const chkEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return false;
  }
  return true;
};

const getUsersController = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        error: "User not found.",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const addUserController = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        error: "Name is required.",
      });
    }

    if (!req.body.email) {
      return res.status(400).json({
        error: "Email is required.",
      });
    }

    const name = req.body.name.trim();
    const email = req.body.email.trim();

    if (!name) {
      return res.status(400).json({
        error: "Name cannot be empty.",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "Email cannot be empty.",
      });
    }

    if (!chkEmail(email)) {
      return res.status(400).json({
        error: "Invalid email format.",
      });
    }

    const user = await addUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        error: "Name is required.",
      });
    }

    if (!req.body.email) {
      return res.status(400).json({
        error: "Email is required.",
      });
    }
    const name = req.body.name.trim();
    const email = req.body.email.trim();

    if (!name) {
      return res.status(400).json({
        error: "Name cannot be empty.",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "Email cannot be empty.",
      });
    }

    if (!chkEmail(email)) {
      return res.status(400).json({
        error: "Invalid email format.",
      });
    }

    const user = await updateUser(name, email, req.params.id);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const patchUserController = async (req, res, next) => {
  try {
    let name = req.body.name;
    let email = req.body.email;

    if (name === undefined && email === undefined) {
      return res.status(400).json({
        error: "At least one field is required.",
      });
    }

    if (name !== undefined) {
      name = name.trim();

      if (!name) {
        return res.status(400).json({
          error: "Name cannot be empty.",
        });
      }
    }

    if (email !== undefined) {
      email = email.trim();

      if (!email) {
        return res.status(400).json({
          error: "Email cannot be empty.",
        });
      }

      if (!chkEmail(email)) {
        return res.status(400).json({
          error: "Invalid email format.",
        });
      }
    }

    const user = await patchUser(name, email, req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsersController,
  getUserByIdController,
  addUserController,
  updateUserController,
  patchUserController,
  deleteUserController,
};
