import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log("NL");
console.log("FR");
console.log("EN");

let taal = await userInput.question("Geef u taal in ");

if(taal == "NL")
{
    console.log("Hallo je hebt voor nederlands gekozen");
}

else if(taal == "FR")
    {
        console.log("Bonjour vous avez choisi pour le Français");
    }

else if(taal == "EN")
        {
            console.log("Hey you choose for english");
        }



        process.exit();