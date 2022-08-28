/*
USANDO RECURSÃO -

Cria uma função que recebe um array como argumento e conta o número de elementos pares existentes nesse array.
*/
function contaParesDoArray(array){
    // escreve aqui a função
    let arr = []
    let count = 0

    for(let i = 0;i<array.length; i++){
        if(array[i] % 2 == 0 ){
            count++
        }
    }
    return count++
}