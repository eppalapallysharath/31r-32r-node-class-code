// builtin modules
// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.writeHead(400, {
//       "content-type": "application/json",
//     });
//     response.write("hi hello");
//     response.end();
//   })
//   .listen(3000, () => {
//     console.log("server is running");
//   });

// custom modules
// const recipes = require("./recipes.js");
// console.log("recipe", recipes.getRecipes);
// console.log("data", recipes.recipes);
// console.log(require("./recipes.js"));
// const { name, func } = require("./recipes.js");
// console.log(name());
// console.log(func());
// console.log(func());
// console.log("recipe", dataRecipes);
// console.log("data", getRecs);

// ejs modules
// import data, { user } from "./recipes.js";
// console.log(data());
// console.log(user());

// 3rd party modules   with ejs
// import colors from "colors";
// console.log(colors.green("hi"));
// console.log(colors.bgYellow("iam error"));
// console.log();

// const a = require("colors");
// console.log(a.grey("hiiiii"));

// const id = require("uuid");
// console.log(id.v4());

import { v4 } from "uuid";
console.log(v4());
