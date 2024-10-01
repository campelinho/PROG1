import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});




let getal = 0;

while(getal<=12){


     console.log(getal);
    getal = getal + 3;
  
   
}
process.exit();