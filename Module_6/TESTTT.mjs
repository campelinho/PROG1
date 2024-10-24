import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let getal = parseFloat(userInput.question("Voer een getal in"));


while(getal<3)
    {
 
    }