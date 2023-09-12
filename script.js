// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//////////////////////////////////GAME PLAN/////////////////////////////////////////




// 1. write a function that 





// This line selects the button element with the id "generate" and assigns it to the variable "generateBtn".
var generateBtn = document.querySelector("#generate");

// 1. This function is responsible for writing the generated password to the #password element and then
//    call the generatePassword function and store the resulting password in the "password" variable.
// 3. Select the element with the id "password" and assign it to the variable "passwordText".
// 4. Set the value of the "passwordText" element to the generated password.
function writePassword() {

  var password = generatePassword();


  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// This line adds an click listener to the "generateBtn" button.
// When the button is clicked, the writePassword function is called.
generateBtn.addEventListener("click", writePassword);



// 1. This function is responsible for generating a password based on user input.
// 2. Ask the user for their desired password length and store the response in the "passwordLength" variable.
// 3. Validate that the provided password length is between 8 and 128 and is a number.
function generatePassword() {
    let passwordLength = prompt("Choose a password length between 8 and 128 characters:");
    

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid length between 8 and 128 characters.");
        // If validation fails, return an empty string.
        return "";
    }




    // Ask the user about including various character types in their password.
    let includeLowercase = confirm("Include lowercase characters in your password?");
    let includeUppercase = confirm("Include uppercase characters in your password?");
    let includeNumbers = confirm("Include numeric characters in your password?");
    let includeSpecial = confirm("Include special characters in your password?");
    
    //This sets the strings inclusivity to a set of booleans


    
    // Confirm that at least one character type has been chosen.
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert("You must select at least one character type.");
        return "";
    }



    // Set strings for each character type.
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numLetters = "0123456789";
    const specialLetters = "!@#$%^&*()_-+={}[];:'<>,.?~";
    


    // Set an empty string for possible characters in the generated password.
    let possibleLetters = "";



    // Add chosen character types to the possible characters string.
    if (includeLowercase) possibleLetters += lowerLetters;
    if (includeUppercase) possibleLetters += upperLetters;
    if (includeNumbers) possibleLetters += numLetters;
    if (includeSpecial) possibleLetters += specialLetters;



    // Set the generatedPassword as an empty string.
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        // For each loop, its supposed to pick a random character from possibleLetters and add it to the generatedPassword.
        const randomIndex = Math.floor(Math.random() * possibleLetters.length);
        generatedPassword += possibleLetters[randomIndex];
    }



    
    // Return the generated password.
    return generatedPassword;
}