/*
Cria uma função que recebe como argumento um número e retorna a soma de todos os quadrados de um até ao número inclusive.
*/
function somaQuadradosAteN(n){
    // escreve aqui a função
    let soma = 0

    for(let i = 1; i <= n; i++){
        soma += i ** 2
    }
    return soma
}