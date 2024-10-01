import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
//vraag user input
let som = 0;
let getal
do{
//vraag user input .question("welk getal wil je optellen?")
 getal = parseFloat(await userInput.question('Geef een getal:'));
    som+=getal;
}while(getal != 0);
 
 
console.log("de som is " + som)
 
 
process.exit();
 
 



