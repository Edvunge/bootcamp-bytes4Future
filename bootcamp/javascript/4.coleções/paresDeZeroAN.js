/*
Cria uma função que recebe um número como argumento e retorna um array com os números pares de 0 a n.

Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
*/
function paresDeZeroAN(n){
    // escreve aqui a função
    if(n < 1) {
        return "Por favor insira um número superior a 0."
    }
    let arr = []
    for (let i = 0; i <= n; i+=2){
        if(i % 2 == 0)
        arr.push((i))
    }
    return arr
}