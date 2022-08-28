/*
Cria uma função que recebe um decimal como argumento e retorna o número arredondado às décimas, recorrendo ao arredondamento padrão (que aprendeste em Matemática).
*/
function arredondarAsDecimas(d){
    // escreve aqui a função
    
    //return Math.round(d * 100/10)
    let result = +(d.toFixed(1))
    return result
}