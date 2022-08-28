/*
USANDO RECURSÃO

Cria uma função que recebe um array como argumento e retorna o array invertido.
*/
function inverteArray(array){
    // escreve aqui a função
    if(!array.length) return array
    return inverteArray(array.slice(1)).concat(array[0])
}