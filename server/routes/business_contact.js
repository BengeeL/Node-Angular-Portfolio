// business_contact.js - Benjamin Lefebvre (301234587) - Oct 22nd
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Enable JWT
let jwt = require('jsonwebtoken');

let passport = require("passport");

let businessContactController = require("../controllers/business_contact");

// Helper function for guarding routes purposes
function requireAuth(req, res, next) {
  // Check if user logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

// GET Route for display contact list page - READ operation
router.get("/", requireAuth, businessContactController.displayContactList);

// GET Route for display add page - CREATE operation
router.get("/add", requireAuth, businessContactController.displayAddPage);

// POST Route for processing add page - CREATE operation
router.post("/add", requireAuth, businessContactController.processAddRequest);

// GET Route for display edit page - UPDATE operation
router.get("/edit/:id", requireAuth, businessContactController.displayEditPage);

// POST Route for processing edit page - UPDATE operation
router.post("/edit/:id", requireAuth, businessContactController.processEditRequest
);

// GET to perform deletion - DELETE operation
router.get("/delete/:id", requireAuth, businessContactController.processDeleteRequest
);

module.exports = router;
