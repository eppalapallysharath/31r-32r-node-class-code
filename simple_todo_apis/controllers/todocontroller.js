const { TodosModel } = require("../models/todosSchema.js");

const getAllTodos = async (req, res) => {
  try {
    const todosData = await TodosModel.find();
    res.status(200).json({ message: "Todos", data: todosData });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "unable to get todos information" });
  }
};

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodosModel.findById(id);
    res.status(200).json({ message: "Todo", data: todo });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "unable to get todo information" });
  }
};

const addTodo = async (req, res) => {
  try {
    const { title, body } = req.body;
    const newTodo = new TodosModel({ title: title, body: body });
    const result = await newTodo.save();
    res.status(200).json({ message: "todo added successfully", todo: result });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "failed to add todo" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;

    const updateTodo = await TodosModel.findByIdAndUpdate(
      id,
      { title: title, body: content },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "todo updated successfully", todo: updateTodo });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "failed to update todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.todoId;
    const deleteTodo = await TodosModel.findByIdAndDelete(id);
    return res
      .status(204)
      .json({ message: "todo deleted successfully", todo: deleteTodo });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "failed to delete" });
  }
};

module.exports = { getAllTodos, getTodo, addTodo, updateTodo, deleteTodo };
