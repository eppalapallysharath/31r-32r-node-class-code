const bcryptjs = require("bcryptjs");
const { UserModel } = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const userData = new UserModel({
      userName: name,
      password: hashedPassword,
      email: email,
      bio: req.body.bio || "",
    });
    const user = await userData.save();
    return res.json({
      message: "user signup successfully",
      user: { userName: user.userName, bio: user.bio, email: user.email },
    });
  } catch (error) {
    console.log("error", error);
    res.json({ error_message: error.message });
  }
};

// const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email: email });
//     if (user) {
//       const passwordCheck = bcryptjs.compare(password, user.password);

//       if (passwordCheck === true) {
//         res.status(200).json({
//           message: "login successfully",
//           userInfo: {
//             userName: user.userName,
//             email: user.email,
//             bio: user.bio,
//           },
//         });
//       } else {
//         res.status(400).send("invalid email or password");
//       }
//     } else {
//       console.log("invalid email or password");
//       res.status(429).send("invalid email or password");
//     }
//   } catch (error) {
//     console.log("error", error);
//     res.status(429).json({ error_message: error.message });
//   }
// };

// new code
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const passwordCheck = bcryptjs.compareSync(password, user.password);

      if (passwordCheck === true) {
        const token = jwt.sign(
          { userName: user.userName },
          process.env.jwt_secret_key,
          { expiresIn: "12h" }
        );
        res.status(200).json({
          message: "login successfully",
          userInfo: {
            userName: user.userName,
            email: user.email,
            bio: user.bio,
          },
          accessToken: token,
        });
      } else {
        res.status(400).send("invalid email or password");
      }
    } else {
      console.log("invalid email or password");
      res.status(429).send("invalid email or password");
    }
  } catch (error) {
    console.log("error", error);
    res.status(429).json({ error_message: error.message });
  }
};

const profileController = async (req, res) => {
  try {
    const userProfile = await UserModel.findById(req.userid).select([
      "-password",
      "-__v",
      "-createdAt",
      "-updatedAt",
    ]);
    res.json(userProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editProfile = (req, res) => {
  return res.send("this edit profile");
};

module.exports = {
  signupController,
  loginController,
  profileController,
  editProfile,
};
