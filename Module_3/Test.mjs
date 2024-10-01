import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
let getal;
let som = 0;
 
for(let i = 0; i >= 0; i++){
   
    getal = parseFloat(await userInput.question('Geef een getal:'));
    som += getal;
 
    if(getal <= 0)
        {
         console.log(som)
         break;
    }
   
 
}
 
process.exit();