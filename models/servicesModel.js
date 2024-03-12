const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const servicesModel = mongoose.model("services", servicesSchema);
module.exports = servicesModel;
