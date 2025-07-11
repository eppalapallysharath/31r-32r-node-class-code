const express = require("express");
const app = express();
const fs = require("fs");
// console.log(express.json());
// middlewares builtin
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
console.log("helo");

// logger
app.use((req, res, next) => {
  const data = {
    method: req.method,
    endpoint: req.url,
  };
  fs.appendFileSync("./logger.log", JSON.stringify(data));
  next();
});

app.use((req, res, next) => {
  res.category = "clothes";
  // res.body = req.body.name + "hi"
  next();
});

app.post("/add", (req, res) => {
  res.json(req.body);
});

app.use((req, res) => {
  res.send("api not found");
});

// app.all("*", (req, res) => {
//   res.send("not found");
// });

const port = 3000;
app.listen(port, () => {
  console.log("server started " + port);
});
