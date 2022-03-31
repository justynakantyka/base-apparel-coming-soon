const submitButton = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".email-input");
var userEmail;
const REGEX_SIGNS =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitButton.addEventListener("click", function(event) {
  userEmail = emailInput.value;
  console.log(userEmail);
  inputValidation(userEmail);
})

function inputValidation(userEmail) {
  if (userEmail.match(REGEX_SIGNS)) {
    console.log("OK");
  }
  else {
    console.log("Please provide a valid email");
  }
}
