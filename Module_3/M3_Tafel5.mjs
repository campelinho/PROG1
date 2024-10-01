import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("geef een getal in "));
console.log("De tafel van "+ getal+" is ");

for(let i=0; i<=10; i++)
{

let resultaat;
resultaat = getal * i;
console.log(getal+" x "+ i + "=" + resultaat);

}


process.exit();


