// Assignment Code
/*1. how many characters would you like your password to contain?
ok cancel   --> min 8 constrain-max 128
2. alert or confirm --> click ok to confirm including special characters
ok cancel
3.click ok to confirm including numeric characters
4.Click ok to confirm lowercase characters
5.Click ok to confirm uppercase characters

at least one character specification---> Must select at least one char type */
function generatePassword()
{
  //specifying all the character types for password

  const lowercaseAlpha="abdefghijklmnopqrstuvwxyz";
  const uppercaseAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerics="1234567890";
  const specialCharacter="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //collecting the password criteria from user

  let passwordLength;
  let lowercase;
  let uppercase;
  let numeric;
  let specials;
  let miniumCondition=false;

do{
  passwordLength =Number(window.prompt("How many characters would you like your password to contain?"));

  if(passwordLength < 8 || passwordLength > 128)
  {
    window.alert("Pasword length should be of length 8-128 chracters");
  }
}while(passwordLength < 8 || passwordLength >128);

do{
  window.confirm("Click Ok to confirm including Special characters") ? specials=true : specials=false;
  window.confirm("Click Ok to confirm including Lowercase characters") ? lowercase=true : lowercase=false;
  window.confirm("Click Ok to confirm including Uppercase characters") ? uppercase=true : uppercase=false;
  window.confirm("Click Ok to confirm including Numeric characters") ? numeric=true : numeric=false;

  if(!specials && !lowercase && !uppercase && !numeric)
  {
    window.alert("Must select at least one character type");
    
  }
  else
  {
    miniumCondition=true;
  }
  
}while(!miniumCondition);


//buildig the pasword on the basis of user input
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
