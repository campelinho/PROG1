import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 
let Waterkoppen = await userInput.question('Hoeveel koppen Water drink je gemiddeld per dag ?');
 
let aantalKoppen = Waterkoppen * 365;
 
console.log('De gebruiker gaat op jaarbasis deze aantal koppen water:'+' '+ aantalKoppen +' '+ 'drinken')
 
process.exit();