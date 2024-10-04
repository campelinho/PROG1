import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let hoogte = await userInput.question("kies een hoogte");

for (let i = 1; i <= hoogte; i++)
    {
    let rij = "*".repeat(i);
    console.log(rij);
    }
process.exit();