import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]
let naam = await userInput.question('Voer een naam in :');
function cases(namen)
{
 
switch (naam) {
   
    case 'Amin':
        console.log("0")
        break;
 
        case 'Sofie':
            console.log("1")
            
            break;
 
            case 'Samantha':
                console.log("2")
                
                break;
 
                case 'Karel':
                    console.log("3")
                    break;
 
                    case 'Mehdi':
                        console.log("4")
                        break;
 
                        case 'Joris':
                            console.log("5")
                            break;
 
                            case 'Nuria':
                                console.log("6")
                                break;
 
    default:
        break;
 
}
 }

 
cases();

process.exit();