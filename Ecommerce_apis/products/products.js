const fs = require("fs");
const path = require("path");
// console.log(__dirname);
const filepath = path.join(__dirname, "data.json");
// console.log(filepath);

const readFile = () => {
  const filedata = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(filedata);
};

// 9/07/2025
const writeFile = (data) => {
  fs.writeFileSync(filepath, JSON.stringify(data));
};

module.exports = { readFile, writeFile };
