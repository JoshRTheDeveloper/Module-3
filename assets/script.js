const generateBtn = document.getElementById("generate");

function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()";

  var password = ""; 

  
  var passLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

 
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

 
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  
  var chars = "";
  if (includeLowercase) chars += lower;
  if (includeUppercase) chars += upper;
  if (includeNumeric) chars += numeric;
  if (includeSpecial) chars += special;

  
  for (var i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum+ 1);
  }

  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordTextarea = document.getElementById("password");

  passwordTextarea.value = password;
}


generateBtn.addEventListener("click", writePassword);
