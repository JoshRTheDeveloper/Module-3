// Select button in the HTML 
const generateBtn = document.getElementById("generate");

// Declare variables for the function
function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()";

  var password = ""; 

  // prompt converts (input) string to interger that will allow future index
  var passLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

 // When password does not meet the credentials of length - returns empty string
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // declares the variables 
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

 // If no character type selected return empty string
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // declares character will contain only what is confirmed 
  var chars = "";
  if (includeLowercase) chars += lower;
  if (includeUppercase) chars += upper;
  if (includeNumeric) chars += numeric;
  if (includeSpecial) chars += special;

  // Will create a random interger that corresponds with the index of chars looped until length met

  for (var i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum+ 1);
  }

  return password;
}

// function will run generate password and will display it in the element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// adds click event to the button
generateBtn.addEventListener("click", writePassword);
