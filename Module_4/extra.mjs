import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
//vraag user input
let som = 0;
let getal;
let getal2;
do{
//vraag user input .question("welk getal wil je optellen?")
 getal = parseFloat(await userInput.question('Geef een getal tussen 5 en 20:'));
   
}while(getal <5 || getal>20);

do{
    //vraag user input .question("welk getal wil je optellen?")
     getal2 = parseFloat(await userInput.question('Geef een getal tussen 5 en 20:'));
       
    }while(getal <5 || getal>20);
     
    let berekening = await userInput.question("geef de berekening (*,/,+,-)");

    switch(berekening){
        case "+":
            console.log()
    }
 
 

 
 
process.exit();
 
 


