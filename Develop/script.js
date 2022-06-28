// Assignment Code

function generatePassword()
{
  //TODO: specifying all the character types for password

  const lowercaseAlpha="abdefghijklmnopqrstuvwxyz";
  const uppercaseAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerics="1234567890";
  const specialCharacter="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //TODO: collecting the password criteria from user

  let passwordLength;
  let lowercase;
  let uppercase;
  let numeric;
  let specials;
  let miniumCondition=false;

  //TODO: prompt for valid password length (8-128 char)
do{
  passwordLength =Number(window.prompt("How many characters would you like your password to contain?"));

  if(passwordLength < 8 || passwordLength > 128)
  {
    window.alert("Pasword characters should be of 8-128 length");
  }

}while(passwordLength < 8 || passwordLength >128);

//TODO: prompt for character type selection
do{
  window.confirm("Click Ok to confirm including Special characters") ? specials=true : specials=false;
  window.confirm("Click Ok to confirm including Lowercase characters") ? lowercase=true : lowercase=false;
  window.confirm("Click Ok to confirm including Uppercase characters") ? uppercase=true : uppercase=false;
  window.confirm("Click Ok to confirm including Numeric characters") ? numeric=true : numeric=false;

  //TODO: condition for valid password
  if(!specials && !lowercase && !uppercase && !numeric)
  {
    window.alert("Must select at least one character type");
    
  }
  else
  {
    miniumCondition=true;
  }
  
}while(!miniumCondition);


//TODO: building the password on the basis of user input
let password="";
for(var i=0;i<passwordLength;i++){
  if(lowercase)
    password+=lowercaseAlpha.charAt(Math.floor(Math.random()*lowercaseAlpha.length));
  if(uppercase)
    password+=uppercaseAlpha.charAt(Math.floor(Math.random()*uppercaseAlpha.length));
  if(specials)
    password+=specialCharacter.charAt(Math.floor(Math.random()*specialCharacter.length));
  if(numeric)
    password+=numerics.charAt(Math.floor(Math.random()*numerics.length));
}
password = password.substring(0,passwordLength);

//TODO: returning the generated password
  return password;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
