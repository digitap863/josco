const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
  image: String,
});

const ProjectsModel = mongoose.model("projects", ProjectsSchema);
module.exports = ProjectsModel;
