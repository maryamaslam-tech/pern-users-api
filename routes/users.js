// routes/users.js
const express = require("express");
const router = express.Router();

const {
  getUsersController,
  getUserByIdController,
  addUserController,
  updateUserController,
  patchUserController,
  deleteUserController,
} = require("../controllers/usersController");

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.post("/", addUserController);

router.put("/:id", updateUserController);

router.patch("/:id", patchUserController);

router.delete("/:id", deleteUserController);

module.exports = router;
