var characterLength= 8;
var choiceArray= [];

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
 function writePassword() {
    var correctPrompts = getPrompts(); //true or false
    var passwordText = document.querySelector("#password");

      if(correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
     }  else {
        passwordText.value = "";

     }
 }
    
  function generatePassword() {
        var password = " ";
        for(var i = 0; i < characterLength; i++ ) {
        var index = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[index];
    
      }
      return password;

    }
  

function getPrompts() {
    choiceArray = [];
    characterLength = parseInt(prompt("How many Characters do you want between 8 and 128?")); //NaN
    
    if(isNaN(characterLength) || characterLength < 7 || characterLength > 129 ) {
        alert("Password length must be between 8- 128 digits.");
        return false;
    }

    if  (confirm("Do you want uppercases in your password?")) {
        choiceArray = choiceArray.concat(uppercaseArray);
    }
    if (confirm ("Do you want lowercases in your password?")) {
        choiceArray = choiceArray.concat(lowercaseArray);
    };
   
   if(confirm ("Do you want numbers in your password?")){
    choiceArray = choiceArray.concat(numbArray);
   };

   if(confirm ("Do you want special characters in your password?")){
    choiceArray = choiceArray.concat(characterArray);
   };
    return true;


}