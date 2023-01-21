// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'];
// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'];



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}



// Function to prompt user for password options
function getPasswordOptions() {
  // Initialize variables for password options
  let length = 0;
  let hasLower = false;
  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  // Prompt for password length
  do {
    length = parseInt(prompt("Enter the desired length of your password (minimum 10 and maximum 64 characters)"));
  } while (isNaN(length) || length < 10 || length > 64);

  // Prompt for character types to include in password
  hasLower = confirm("Click OK to include lowercase characters.");
  hasUpper = confirm("Click OK to include uppercase characters.");
  hasNumber = confirm("Click OK to include numeric characters.");
  hasSpecial = confirm("Click OK to include special characters.");

  // Validate that at least one character type is selected
  while (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
    alert("You must select at least one character type!");
    hasLower = confirm("Click OK to include lowercase characters.");
    hasUpper = confirm("Click OK to include uppercase characters.");
    hasNumber = confirm("Click OK to include numeric characters.");
    hasSpecial = confirm("Click OK to include special characters.");
  }

  // Return password options as an object
  return {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Function to generate password with user input
function generatePassword() {
  // Get password options
  let options = getPasswordOptions();
  // Initialize password variable
  let password = "";

  // Add lowercase characters to password if selected
  if (options.hasLower) {
    password += getRandom(lowerCasedCharacters);
  }

  // Add uppercase characters to password if selected
  if (options.hasUpper) {
    password += getRandom(upperCasedCharacters);
  }

  // Add numeric characters to password if selected
  if (options.hasNumber) {
    password += getRandom(numericCharacters);
  }

  // Add special characters to password if selected
  if (options.hasSpecial) {
    password += getRandom(specialCharacters);
  }

  // Add remaining characters to complete desired length
  for (let i = password.length; i < options.length; i++) {
    let charSet;
    if (options.hasLower) {
      charSet = lowerCasedCharacters;
    } else if (options.hasUpper) {
      charSet = upperCasedCharacters;
    } else if (options.hasNumber) {
      charSet = numericCharacters;
    } else if (options.hasSpecial) {
      charSet = specialCharacters;
    }
    password += getRandom(charSet);
  }

  // Shuffle the password to ensure a random order of characters
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');

  // Return the generated password
  return password;
}

// Add event listener to the generate button

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  // Generate password and display it on the page
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
});





