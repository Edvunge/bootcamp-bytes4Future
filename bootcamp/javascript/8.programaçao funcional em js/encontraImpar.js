/*
USANDO FIND
Cria uma função que recebe um array como argumento e retorna o primeiro elemento ímpar.
*/
function encontraImpar(array){
    // escreve aqui a função
    return array.find(a => a % 2 !== 0)
}