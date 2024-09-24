// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let Getal1 = parseFloat(await userInput.question('Geef een getal in:'));
console.log(Getal1);

let Getal2 = parseFloat(await userInput.question('Geef een getal in:'));
console.log(Getal2);


let som;

som = Getal1 + Getal2;

console.log("De optelling van" + " " + Getal1 + " " + "en" + " " + Getal2 + " " + "=" + " " + som  );





process.exit();