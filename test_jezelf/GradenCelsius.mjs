import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let F;
let Graden = parseFloat(await userInput.question('wat is de temperatuur in ° ?:'));

F = ( Graden * 9 / 5) + 32;

console.log('de temperatuur in Fahrenheit is ' + F + ' ' +'F' );

process.exit();
