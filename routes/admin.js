var express = require("express");
const { getHome, getAdminServices, getAddService, addService, getAdminProjects, getAdminGallery, addGallery, addProject, addGalleryPost, addProjectPost } = require("../controller/adminController");
const upload = require("../middlewares/multer");
// const {
//   verifyAdminLoggedOut,
//   verifyAdminLoggedIn,
// } = require("../middlewares/Sessionhandle");
// const upload = require("../middlewares/multer");
var router = express.Router();

/* GET users listing. */
 
router.get('/',getHome)
router.get('/service',getAdminServices)
router.route('/add-service').get(getAddService).post(upload.any('image'),addService)
router.get('/projects',getAdminProjects)
router.get('/gallery',getAdminGallery)
router.route('/add-gallery').get(addGallery).post(upload.any('image'),addGalleryPost)
router.route('/add-project').get(addProject).post(upload.any('image'),addProjectPost)
// router.route("/projects").get(verifyAdminLoggedOut,getHome)
// router.route('/add-project').get(verifyAdminLoggedOut,getAddCompletedProjects).post(upload.array('Image',5),verifyAdminLoggedOut,postCompletedProjects);

module.exports = router;
  