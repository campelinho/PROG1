let gehelegetallen = [-12,6,98,-65,87,5,-54,1,76,34];
console.log("originele array");
console.log(gehelegetallen);
 
 
function sorteren(gehelegetallen) {
 
for (let i = 0; i < gehelegetallen.length; i++) {
 
    let max = i;
 
    for (let j = i + 1; j < gehelegetallen.length; j++) {
 
        if (gehelegetallen[j] > gehelegetallen[max]) {
 
            max = j;
           
        }
       
        
       
    }

   let wissel = gehelegetallen[i];
        gehelegetallen[i] = gehelegetallen[max]
        gehelegetallen[max] = wissel;
}
 
}
 
sorteren(gehelegetallen);
 
console.log("Toon de getallen van groot naar klein: " + gehelegetallen)