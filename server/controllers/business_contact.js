// business_contact.js - Benjamin Lefebvre (301234587) - Oct 22nd
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Enable JWT
let jwt = require('jsonwebtoken');

// Connect to our contact model
let Contact = require("../models/contacts");

let currentYear = new Date().getFullYear();

module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, ContactList) => {
    if (err) {
      return console.error(err);
    } else {
      // Sort contact list by name
      Contact.sortContactList(ContactList, "name");

      res.render("business_contact/list", {
        title: "Business Contacts List",
        displayName: req.user ? req.user.displayName : "",
        year: currentYear,
        ContactList: ContactList,
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("business_contact/add", {
    title: "Add Business Contact",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.processAddRequest = (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // Refresh contact list
      res.redirect("/business_contact");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("business_contact/edit", {
        title: "Edit Business Contact",
        displayName: req.user ? req.user.displayName : "",
        year: currentYear,
        contact: contactToEdit,
      });
    }
  });
};

module.exports.processEditRequest = (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // Refresh contact list
      res.redirect("/business_contact");
    }
  });
};

module.exports.processDeleteRequest = (req, res, next) => {
  let id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // Refresh contact list
      res.redirect("/business_contact");
    }
  });
};
