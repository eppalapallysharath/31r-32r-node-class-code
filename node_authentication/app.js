const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const jwt = require("jsonwebtoken");

// const user = {
//   userName: "revanth",
// };

// const token = jwt.sign(user, "jdsadandanneaeadfasas");
// console.log(token);
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJldmFudGgiLCJiaW8iOiIiLCJlbWFpbCI6InJldmFudGhAZ21haWwuY29tIiwiaWF0IjoxNzUzNzkyNDc5fQ.13_vzgIuNDPL7z-6LS5L6PPhhoVOoiO_ZtvSJRP2B0c";
// console.log(token);
// console.log(jwt.verify(token, process.env.jwt_secret_key));

connectDatabase();

// middlewares
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hi iam server");
});

// route middlewares
app.use("/auth", userRoutes);

app.listen(process.env.port || 3000, () => {
  console.log("application started " + process.env.port);
});
