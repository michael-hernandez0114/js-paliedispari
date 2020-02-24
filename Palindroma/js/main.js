var userInput;
var isPalindrome;

userInput = prompt("Please enter a word");

isPalindrome = checkPalindrome(userInput)

console.log(userInput[0]);
console.log(userInput.length);

console.log(isPalindrome);

function checkPalindrome (word) {

    var userInputReverse = "";
    var result;

    for (var i = word.length - 1; i >= 0; i--) {
        userInputReverse += word[i];
    }

    if (word == userInputReverse) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}
