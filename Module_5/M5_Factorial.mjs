import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let result = 1;
let i;
 
let getal = parseFloat(await userInput.question('Geef een getal:'));
 
 
function factorial(factorialGetal) {
   
    for (let i = 1; i <= factorialGetal; i++) {
       
        result = result * i;
        process.stdout.write(i + " x " );
       
    }
 
    if (i < 1) {
 
        console.error("Foutieve Invoer")
       
    }
 
    return result;
   
}
 
let resultaat = factorial(getal);
 
console.log(resultaat);
 
process.exit();