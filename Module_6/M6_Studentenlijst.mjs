
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let namen = [];
let naam;

do
{
 naam = await userInput.question('voer een naam in: ');
}
while(naam != "S")
{
    namen.push(naam);
    

       if (naam === 'S')
{
       console.log(namen); 
       
       
}

}process.exit();