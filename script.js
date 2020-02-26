// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Min and Max password length
const minPassLength = 8;
const maxPassLength = 128;
// Assigning Variables
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var numbers = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var specialCharacters = "!@#$%^&*(){}[]";
var userPassword = "";
var passwordGroup = "";

//user enters the length of the password
var plength = parseInt(
  prompt("Enter the length of your password it must be 8 to 128 characters")
);
while (plength < minPassLength || plength > maxPassLength) {
  var plength = "password must be between 8 to 128 characters";
}

// Confirm whether user wants to use lower case letters

var selectLowerCase = confirm("Would you like to use lower case letters?");

// Confirm whether user wants to use upper case letters

var selectUpperCase = confirm("Would you like to use upper case letters?");

//Confirm whether user wants to use numeric characters

var selectNumber = confirm("Would you like to use numbers?");

//Confirm whether user wants to use special symbols

var selectSpecial = confirm("Would you like to user special characters?");

// call generatePassword function to Generate Password
generatePassword();

writePassword();

function generatePassword() {
  if (selectLowerCase) {
    passwordGroup += lowerCase;
  }
  if (selectUpperCase) {
    passwordGroup += upperCase;
  }

  if (selectNumber) {
    passwordGroup += numbers;
  }

  if (selectSpecial) {
    passwordGroup += specialCharacters;
  }

  for (let i = 0; i < plength; i++) {
    userPassword += passwordGroup.charAt(
      Math.floor(Math.random() * passwordGroup.length)
    );
  }

  return userPassword;
}
