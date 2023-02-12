// Assignment code here
// Created my variables for the following functions
var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbercharacters = "01234456789";
var specialcharacters = "!@#$%^&*()_-+='`~"
var passwordlength;
var uppercasecheck;
var numbercheck;
var specialcheck;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Created box messages to appear when you click "Generate Password" that will give the user options for different password criterias, the following function is trying to determine whether the user wants to generate a password with characters with 8 being the minium all the way through to 128 characters. 
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
    }else{
      alert("The following screens will ask you what types of characters your password will iclude \nIf you choose 'No' for all, the password will on display lowercase letters.");
      }
      return passwordlength;
    }
// This function below is creating the prompt to ask the user whether or not they want uppercase letters within their password. 
    function determineuppercase(){
      uppercasecheck = prompt("Would you like your password to include uppercase letters? /n(Yes or No)");
       uppercasecheck= uppercasecheck.toLowerCase();

       if (uppercasecheck === null || uppercasecheck === ""){
        alert("Please answer Yes or No");
        determineuppercase();

       }else if (uppercasecheck === "yes" || uppercasecheck === "y"){
        uppercasecheck = true;
        return uppercasecheck

       }else if (uppercasecheck === "no" || uppercasecheck === "n"){
        uppercasecheck = false;
        return uppercasecheck;

       }else {
        alert("Please answer Yes or No");
        determineuppercase();
      }
      return uppercasecheck;
    }
       
























  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
