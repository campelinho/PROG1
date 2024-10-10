




function Cirkel(straal)
{
    return Math.PI * straal * straal;
    
}

function Driehoek(basis,hoogte)
{
    return basis * hoogte /2;
  
}


function rechthoek(zijde1,zijde2)
{
    return zijde1 * zijde2;
    
}


function vierkant()
{
    return rechthoek(5,2);
}


let oppervlaktecirkel = Cirkel(5);
console.log("De oppervlakte van de cirkel is "+ oppervlaktecirkel);

let oppervlaktedriehoek = Driehoek(5,2);
console.log("De oppervlakte van de driehoek is "+ oppervlaktedriehoek);

let oppervlakterechthoek = rechthoek(5,2);
console.log("De oppervlakte van de rechthoek is "+ oppervlakterechthoek);

let oppervlaktevierkant = vierkant();
console.log("De oppervlakte van de vierkant is "+ oppervlaktevierkant);

