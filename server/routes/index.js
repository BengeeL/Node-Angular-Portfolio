// index.js - Benjamin Lefebvre - 301234587 - Sept 29th
var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET about me page. */
router.get("/about", indexController.displayAboutPage);

/* GET projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET services page. */
router.get("/services", indexController.displayServicesPage);

/* GET contact page. */
router.get("/contact", indexController.displayContactPage);

/* POST contact page. */
router.post("/contact", indexController.processContactPage);

/* GET Resume. */
router.get("/resume", indexController.displayResumePage);

/* GET login page. */
router.get("/login", indexController.displayLoginPage);

/* POST login page. */
router.post("/login", indexController.processLoginPage);

/* GET register page. */
router.get("/register", indexController.displayRegisterPage);

/* POST register page. */
router.post("/register", indexController.processRegisterPage);

/* POST perform logout. */
router.get("/logout", indexController.processLogoutRequest);

module.exports = router;
