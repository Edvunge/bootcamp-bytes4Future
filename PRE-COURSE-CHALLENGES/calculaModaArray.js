/*
Cria uma função que recebe como argumento um array e calcula o número que mais vezes se repete nesse array.

Se existirem dois números com o mesmo número de repetições, deves retornar o menor destes.
*/




/*Cria uma função que recebe como argumento um array e calcula o número que mais vezes se repete nesse array.*/
let arrey = ["1","1","2","2","2"];
var counts = {};
arrey.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

console.log(counts);