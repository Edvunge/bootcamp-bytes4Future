/*
Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes."
*/
function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    let contador  = 0
    let tr  = 0
    let ter  = 0

    if(valor1 == valor2){
        return "Por favor introduza dois valores diferentes."
    }

    if(valor1>valor2){
        tr = valor1
        ter = valor2
    }else{
        tr = valor2
        ter = valor1
    }

    for(i = ter; i <= tr; i++) {
        if(i%2==0){
            contador++
        }
    }
    return contador
}