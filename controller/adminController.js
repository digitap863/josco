const servicesModel = require("../models/servicesModel");

module.exports = {
  getHome: (req, res) => {
    try {
      res.render("admin/home", { admin: true });
    } catch (err) {
      console.log(err);
    }
  },
  getAdminServices: (req, res) => {
    try {
      res.render("admin/service", { admin: true });
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
  addService: async(req, res) => {
    try {
      const name = req.body.name;
      const image = req.files[0].filename;
      const newService = new servicesModel({name,image})
      await newService.save()
      res.redirect('/admin/add-service')
    } catch (err) {
      console.log(err);
    }
  },
};
