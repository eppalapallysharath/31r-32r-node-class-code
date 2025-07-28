const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoute.js");
const { connectDB } = require("./config/db.js");

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded());

// apis
app.get("/", (req, res) => {
  res.status(200).send("hi im good");
});
app.use("/api/todos/", todoRouter);

const port = 3000;
app.listen(port, () => {
  console.log("server started " + port);
});
