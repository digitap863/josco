var express = require("express");
const { getHome, getContact, getGallery, getAbout, getProjects, getServices } = require("../controller/userController");
var router = express.Router();


router.get('/',getHome)
router.get('/contact',getContact)
router.get('/gallery',getGallery)
router.get('/about',getAbout)
router.get('/projects',getProjects)
router.get('/services',getServices)

module.exports = router;
