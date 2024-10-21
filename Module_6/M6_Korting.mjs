let prijzen = [85,90,68,92,78,76];
let korting;
let nieuwprijs;



function geefkorting(prijzen)
{
    korting = prijzen / 100 *15;
    nieuwprijs = prijzen - korting;
    console.log("De nieuwe prijs is " + nieuwprijs);
}

for(let i=0; i < prijzen.length; i++)
    {
        geefkorting(prijzen[i]);
    }
