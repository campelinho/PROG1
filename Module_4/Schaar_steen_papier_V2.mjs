import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });

let choices = ['steen', 'papier', 'schaar'];

let userScore = 0;
let computerScore = 0;

while (userScore < 3 && computerScore < 3) {
    // Computer maakt een nieuwe keuze elke ronde
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let keuze = await userInput.question("Kies uit schaar, steen of papier: ");

    if (keuze == computerChoice) {
        console.log("Gelijkspel! Probeer opnieuw.");
    } else if (computerChoice === 'steen' && keuze === 'papier') {
        console.log("Computer koos " + computerChoice + ". Jij wint!");
        userScore++;
    } else if (computerChoice === 'steen' && keuze === 'schaar') {
        console.log("Computer koos " + computerChoice + ". Jij verliest.");
        computerScore++;
    } else if (computerChoice === 'schaar' && keuze === 'steen') {
        console.log("Computer koos " + computerChoice + ". Jij wint!");
        userScore++;
    } else if (computerChoice === 'schaar' && keuze === 'papier') {
        console.log("Computer koos " + computerChoice + ". Jij verliest.");
        computerScore++;
    } else if (computerChoice === 'papier' && keuze === 'schaar') {
        console.log("Computer koos " + computerChoice + ". Jij wint!");
        userScore++;
    } else if (computerChoice === 'papier' && keuze === 'steen') {
        console.log("Computer koos " + computerChoice + ". Jij verliest.");
        computerScore++;
    } else {
        console.log("Ongeldige keuze. Probeer opnieuw.");
    }

    // Toon de huidige score
    console.log(`Stand: Jij - ${userScore}, Computer - ${computerScore}`);
}

if (userScore === 3) {
    console.log("Gefeliciteerd! Je hebt het spel gewonnen.");
} else {
    console.log("Helaas, de computer heeft gewonnen.");
}

process.exit();
