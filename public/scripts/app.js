// app,js - Benjamin Lefebvre - 301234587 - Sept 29th
// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log("App Started...");

    let deleteButtons = document.querySelectorAll(".btn-danger");

    for (button of deleteButtons) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure?")) {
          event.preventDefault();
          window.location.assign("/business_contact");
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();
