const path = require("path");
const fs = require("fs");
// console.log(path.basename("data/users/file.txt"));
// console.log(path.dirname("data/users/file.txt"));
// console.log(path.join("data", "file.txt"));
// console.log(path.extname("data/file.txt"));
// console.log(path.parse("data/file.txt"));
// console.log(path.resolve("data/file.txt"));
// console.log(path.resolve());
const filepath = path.join("..", "demo", "user.txt");
// console.log(filepath);
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
