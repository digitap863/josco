const galleryModel = require("../models/galleryModel");
const ProjectsModel = require("../models/projectsModel");
const servicesModel = require("../models/servicesModel");

module.exports = {
  getHome: (req, res) => {
    try {
      res.render("admin/home", { admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  getAdminServices: async (req, res) => {
    try {
      const service = await servicesModel.find({}).lean();
      res.render("admin/service", { admin: true, service });
    } catch (err) {
      console.log(err);
    }
  },
  getAddService: (req, res) => {
    try {
      res.render("admin/add-service", { admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  addService: async (req, res) => {
    try {
      const name = req.body.name;
      const image = req.files[0].filename;
      const newService = new servicesModel({ name, image });
      await newService.save();
      res.redirect("/admin/add-service");
    } catch (err) {
      console.log(err);
    }
  },
  getAdminProjects: async (req, res) => {
    try {
      const projects = await ProjectsModel.find({}).lean();
      res.render("admin/projects", { projects, admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  getAdminGallery: async (req, res) => {
    try {
        const gallery = await galleryModel.find({}).lean()
      res.render("admin/gallery", { admin: true,gallery});
    } catch (err) {
      consle.log(err);
    }
  },
  addGallery: async (req, res) => {
    try {
      res.render("admin/add-gallery", { admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  addProject: async (req, res) => {
    try {
      res.render("admin/add-project", { admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  addGalleryPost: async (req, res) => {
    try {
      const { heading, subHeading } = req.body;
      const image = req.files[0].filename;
      const newadd = new galleryModel({ heading, subHeading, image });
      await newadd.save();
      res.redirect("/admin/add-gallery");
    } catch (err) {
      console.log(err);
    }
  },
  addProjectPost: async (req, res) => {
    try {
      const { heading, subHeading } = req.body;
      const image = req.files[0].filename;
      const newProject = new ProjectsModel({ heading, subHeading, image });
      await newProject.save();
      res.redirect("/admin/add-project");
    } catch (err) {
      console.log(err);
    }
  },
};
