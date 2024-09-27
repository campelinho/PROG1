import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log("Welkom bij de quiz! Beantwoord de volgende 5 Vragen");

let vraag1 = await userInput.question("Wat is de Hoofdstad van Frankrijk?");
let score = 0;
let resultaat;
if(vraag1 == "Parijs")

{ console.log("Goed Antwoord");
score++;}
else{console.log("Fout Antwoord Het juiste antwoord is Parijs");}

let vraag2 = await userInput.question("Hoeveel planeten zijn er in ons zonnestelsel?");

if(vraag2 == "8")

{console.log("Goed Antwoord proficiat!");

score++;}
else{console.log("Fout Antwoord Het juiste antwoord is 8");}

let vraag3 = await userInput.question("Wat is het grootste zoogdier ter wereld?");

if(vraag3 == "Blauwe vinvis")

{console.log("Goed Antwoord proficiat!");
    score++;
}
else{console.log("Fout Antwoord Het juiste antwoord is Blauwe vinvis");}


let vraag4 = await userInput.question("Wie schreef het toneelstuk 'Romeo en Julia'?");

if(vraag4 == "Shakespeare")

{console.log("Goed Antwoord proficiat!");
    score++;
}
else{console.log("Fout Antwoord Het juiste antwoord is Shakespeare");}



let vraag5 = await userInput.question("Hoeveel poten heeft een spin?");

if(vraag5 == "8")

{console.log("Goed Antwoord proficiat!");
    score++;
}
else{console.log("Fout Antwoord Het juiste antwoord is 8");}


console.log("je behaalde " + score +" "+ "op 5");


process.exit();