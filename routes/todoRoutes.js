const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/authMiddlware");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", authenticateJWT, getTodos);
router.post("/", authenticateJWT, createTodo);
router.put("/:id", authenticateJWT, updateTodo);
router.delete("/:id", authenticateJWT, deleteTodo);

module.exports = router;
