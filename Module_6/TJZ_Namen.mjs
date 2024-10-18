let namen = [];
let naam;

while (true) {
    naam = prompt("Voer een naam in (laat leeg om te stoppen):");
    
    if (naam === null || naam.trim() === "") {
        break; // Stopt de lus als er geen naam is ingevoerd
    }
    
    namen.push(naam);
}

console.log("Ingevoerde namen:", namen);
