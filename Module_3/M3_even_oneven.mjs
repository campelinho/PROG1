import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


 
for(let getal = 1; getal <= 20; getal++){
 
    if(getal % 2 == 0)
        {
       console.log(getal);
    }
   
 
}
 
process.exit();