const galleryModel = require("../models/galleryModel");
const ProjectsModel = require("../models/projectsModel");
const servicesModel = require("../models/servicesModel");

module.exports = {
  getHome: (req, res) => {
    try {
      res.render("user/home");
    } catch (err) {
      console.log(err);
    }
  },
  getContact: (req, res) => {
    try {
      res.render("user/contact");
    } catch (err) {
      console.log(err);
    }
  },
  getGallery: async (req, res) => {
    try {
      const gallery = await galleryModel.find({}).lean();
      res.render("user/gallery", { gallery });
    } catch (err) {
      console.log(err);
    }
  },
  getAbout: (req, res) => {
    try {
      res.render("user/about");
    } catch (err) {
      console.log(err);
      q;
    }
  },
  getProjects: async (req, res) => {
    try {
      const projects = await ProjectsModel.find({}).lean();
      res.render("user/projects", { projects });
    } catch (err) {
      console.log(err);
    }
  },
  getServices: async (req, res) => {
    try {
      const services = await servicesModel.find({}).lean();
      res.render("user/services", { services });
    } catch (err) {
      console.log(err);
    }
  },
};
