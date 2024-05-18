const usersRouter = require("express").Router();

const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmail,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe
} = require("../controllers/users");

usersRouter.get("/me", checkAuth,   sendMe); 
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
