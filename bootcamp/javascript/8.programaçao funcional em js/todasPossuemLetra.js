/*
usando every
Cria uma função que recebe um array de palavras e uma letra como argumentos e verifica se todas as palavras possuem essa letra.
*/
function todasPossuemLetra(array, letra){
    // escreve aqui a função
    return array.every(element => element.includes(letra))
}