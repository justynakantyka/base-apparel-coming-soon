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
  const isEmailValid = userEmail.match(REGEX_SIGNS)
  document.querySelector(".email-error").innerHTML = isEmailValid ?  "" :  "Please provide a valid email";
  document.querySelector(".error-sign").style.visibility = isEmailValid ? "hidden" :  "visible";
  document.querySelector(".email-input").style.borderColor = isEmailValid ? "hsl(0,80%,86%)" : "hsl(0,93%,68%)";
}
