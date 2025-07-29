const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
