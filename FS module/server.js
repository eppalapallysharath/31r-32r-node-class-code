// const fileSystem = require("fs");

// // console.log("file reading started");
// // fileSystem.readFile("./hello.tx", "utf-8", (error, data) => {
//   //   if (error) {
//   //     console.log("unable to read file");
//   //   }
//   console.log(data);
// });
// // console.log("file reading ended");

// // console.log("file reading started");
// // const file = fileSystem.readFileSync("./hello.txt");
// // console.log(file.toString());
// // console.log("file reading ended");
// const a = { hi: "wow" };
// //write file
// // fileSystem.writeFile("./ironman.txt", JSON.stringify(a), (err, data) => {
// //   console.log(err);
// //   console.log("successfully written data in file");
// //   console.log(data);
// // });

// // const b = fileSystem.readFileSync("./ironman.txt", "utf-8");
// // console.log(typeof b.toString());

// fileSystem.appendFile("./data/us.txt", "im tom and jerry", (err) => {
//   console.log(err);
//   console.log("data added successfully");
// });

// file system method for folders
// const fs = require("fs");

// fs.mkdir("./day5", (err, data) => {
//   if (err) {
//     console.log("unable to create folder");
//   } else {
//     fs.writeFile("./day5/hi.txt", "hello", () => {
//       console.log("data written in file");
//     });
//   }
// });
// fs.rmdir("./day4", (err, data) => {
//   if (err) {
//     console.log(err);
//     console.log("unable to delete folder");
//   } else {
//     console.log("folder deleted");
//   }
// });

// fs.unlink("./ironm.txt", (err, data) => {
//   if (err) console.log(" unable to delete file");
//   console.log("file deleted");
// });

// const a = fs.existsSync("./ironman.txt");
// console.log(a);
// fs.readdir("./da", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const fs = require("fs/promises");

// fs.readFile("./data/user.txt", "utf-8", ()=>{

//   }
// )

async function read() {
  try {
    console.log("file reading started");
    const a = await fs.readFile("./data/uer.txt", "utf-8", () => {});
    console.log(a);
    console.log("file reading ended");
  } catch (error) {
    console.log("error");
  }
}
read();
