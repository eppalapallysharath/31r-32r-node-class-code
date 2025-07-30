const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { UserModel } = require("../models/usersModel.js");

const checkAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("no token presents");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = jwt.verify(token, process.env.jwt_secret_key);
      const user = await UserModel.findOne({
        userName: decode.userName,
      }).select("_id");
      if (user) {
        console.log("before :", req.userid);
        req.userid = user;
        console.log("after :", req.userid);
        next();
      } else {
        return res.status(404).json({ message: "no user found" });
      }
    } catch (error) {
      if (
        error.message === "jwt expired" ||
        error.message === "invalid token"
      ) {
        return res
          .status(401)
          .json({ message: "invalid token or token expired" });
      } else {
        return res.status(400).json({ message: "something went wrong" });
      }
    }
  }
};

module.exports = { checkAuth };
