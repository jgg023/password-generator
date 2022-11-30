// Assignment code here
var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lc =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = [0,1,2,3,4,5,6,7,8,9,]
var sc = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":", ]
var options = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  // create an empty array that will be options 
  var options = []
  var passwordlink = window.prompt("How many Chararcters ");
  console.log(passwordlink);
var uppercase = window.confirm ("Would you like to add uppercase ?")
if (uppercase === true) {
  // Add uppercase letters to options 
  console.log(uppercase)
}


var lowercase = window.confirm ("Would you like to add lowercase ?")
if (lowercase === true){
  // Add lowercase letters to options 
  console.log (lowercase)
}

var numbers = window.confirm ("Would you like to add Number ?")
if (numbers=== true){
// Add numbers to options
console.log(numbers)

}

var SpecialCharacters = window.confirm ("Would you like to add Special Characters ?")
if (SpecialCharacters === true ) {
// Add special Characters
console.log (SpecialCharacters)

}
// w3 for loop arrays and generate password 




}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
