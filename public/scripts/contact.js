// contact.js - Benjamin Lefebvre - 301234587 - Sept 29th 
// Contact Form Inputs Variables
const contactForm = document.getElementById("contact-form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function resetForm() {
  fName.value = "";
  lName.value = "";
  phone.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}

// Listening to submit event
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // JSON object containing form data
  const formData = {
    name: fName.value + " " + lName.value,
    phone: phone.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  // AJAX server request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    console.log(xhr.responseText);

    // Validation
    if (xhr.responseText == "success") {
      $("#result")
        .html("Email Sent!")
        .removeClass("contact-result")
        .addClass("contact-success");
      resetForm();
    } else {
      $("#result")
        .html("Email failed to send. Please try again.")
        .removeClass("contact-result")
        .addClass("contact-error");
    }
  };

  // Sending data to server
  xhr.send(JSON.stringify(formData));
});
