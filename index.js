const form = document.getElementById("email-form");
const emailInput = document.querySelector(".email-input");
var userEmail;
const REGEX_SIGNS =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  userEmail = emailInput.value;
  inputValidation(userEmail);
})

function inputValidation(userEmail) {
  if (userEmail.match(REGEX_SIGNS)) {
    console.log("OK");
  }
  else {
    document.querySelector(".email-error").innerHTML = "Please provide a valid email";
    document.querySelector(".email-input").style.borderColor = "#a8323e";
    console.log("Please provide a valid email");
  }
}
