// Assignment code here
// Created my variables for the following functions, here I included the alphabet twice, numeric values between 0-9 and special characters for us to try and achieve our generated password. I included the alphabe twice because their our upper and lower case letters to choose from.
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
//Created box messages to appear when you click "Generate Password" that will give the user options for different password criterias, the following function is trying to determine the length of the password. Here the criteria stated the password must be within 8-128 characters. 8 being the minium all the way through to 128 characters.   
function determinelength(){
  passwordlength = prompt("How long would you like your password to be? (Passwords must be between 8-128 characters)")
     // Here we're putting that the passwordlength is less than 8 so if the user tries to put a numeric value of something less than 8 it will alert the user with this message "Passwords must be between 8-128 characters" same thing goes for if the passwordlength is greater(>) 128, the same message applies. Finally, if the user accidentaly hits a something other than a numer (thats what isNaN is for) it will also alert the user with the same message finally once each of following have been filled correctly the user will get another 
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
// This function below is creating the prompt to ask the user whether or not they want uppercase lettering  within their password. If the following 3 prompts are answered as no then the website should generate a password with only lowercase lettering. We're also giving our variable uppercasecheck the value of a prompt message. Each following function is designed so that if the user were to write anything other than yes or no, an alert will pop up telling them to answer yes or now this goes for lines 37-39, 49-51, 68-71, 92-95
    function determineuppercase(){
      uppercasecheck = prompt("Would you like your password to include uppercase letters? (Yes or No)");
       uppercasecheck = uppercasecheck.toLowerCase();
 
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
    // The funtion below helps determining if the user wants to include numbers in their password. 
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
    // Same here but with special characters 
    function determinespecial(){
      specialcheck = prompt("Would you like to include special charatcters within your password? (Yes or No)");
      specialcheck = specialcheck.toLowerCase();

      if (specialcheck === null || specialcheck === ""){
        alert("Answer Yes or No");
        determinespecial();

      }else if (specialcheck === "yes" || specialcheck === "y"){
        specialcheck = true;
        return specialcheck;
      

      }else if (specialcheck === "no" || specialcheck === "n"){
      specialcheck = false;
      return specialcheck;
      
      }else {
        alert("Answer Yes or No");
        determinespecial();
      }
      return specialcheck;

    }
    // Creating the function in which will generate the password for us, this function will determine on the functions we created: determinelength, determineuppercase, determinenumbers, and determinespecial. 
    function generatePassword(){
      determinelength();
      console.log(passwordlength);
      determineuppercase();
      console.log(uppercasecheck)
      determinenumbers();
      console.log(numbercheck);
      determinespecial();
      console.log(specialcheck);
      
      // Here we're creating the outcomes of what could be selected by the user. We're creating if and else if statements to help the webpage generate different passwords based on the critera selected. So if yes selected for each of the following criteria then char (lowercasecharacters) should be added to each one of the following if statements because of the add += operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment) I used this site help me better understand the concept of the operator.  
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

// As a guide to help with this homework assignment I was able to find a previous student's work in which I looked over everything and deconstucted it to better help me understand the assignment. Because I did use this students code as a guide to my own I am citing their work just to be catious and state I'm not using their work as my own. I simply reviewed it , deconstructed it to understand how it works and created my own based off the code I reviewed and the things I learned in class. I give all credit to the original owner (https://github.com/JustinMarchi/Homework-3-Password-Generator.github.io)