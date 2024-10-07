import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let oppervlakte;
let zijde1 = parseFloat(await userInput.question("geef een getal in "));
let zijde2 = parseFloat(await userInput.question("geef een getal in "));

oppervlakte = zijde1*zijde2;
console.log("De oppervlakte is " + oppervlakte);

process.exit();
