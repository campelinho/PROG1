import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in: "));

if(getal % 2 == 0 )
{
    console.log(getal + " " + "is een even getal");
}
else
{
    console.log(getal + " " + "is een oneven getal");
}

process.exit();