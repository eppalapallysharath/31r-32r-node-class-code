const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema(
  {
    imageName: { type: String, required: true },
    imagePath: { type: String, required: true },
  },
  { timestamps: true }
);

const ImageModel = mongoose.model("image", ImageSchema);

module.exports = ImageModel;
