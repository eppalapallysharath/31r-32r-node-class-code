const fs = require("fs");
const path = require("path");
// console.log(__dirname);
const filepath = path.join(__dirname, "data.json");
// console.log(filepath);

const readFile = () => {
  const filedata = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(filedata);
};

module.exports = { readFile };
