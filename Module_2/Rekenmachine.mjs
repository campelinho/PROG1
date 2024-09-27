import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log("Welke berekeningen wil je uitvoeren?");
console.log("1.Optelling");
console.log("2.Aftrekking");
console.log("3.Product")
console.log("4.Deling");


let rekenen = await userInput.question('keuze:');

let Getal1 = parseFloat(await userInput.question('Geef een eerste getal in:'));

let Getal2 = parseFloat(await userInput.question('Geef een tweede getal in:'));



let resultaat = 0;

switch(rekenen)
{
    case "1":
       resultaat = Getal1 + Getal2; 
       console.log(resultaat);
    break;

    case "2":
           resultaat = Getal1 - Getal2; 
           console.log(resultaat);
    break;

    case "3":
           resultaat = Getal1 * Getal2;
           console.log(resultaat);
        break;

     case "4":
            if(Getal1 == 0 || Getal2 ==0 )
            {console.log("je mag niet door 0 delen");}
            else{
           resultaat = Getal1 / Getal2;
           console.log(resultaat);
         break;
            }
       default:
       console.log("Berekening niet mogelijk");


}


process.exit();