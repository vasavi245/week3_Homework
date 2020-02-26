// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate password button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Assigning Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = lowerCase.toUpperCase();

var numbers = "1234567890";

var specialCharacters = "!@#$%^&*(){}[]";

var Password = "";

var passwordText = "";

var plength = 0;

//user enters the length of the password
var plength = parseInt(
  prompt("Enter the length of your password it must be 8 to 128 characters")
);
while (isNaN(plength)) {

  var plength = parseInt(prompt("This is not a number, type numbers between 8 to 128 characters",""));

}
//Requirements for password length

while (plength < 8 || plength > 128){

  var plength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));

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
  
  for (let i = 0; i < plength; i++) {
    Password += passwordText.charAt(
      Math.floor(Math.random() * passwordText.length)
    );
  }
  
  if (selectLowerCase) {
    passwordText += lowerCase;
  }
  if (selectUpperCase) {
    passwordText += upperCase;
  }

  if (selectNumber) {
    passwordText += numbers;
  }

  if (selectSpecial) {
    passwordText += specialCharacters;
  }

   return Password;
}
