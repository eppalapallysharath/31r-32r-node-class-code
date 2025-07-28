const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todocontroller.js");

router.get("/getAllTodos", getAllTodos);

router.post("/addTodo", addTodo);

router.put("/updateTodo/:id", updateTodo);

router.get("/getTodo/:id", getTodo);

router.delete("/deleteTodo/:todoId", deleteTodo);

module.exports = router;
