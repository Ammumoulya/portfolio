const showFormButton = document.getElementById("show-form");
const contactForm = document.getElementById("contact-form");

showFormButton.addEventListener("click", function() {
  if (contactForm.style.display === "none") {
    contactForm.style.display = "block";
  } else {
    contactForm.style.display = "none";
  }
});