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
      alert("The following questions will ask you what types of characters you would like to include in your password. If you choose 'No' for all the questions, the password will only display lowercase letters.");
      }
      return passwordlength;
    }
// This function below is creating the prompt to ask the user whether or not they want uppercase letters within their password. 
    function determineuppercase(){
      uppercasecheck = prompt("Would you like your password to include uppercase letters? (Yes or No)");
       uppercasecheck= uppercasecheck.toLowerCase();

       if (uppercasecheck === null || uppercasecheck === ""){
        alert("Answer Yes or No");
        determineuppercase();

       }else if (uppercasecheck === "yes" || uppercasecheck === "y"){
        uppercasecheck = true;
        return uppercasecheck

       }else if (uppercasecheck === "no" || uppercasecheck === "n"){
        uppercasecheck = false;
        return uppercasecheck;

       }else {
        alert("Answer Yes or No");
        determineuppercase();
      }
      return uppercasecheck;
    }

    function determinenumbers(){
      numbercheck = prompt("Would you like to include numbers within your password? (Yes or No)");
       numbercheck = numbercheck.toLowerCase();

       if (numbercheck === "yes" || numbercheck ==="y"){
        numbercheck = true;
        return numbercheck;

       }else if (numbercheck === "no" || numbercheck ==="n"){
        numbercheck = false;
        return numbercheck

       }else {
        alert("Answer Yes or No");
        determinenumbers();
       }
       return numbercheck;
    }

    function determinespecial(){
      specialcheck = prompt("Would you like to include special charatcters within your password? (Yes or No)");
      specialcheck = specialcheck.toLowerCase();

      if (specialcheck === null || specialcheck === ""){
        alert("Answer Yes or No");
        determinespecial();

      }else if (specialcheck === "yes" || specialcheck === "y"){
        specialcheck = true;
        return specialcheck;

      }else {
        alert("Answer Yes or No");
        determinespecial();
      }
      return specialcheck;

    }

    function generatePassword(){
      determinelength();
      console.log(passwordlength);
      determineuppercase();
      console.log(uppercasecheck)
      determinenumbers();
      console.log(numbercheck);
      determinespecial();
      console.log(specialcheck);

      var char = lowercasecharacters;
      var password = "";
      if (uppercasecheck && numbercheck && specialcheck){
        char += uppercasecharacters + numbercharacters + specialcharacters;

      }else if (uppercasecheck && numbercheck){
       char += uppercasecharacters + numbercharacters;

      }else if (numbercheck && specialcheck){
        char += numbercharacters + specialcharacters;

      }else if (uppercasecheck && specialcheck){
        char += uppercasecharacters + specialcharacters;

      }else if (uppercasecheck){
        char += uppercasecharacters;

      }else if (numbercheck){
        char += numbercharacters;

      }else if (specialcheck){
        char += specialcharacters;

      }else{
        char === lowercasecharacters;
      } 

      for(var i = 0; i < passwordlength; i++){
        password += char.charAt(Math.floor(Math.random() * char.length));
      }
      return password;
    }

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
       
























  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
