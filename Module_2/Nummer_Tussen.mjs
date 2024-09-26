import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
let minimum = 0;
let maximum = 60;
 
let getal = parseFloat(await userInput.question('Geef een getal:'));
 
if(getal >= minimum && getal <= maximum ){
 
    console.log("Je getal " + getal + " " + "ligt tussen 0 en 60")
}
 else 
 {
 
    console.log("Je getal " + getal + " " + "ligt niet tussen 0 en 60")
 
 
 }
 process.exit();