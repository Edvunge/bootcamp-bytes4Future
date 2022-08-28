/*
USANDO SOME
Cria uma função que recebe um array e um número como argumentos e verifica se possui algum elemento menor que n.
*/
function existeMenorDoQueN(array, n){
    // escreve aqui a função
    return array.some(array => array < n)
}