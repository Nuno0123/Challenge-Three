// Assignment code here
// Created my variables for the following functions
var generateBtn = document.querySelector("#generate");
var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbercharacters = "01234456789";
var specialcharacters = "!@#$%^&*()_-+='`~"
var passwordlength;
var upeerscasecheck;
var numbercheck;
var spcialcheck;

// Get references to the #generate element
//Created box messages to appear when you click 
function determinelength(){
  passwordlength = prompt("How long would you like your password to be? (Passwords must be between 8-128 characters)")

    if (passwordlength<8){
      alert("Passwords must be between 8-128 characters");
      determinelength();
    }else if (passwordlength>128){
      alert("Passwords must be between 8-128 characters");
      determinelength();
    }else if (isNaN(passwordlength)){
      alert("Passwords must be between 8-128 characters");
      determinelength();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
