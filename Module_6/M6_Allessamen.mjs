
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let namen = [];
let naam;
let teller=0;
   do
{
    naam = await userInput.question('voer een naam in: ');
    if(naam != "S")
    {
    namen.push(naam);
    }
}

     while(naam != "S" )
        {
            for(let i=0; i< namen.length; i++) 
                {
                  if(naam === "S")
                {
                    console.log("ik nodig "+ namen[i]+" voor de leukste vaak in de school");
                }
                }
        }
    process.exit();