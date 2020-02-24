var utentePariODispari;
var utenteNumero;
var numeroComputer;
var somma;
var vince;


do {
    utentePariODispari = prompt("Che pensi? Un numero Pari o Dispari?");
} while (checkUtentePariODis(utentePariODispari));

do {
    utenteNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (checkUtenteNumero(utenteNumero));

numeroComputer = randomNumber(1, 5);

alert("Il computer ha scelto: " + numeroComputer);

somma = numeroComputer + utenteNumero;

console.log("somma e: " + somma);

alert("La somma dell'utente e il computer e: " + somma);

if ((ePari(somma) && utentePariODispari.toLowerCase() == "pari")
    || (!ePari(somma) && utentePariODispari.toLowerCase() == "dispari")){
    vince = "utente";
}
else {
    vince = 'computer';
}

alert("Al fine, il ganadore e: " + vince);

function checkUtentePariODis (userInput) {

    var acceptedInput = ["pari","dispari"];
    var keepPrompting;

    if (acceptedInput.includes(userInput.toLowerCase())) {
        keepPrompting = false;
    }
    else {
        keepPrompting = true;
    }

    return keepPrompting;
}

function checkUtenteNumero (numeroValido) {
    var keepPrompting;

    if (numeroValido >= 1 && numeroValido <= 5) {
        keepPrompting = false;
    }
    else {
        keepPrompting = true;
    }

    return keepPrompting;
}

function ePari (numero) {
    var ePari;
    if (numero % 2 == 0) {
        ePari = true;
    }
    else {
        ePari = false;
    }

    return ePari;
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
