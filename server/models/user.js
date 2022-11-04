// user.js - Benjamin Lefebvre - 301234587 - Oct 22nd

let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

// Configure options for our user model
let options = { missingPassordError: "Wrong, missing password" };
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);
