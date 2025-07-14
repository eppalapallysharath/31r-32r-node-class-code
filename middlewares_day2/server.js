const express = require("express");
const app = express();
const { getProducts } = require("./controllers/apicontroller.js");
const authRoutes = require("./Routes/authRoute.js");
const productsRoutes = require("./Routes/productsRoutes.js");

app.use(express.json()); // get data from body as json

// endpoint   /api/v1/auth/login

app.use("/api/v1/auth", authRoutes); //api/v1/auth
app.use("/api/v1/products", productsRoutes);
app.get("/api/products", getProducts);

app.listen(8000, () => {
  console.log("server started on port 8000");
});
