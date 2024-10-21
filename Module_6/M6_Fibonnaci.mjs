/*Schrijf code om een reeks van Fibonacci op te bouwen, je houd de reeks bij in een array. start met een array dat de waarden 0 en 1 bevat, je vult de array op tot deze 10 getallen bevat. Binnen deze reeks zal elk volgend getal de som zijn van de vorige twee getallen. Het resultaat dat je moet bekomen is dus [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

Escreva o código para construir uma sequência de Fibonacci, acompanhando a sequência em um array. comece com um array contendo os valores 0 e 1, você preenche o array até que ele contenha 10 números. Dentro desta série, cada número subsequente será a soma dos dois números anteriores. O resultado que você precisa obter é, portanto, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

*/


let fibonacci = [0, 1];


while (fibonacci.length < 10) 
{
  let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(next);
}

console.log(fibonacci);
