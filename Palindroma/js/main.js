var userInput;
var isPalindrome;
const regExp = '^[A-Za-z]+$'

do {
    userInput = prompt("Scrivi una parola");
} while (checkUserInput(userInput));

//userInput = prompt("Please enter a word");

isPalindrome = checkPalindrome(userInput)

//console.log(userInput[0]);
//console.log(userInput.length);

console.log(isPalindrome);

if (isPalindrome) {
    alert("La parola che hai scelto e una palindroma!")
}
else {
    alert("La parola che hai scelto non e una palindroma!")
}


function checkUserInput (value) {
    var keepPrompting;

    if (value.match(regExp) === null) {
        keepPrompting = true;
    }
    else {
        keepPrompting = false;
    }
    console.log(value.match(regExp));
    return keepPrompting;
}

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
