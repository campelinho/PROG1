import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });
let getal1=5;
let getal2=2;
let som;

function somvangetallen(getal1 , getal2) 
{
    som = getal1+getal2
    console.log('De som van ' + getal1 +" en " + getal2 +" "+"is "+ som);
}

somvangetallen(getal1,getal2)
process.exit();