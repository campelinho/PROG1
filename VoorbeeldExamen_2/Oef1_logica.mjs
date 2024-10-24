import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let resultaat;



let min = 1;
let max = 10;

function random(min, max) 
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
 
}
let teller= 0;

let getal = parseFloat(await userInput.question("Hoeveel willekeurige getallen wil je genereren? "));

for(let i = 1; i<=getal ; i++ )
{
    
            resultaat = random(1,10);
           
            process.stdout.write(`${resultaat},` );



        if (resultaat % 2==0)
                    { 
                        teller++;   
                        
                    }

        else if (getal>max || getal==0 || getal<0)
        {

             console.log("Foute invoer probeer opnieuw met getallen tussen 1 en 10 ")
            
        }

        
}

console.log( '\n' +"Van de gegenereerde getallen zijn er " +  teller + " even")



process.exit();