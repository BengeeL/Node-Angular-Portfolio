// user.js - Benjamin Lefebvre - 301234587 - Sept 29th 
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
