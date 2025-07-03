// const { addition, sub } = require("./calc");
// const { data } = require("./data");
// console.log(data());

// console.log(addition(1, 2));
// console.log(sub(5, 5));

// const calc = (a, b) => {
//   return a + b;
// };
// console.log(calc(2, 3));

// const { manageUser } = require("./users");
// import { hello } from "./hello";
// console.log(hello());
// const users = (user) => {
//   return manageUser(user);
// };
// const a = { name: "sharath", email: "sharath@gmail.com" };
// const b = { name: "sharath", email: "sharath@gmail.com" };
// console.log("...users", users(a));
// console.log("...users", users(b));

const http = require("http");
const axios = require("axios");

http
  .createServer((request, response) => {
    axios.get("https://dummyjson.com/products").then((res) => {
      response.write(JSON.stringify(res.data));
      response.end();
    });
  })
  .listen(8080, () => {
    console.log("server started");
  });
