// Assignment code here  
function getRandom(max){  //for random numbers and characters
  var random = Math.random() * max;
  return Math.floor(random) ;
}




function generatePassword(){  //creates the value and the only section that should be writtens
  
   
  // a. password length 8 < 128
  var promptInput= window.prompt('How many characters would you like the password to contain?  Please note: Minimum 8 and Max 128.');
 
  var passwordLength = parseInt(promptInput) //find a way to make into a number
   
  //validate prompt answer

  if(isNaN(passwordLength) || passwordLength ===""|| passwordLength ===null ||passwordLength <8 && passwordLength >128){  //if entered a non-numeric, empty, less than 8, more than 128, will not generate.
    window.alert("Please provide a numeric value between 8 & 128. Try again")
    return generatePassword();
  }


  // b. Lowercase
  var promptLowercase = window.confirm("Would you like to include lowercase?")
  if (promptLowercase ===true){
    passwordCart += lcase;
  }
  // c. Uppercase
  var promptUppercase = window.confirm("Would you like to include uppercase?")
  if (promptUppercase ===true){
    passwordCart += ucase;
  }

  // d. Numbers
  var promptNumbers = window.confirm("Would you like to include numbers?")
  if (promptNumbers ===true){
      passwordCart += numbers;
    }


  // e. special characters
  var promptSpecialChar = window.confirm("Would you like to include special characters?")
  if (promptSpecialChar ===true){
    passwordCart += char;
  }

  //generate password based on critera

  for (var i = 0; i< passwordLength; i++){
    generatePassword +=passwordCart[Math.floor(Math.random() * passwordCart.length)];
  }





  //display password to the page
  return generatePassword//generated password will go here but write something afterwards
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");  //targest the generate button, no need to touch, line 28


// Write password to the #password input
function writePassword() {
  var password = generatePassword();    //store the generated password into the var password, need to make the generatePassword function
  var passwordText = document.querySelector("#password");  //line 22 on index, no need to touch

  passwordText.value = password;  //plugs the generatedpassword and display on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //listen to the button on the click and write the password, no need to touch


