var express = require("express");
const { getHome, getAdminServices, getAddService, addService } = require("../controller/adminController");
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
// router.route("/projects").get(verifyAdminLoggedOut,getHome)
// router.route('/add-project').get(verifyAdminLoggedOut,getAddCompletedProjects).post(upload.array('Image',5),verifyAdminLoggedOut,postCompletedProjects);

module.exports = router;
  