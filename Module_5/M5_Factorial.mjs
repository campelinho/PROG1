let result = 0;
let i=0;

function factorial(nummer)
{
    if(i<=nummer)
    {
        result = i*i;
        i++;
    }    
    else
    {
        console.error("IMPOSSIBLE ZEBI");
    }
}


let print = factorial(5);
console.log(print);