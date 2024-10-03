import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});




for(let i=1; i<=100;i++)
{


if (i % 3 == 0)
{
console.log(i+" Fizz");
}

else if(i % 5 == 0)
{
console.log(i+" Buzz");
}
else if(i % 3 == 0 && i % 5 == 0)
{
console.log(i +" FizzBuzz");
}

}
process.exit();