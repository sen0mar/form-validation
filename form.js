/* -------------------------------------------------- SELECTORS ------------------------------------------------------------ */
const form = document.querySelector(".form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailError = document.querySelector(".email-error");
const countryError = document.querySelector(".country-error");
const postalError = document.querySelector(".postal-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
/* -------------------------------------------------- EVENT LISTENERS ------------------------------------------------------------ */
email.addEventListener("input", () => {
  checkEmail();
});

// country.addEventListener("input", () => {
//   checkCountry();
// });

// postal.addEventListener("input", () => {
//   checkCountry();
//   checkPostal();
// });

// password.addEventListener("input", () => {
//   checkPassword();
// });

// confirmPassword.addEventListener("input", () => {
//   checkPassword();
//   confirmPassword();
// });

/* -------------------------------------------------- FORM SUBMISSION ------------------------------------------------------------ */

/* -------------------------------------------------- INPUT VALIDITY CHECK ------------------------------------------------------------ */
function checkEmail() {
  email.setCustomValidity("");
  emailError.textContent = "";

  const domain = "@example.com";
  if (!email.value.endsWith(domain)) {
    const errorMsg = "Please enter a valid Email Address";
    email.setCustomValidity(errorMsg);
    emailError.textContent = errorMsg;
    emailError.style.color = "red";
  } else {
    email.setCustomValidity("");
    emailError.textContent = "✔";
    emailError.style.color = "green";
  }
}
