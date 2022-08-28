/*
Cria uma função que recebe como argumento um número inteiro de qualquer dimensão e retorna o fatorial desse número.
*/
function fatorialN(n){
    // escreve aqui a função
    let solution = BigInt(1)
    for(let i = BigInt(1); i <= n; i++){
        solution = solution * i
    }
    return solution
}