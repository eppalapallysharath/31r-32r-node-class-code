const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const ImageModel = require("./Models/imageModel.js");
const bcrypt = require("bcryptjs");

const str = "hello@$2%";
const hashpassword =
  "$2b$10$NR03euAxF7oW/Y983V7U3.rmz8z5OJU0dTEEWoUpot0bU.lRCqKl2";

console.log(bcrypt.compareSync(str, hashpassword));

//middleware

// app.use(express.static("public"));
app.use("/images", express.static("images"));

function connectDb() {
  mongoose
    .connect("mongodb://localhost:27017/", { dbName: "demo_multer" })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log(err));
}

connectDb();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    console.log(Date.now());
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// app.use(express.json());
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello there");
});

app.post("/imageUpload", upload.single("image"), async (req, res) => {
  //   console.log(req.headers);
  //   console.log(req.file);
  //   console.log(req.body);
  try {
    console.log(req.file);
    const { imageName } = req.body;

    const imageAdd = await new ImageModel({
      imageName: imageName,
      imagePath: req.file.path,
    });
    imageAdd.save();

    res.json(imageAdd);
  } catch (error) {
    res.json(error);
  }
});

app.get("/getImages", async (req, res) => {
  try {
    const data = await ImageModel.find();
    const results = data.map((val) => {
      return {
        ...val,
        url: "http://localhost:3000/" + val.imagePath.replace("\\", "/"),
      };
    });
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log("express server started");
});
