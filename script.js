// Assigning Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var specialCharacters = "!@#$%^&*(){}[]";

var Password = "";

var passwordText = "";

var plength = 0;

// Assignment Code
var generateButton = document.querySelector("#generatebtn");

// Add event listener to generate password button
generateButton.addEventListener("click", function() {
  generatePassword();
  document.querySelector("#password").textContent = passwordText;
});

//user enters the length of the password
function generatePassword(
  selectLowerCase,
  selectUpperCase,
  selectNumber,
  selectSpecial
) {
  plength = parseInt(
    prompt("Enter the length of your password it must be 8 to 128 characters")
  );
  password = "";

  if (!plength) {
    alert("This needs a value");
  } else if (plength < 8 || plength > 128) {
    plength = parseInt(
      prompt(
        "Enter length of password.* Length must be between 8 - 128 characters",
        ""
      )
    );
  } else {
    // Confirm whether user wants to use lower case letters

    selectLowerCase = confirm("Would you like to use lower case letters?");

    // Confirm whether user wants to use upper case letters

    selectUpperCase = confirm("Would you like to use upper case letters?");

    //Confirm whether user wants to use numeric characters

    selectNumber = confirm("Would you like to use numbers?");

    //Confirm whether user wants to use special symbols

    selectSpecial = confirm("Would you like to user special characters?");
  }

  for (let i = 0; i < plength; i++) {
    password += passwordText.charAt(
     Math.floor(Math.random() * passwordText.length)
    );

    if (selectLowerCase && password.length < plength) {
      password = passwordText += lowerCase.charAt(
        Math.floor(Math.random() * lowerCase.length)
      );
    }
    if (selectUpperCase && password.length < plength) {
      password = passwordText += upperCase.charAt(
        Math.floor(Math.random() * upperCase.length)
      );
    }

    if (selectNumber && password.length < plength) {
      password = passwordText += numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
    }

    if (selectSpecial && password.length < plength) {
      password = passwordText += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );
    }

    // returns input to text area
    passwordText.value = password;
  }
}
