import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

/*
let i = 1;
while(i <= 3){
    let j = 1;
    while(j <= 2){
        console.log(`Buitenste lus: ${i}, Geneste lus: ${j}`);
        j++;
    }
    i++;
}


1 2 3 4
2 4 6 8
3 6 9 12


for(let i=1;i<=4;i++)
{
    console.log("buitenste lus "+i);
    for(let j=2;j<=8;j+=2)
    {
        console.log("Eerste lus "+j);
    }

    for(let k=3;k<=12;k+=3)
    {
        console.log("Tweede lus "+k);
    }
    
}
*/



for (let i = 1; i <= 3; i++)
    {
    let rij = "";
    for (let j = 1; j <= 4; j++)
    {
      rij += (i * j) + " ";
    }
 
    console.log(rij)

    }
process.exit();