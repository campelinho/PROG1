import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let getal1 = await userInput.question("Geef een getal in ");
let getal2 = await userInput.question("Geef een Tweede getal in ");


if(getal1 >0 && getal2 >0)
{
console.log("Beide getallen zijn positief");
}

else if (getal1 >0 && getal2 < 0 )
{
    console.log("Het eerste getal is positief en het tweede getal is negatief");
}

else if (getal1 < 0 && getal2 > 0 )
    {
        console.log("Het eerste getal is negatief en het tweede getal is positief");
    }

else if (getal1 < 0 && getal2 < 0 )
     {
         console.log("Beide getallen zijn negatief");
     }


     else if (getal1 == 0 || getal2 == 0 )
        {
            console.log("Een van de getallen is nul");
        }

    
    process.exit();