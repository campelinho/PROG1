import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});



function begroeting(naam)
{

    console.log("Goedemiddag "+ naam );

}

begroeting("Gabriel");


Process.exit();
