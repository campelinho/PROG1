import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Dag = await userInput.question('Welke dag van de week is het vandaag? ');
console.log(Dag);

let Maand = await userInput.question('Welke maand zijn we vandaag? ');
console.log(Maand);

let Dag_maand = await userInput.question(' De hoeveelste dag van de maand is het? ');
console.log('Het is vandaag' + '  ' + Dag +'  '+ Dag_maand +'  '+ Maand);

process.exit();