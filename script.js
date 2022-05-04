//Assignment code here  
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";","'",":","<",".",">","/","?"]
var promptInput = ""

//creates the value and the only section that should be writtens
function generatePassword(){  

  //stores the password
   var generatePassword = ""
   

  // a. password length 8 < 128
  var promptInput= window.prompt('How many characters would you like the password to contain?  Please note: Minimum 8 and Max 128.');
 

 if(promptInput >= 8 && promptInput <=128){
   passwordLength = promptInput;

   // a. Lowercases
    var promptLowercase = window.confirm("Would you like to include lowercase?");
    // b. Uppercase
    var promptUppercase = window.confirm("Would you like to include uppercase?");
    // c. Numbers
    var promptNumbers = window.confirm("Would you like to include numbers?");
    // d. special characters
    var promptSpecialChar = window.confirm("Would you like to include special characters?");
  } else{
    window.alert("Please provide a numeric value. Between 8 & 128. Try again.");
    return promptInput;
  }

  var passwordCart = []

 if (promptLowercase ===true){
    passwordCart.push(lowercaseList)
  }
 if (promptUppercase ===true){
    passwordCart.push(uppercaseList)
  }
 if (promptNumbers ===true){
    passwordCart.push(numberList)
  }
 if (promptSpecialChar ===true){
    passwordCart.push(symbolList)
  }

 

  for (var i = 0; i < passwordLength; i++){
    generatePassword = passwordCart[Math.floor(Math.random() * passwordCart.length)];
  }

 

  //display password to the page, generated password will go here but write something afterwards
  return generatePassword 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");  //targets the generate button, no need to touch, line 28


// Write password to the #password input
function writePassword() {
  var password = generatePassword();    //store the generated password into the var password, need to make the generatePassword function
  var passwordText = document.querySelector("#password");  //line 22 on index, no need to touch

  passwordText.value = password;  //plugs the generatedpassword and display on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //listen to the button on the click and write the password, no need to touch


   //only inputs number
  //var passwordLength = parseInt(promptInput) 
   
  //if entered a non-numeric, empty, less than 8, more than 128, will not generate.
  // if(isNaN(passwordLength) || passwordLength ===""|| passwordLength === null || passwordLength <8 || passwordLength > 128){
  //   window.alert("Please provide a numeric value. Between 8 & 128. Try again.")
  //   return
  // } 
