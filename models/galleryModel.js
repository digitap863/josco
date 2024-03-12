const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
  image: String,
});

const galleryModel = mongoose.model("gallery", gallerySchema);
module.exports = galleryModel;
