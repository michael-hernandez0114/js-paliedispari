var utentePariODispari;
var utenteNumero;
var numeroComputer;
var somma;


do {
    utentePariODispari = prompt("Che pensi? Un numero Pari o Dispari?");
} while (checkUtentePariODis(utentePariODispari));
//utentePariODispari = prompt("Che pensi? Un numero Pari o Dispari?");
utenteNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
numeroComputer = randomNumber(1, 5);

console.log("numeroComputer e: " + numeroComputer);

somma = numeroComputer + utenteNumero;

console.log("somma e: " + somma);


function checkUtentePariODis (userInput) {

    var acceptedInput = ["pari","dispari"];
    var result;

    if (acceptedInput.includes(userInput.toLowerCase())) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}

function ePari (numero) {
    var result;
    if (numero % 2 == 0) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
