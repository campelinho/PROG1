import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});




/*let getal;
let som = 0;

while(som <= 100){
   getal = parseFloat(await userInput.question('Geef een getal in: '));
   som += getal;
}
   */

let getal; 

for(let som=0; som <= 100; som += getal)
{
    getal = parseFloat(await userInput.question('Geef een getal in: '));
    
}

process.exit();