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
    document.querySelector(".email-error").innerHTML = "";
    document.querySelector(".error-sign").style.visibility = "hidden";
    document.querySelector(".email-input").style.borderColor = "hsl(0,80%,86%)";
  }
  else {
    document.querySelector(".email-error").innerHTML = "Please provide a valid email";
    document.querySelector(".error-sign").style.visibility = "visible";
    document.querySelector(".email-input").style.borderColor = "hsl(0,93%,68%)";
  }
}
