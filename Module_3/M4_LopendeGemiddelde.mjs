import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let gemiddelde = 0;
let teller = 0;
let som = 0;
 
 
do {
 
    let getal = parseFloat(await userInput.question('Geef een getal:'));
    som += getal;
    teller++;
 
    gemiddelde = som / teller;
 
    console.log(gemiddelde);
 
   
   
} while (gemiddelde <= 25);
 
process.exit()