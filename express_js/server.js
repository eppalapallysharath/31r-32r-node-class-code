const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("iam default api");
});

app.post("/", (req, res) => {
  res.json({ method: "POST", apiName: "/" });
});

app.put("/", (req, res) => {
  res.status(400).send("iam put api");
});

app.patch("/", (req, res) => {
  res.json({ endpoint: "iam patch api" });
});

app.delete("/", (req, res) => {
  res.status(204).send("im deleting");
});

app.get("/books/:id", (req, res) => {
  console.log(req.params);
  const params = req.params;
  console.log(params.id);
  res.send("books" + params.id);
});

app.get("/books/:id/:id", (req, res) => {
  console.log(req.query);
  res.json(req.params);
});

app.get("/filterbook", (req, res) => {
  console.log(req.query);
  res.json({
    message: "iam filter book",
    name: req.query.name,
    price: req.query.price,
  });
});

app.post("/addbook", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.json({
    message: "book created successfully",
    data: req.body,
    params: req.query,
  });
});

app.listen(8000, () => console.log("server started on port 8000"));
