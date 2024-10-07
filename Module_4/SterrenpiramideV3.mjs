import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


 

let startTop = true;
let startLeft = false;
let hoogte = 3;
 


if (startTop && startLeft) {
    for (let i = 1; i <= hoogte; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row);
    }
}


else if (!startTop && startLeft) {
    for (let i = hoogte; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row);
    }
}
     

else if (startTop && !startLeft) {
    for (let i = 1; i <= hoogte; i++) {
        let row = "";

        // Voeg spaties toe voor de sterretjes
        for (let j = 1; j <= hoogte - i; j++) {
            row += " ";
        }

        // Voeg de sterretjes toe
        for (let k = 1; k <= i; k++) {
            row += k;
        }

        console.log(row);
    }
}
    
    process.exit();