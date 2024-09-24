import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
let gemiddelde = 0;

gemiddelde += jeGetal1;