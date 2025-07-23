const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/userModel.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/", { dbName: "demo_mongodb" })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// create schema and collections
// const mongoose = require("mongoose");
// const usersSchema = new mongoose.Schema({
//   name: { type: String },
//   password: { type: String, required: true },
//   phone: { type: Number },
// });

// const users = mongoose.model("user", usersSchema);

// todos collection

const todosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Number, required: true },
  completed: { type: Boolean },
  //   userType: { type: String },
});
const todosModel = mongoose.model("todo", todosSchema);

// async function addTodo() {
//   const todo = new todosModel({
//     name: "tom",
//     content: "today demo class",
//     userId: 14,
//   });
//   await todo.save();
//   console.log("todo added successfully");
// }
// addTodo();

// middlewares
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hi hello there i'm server");
});

app.post("/addUser", async (req, res) => {
  const user = new userModel({
    name: req.body.name,
    phone: req.body.phone,
    password: req.body.password,
    username: req.body.username,
  });
  const saved = await user.save();
  res.json({ message: "user added successfully", data: saved });
});
app.post("/addtodo", async (req, res) => {
  const todo = new todosModel({
    name: "tom",
    content: "today demo class",
    userId: 14,
  });
  await todo.save();
  console.log("todo added successfully");
  res.json({ message: "user added successfully" });
});

app.get("/getTodos", async (req, res) => {
  const data = await todosModel.find();
  // const data = await todosModel.findById("")
  res.json(data);
});

app.put("/updateTodo/:id", async (req, res) => {
  console.log(req.params.id);
  //   const data = await todosModel.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });
  const data = await todosModel.updateMany({ name: req.params.id }, req.body, {
    new: true,
  });

  res.json(data);
});

app.delete("/deleteTodo/:id", async (req, res) => {
  //   const data = await todosModel.findByIdAndDelete(req.params.id);
  const data = await todosModel.deleteMany({ name: req.params.id });
  res.json(data);
});

app.listen(4000, () => {
  console.log("server started on 4000");
});
