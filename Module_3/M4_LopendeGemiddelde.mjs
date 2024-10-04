import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal;
let gemiddelde =0;
let teller=0;

do
{
    getal = parseFloat(await userInput.question('Geef een getal:'));
    gemiddelde+=getal;
    teller++;
    gemiddelde = gemiddelde/teller;
    
    console.log(gemiddelde);
}

while(gemiddelde<=25)


process.exit();