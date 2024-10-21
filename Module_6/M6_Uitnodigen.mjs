
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let namen = [" Gabriel"," Souhail"," Leo"," Bivol"];





for(let i=0; i< namen.length; i++)
    {
        console.log("Ik nodig " + namen[i] +  " uit om deel te nemen aan de beste cursus van de school");
    }

    process.exit();