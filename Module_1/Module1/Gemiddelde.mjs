import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gemiddelde = 0;

let jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
 gemiddelde += jeGetal1;

 jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
 gemiddelde += jeGetal1;


 jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
 gemiddelde += jeGetal1;
 

 jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
 gemiddelde += jeGetal1;

 gemiddelde = gemiddelde / 4;

 console.log("de gemiddelde is " + gemiddelde);

 process.exit();
 