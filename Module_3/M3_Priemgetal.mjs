import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let getal = parseFloat(await userInput.question('Geef een getal:'));
 
 
    for(let i = 2; i<= getal/2;i++)
    {
        console.log(i);
        if(getal%i==0)
        {
            console.log("Het getal " + getal + " is geen priemgetal");
        }
        else
        {
            console.log("Het getal " + getal + " is een priemgetal");
        }
        break;
    }
    
    
 
 
process.exit();