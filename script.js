//Assignment code here  
//different variable list
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var symbolList = "~!@#$%^&=+?][{}=-_+)(*&^%";
var passwordLength ="";


//creates the value and the only section that should be writtens
function generatePassword(){  

  // a. password length 8 < 128
  var passwordLength= window.prompt('How many characters would you like the password to contain?  Please note: Minimum 8 and Max 128.');

  //making sure that the number variable is within 8 - 128, if it is, then will prompt the tester for the critera.  if none was selected, then would return.
 if(passwordLength>= 8 && passwordLength <=128){

   // a. Lowercases
    var promptLowercase = window.confirm("Would you like to include lowercase?");
    // b. Uppercase
    
    var promptUppercase = window.confirm("Would you like to include uppercase?");
    // c. Numbers
    var promptNumbers = window.confirm("Would you like to include numbers?");
    // d. special characters
    var promptSymbol = window.confirm("Would you like to include special characters?");
  }
  else{
    window.alert("Please provide a numeric value. Between 8 & 128. Try again.");
    return; 
  }

 //stores the type of arrays that the user decided to go with
 var passwordCart = [];

  //if the tester inputed the critera, it will push out to the passwordCart with the list, this way we can forward to the loop, if nothing is selected, then will prompt the last if statement and return.
  if (promptLowercase === true){
    passwordCart+=lowercaseList;
  }
 if (promptUppercase === true){
    passwordCart+=uppercaseList;
  }
 if (promptNumbers === true){
    passwordCart+=numberList;
  }
 if (promptSymbol === true){
    passwordCart+=symbolList;
  }
 if (passwordCart.length === 0){
   window.alert("Please select one of the criterias. Try again.");
  }

  //stores the password with the criteria
  var generatedPassword = "";

  //loop for the critera for the password until the passwordLength reaches 0
  for (var i = 0; i < passwordLength; i++){
    generatedPassword += passwordCart[Math.floor(Math.random() * passwordCart.length)];
  }
  
  //display password to the page, generated password will go here but write something afterwards
  return generatedPassword 
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


