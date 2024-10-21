
let punten = [85,90,68,92,78,76];

let gemiddelde=0;

for(let i=0; i< punten.length; i++)
    {
        gemiddelde += punten[i];
    } 
        gemiddelde = gemiddelde / punten.length;
        console.log("Gemiddelde score: "+ gemiddelde);