// contact.js - Benjamin Lefebvre - 301234587 - Oct 5th

let mongoose = require("mongoose");

// Create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", contactModel);

// Sorting function for object list of contact 
module.exports.sortContactList = (contactModelList, property) => {
  function compare(a, b) {
    a = a[property];
    b = b[property];
    let result; 
    
    result = a.localeCompare(b);
    return result;
  }

  return contactModelList.sort(compare);
}