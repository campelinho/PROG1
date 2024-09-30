import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});



console.log("The Simpsons");
console.log("Game Of Thrones");
console.log("Teen Wolf");


let serie = await userInput.question("Kies een serie uit de lijst ");


switch(serie)
{
    case "The Simpsons":
        console.log("The Simpsons vindt plaats in Springfield");
        break;
    
    case "Game Of Thrones":
        console.log("Game Of Thrones vindt plaats in Westeros en Essos");
        break;

    case "Teen Wolf":
        console.log("Teen wolf vindt plaats in Beacon Hills");
        break;

        default:
            console.log("Sorry, ik weet niet waar "+ serie +" zich afspeelt");

}


process.exit();