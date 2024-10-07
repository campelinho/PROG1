import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let choices = ['steen', 'papier', 'schaar'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

let keuze = await userInput.question("Kies uit schaar steen of papier ");


let resultaat;


if(keuze == computerChoice)
{
console.log("jij hebt hetzelfde gekozen, probeer het opnieuw ");
}


else if(computerChoice == 'steen')
{
resultaat = (keuze == 'schaar'); 
console.log(computerChoice + " you lose");
}


else if(computerChoice == 'schaar')
{
resultaat = (keuze == 'papier'); 
console.log(computerChoice + " you lose");
}

else if(computerChoice == 'papier')
{
resultaat = keuze == 'steen'; 
console.log(computerChoice + " you lose");
}





else if(computerChoice == 'steen')
    {
    resultaat = (keuze == 'papier'); 
    console.log(computerChoice + " you win");
    }
    
    
    else if(computerChoice == 'schaar')
    {
    resultaat = (keuze == 'steen'); 
    console.log(computerChoice + " you win");
    }
    
    else if(computerChoice == 'papier')
    {
    resultaat = keuze == 'schaar'; 
    console.log(computerChoice + " you win");
    }
    
    else
    {
        console.log("invalid choice")
    }


process.exit();