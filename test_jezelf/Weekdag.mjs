import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let day = await userInput.question("Kies een dag van de week ");

switch(day)
{
    case "Maandag":
    case "Dinsdag":
    case "Woensdag":
    case "Donderdag":
    case "Vrijdag":
    console.log("Dag van de week");
    break;

    case "Zaterdag":
    case "Zondag":
        console.log("Weekenddag");
        break;

        default:

}

process.exit();