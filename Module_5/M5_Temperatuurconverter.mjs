function Temperatuurconverter(temperatuur, isCelcius) {
    if (isCelcius)
    {
        return (temperatuur * 9 / 5) + 32;
    } 
    else 
    {
        
        return (temperatuur - 32) * 5 / 9;
    }
}



let result1 = Temperatuurconverter(13.89, true); 
console.log(result1); 

let result2 = Temperatuurconverter(57, false); 
console.log(result2); 
