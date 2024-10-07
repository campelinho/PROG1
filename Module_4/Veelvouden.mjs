import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


let start = parseFloat(await userInput.question("Met welke getal beginnen we? "));
let end = parseFloat(await userInput.question("Met welke getal eindigen we? "));

let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen?"));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen?"));
let deelbaar1=parseFloat(await userInput.question("Is het deelbaar door deelbaar1?"));
let deelbaar2=parseFloat(await userInput.question("Is het deelbaar door deelbaar2?"));

for(let i=start;i<=end;i++)
{
if(i % deler1 == 0)
{
console.log(i);
}
else if(i % deler2 == 0)
 {
 console.log(i);
}

else if(i % deelbaar1 == 0)
{
    console.log(i);
}
else if(i % deelbaar2 == 0)
    {
        console.log(i);
    }
    

}
process.exit();




