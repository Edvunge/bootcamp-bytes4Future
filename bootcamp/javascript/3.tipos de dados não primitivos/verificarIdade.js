/*
Cria a função verificaIdade que recebe um argumento pessoa que é do tipo objeto e retorna o mesmo objeto com uma propriedade maiorIdade que é um booleano, dependente da idade
*/
function verificaIdade(pessoa) {
    // escreve aqui a função
    if(pessoa.idade >= 18){
        pessoa.maiorDeIdade = true
    }else{
        pessoa.maiorDeIdade = false
    }
    return pessoa
}