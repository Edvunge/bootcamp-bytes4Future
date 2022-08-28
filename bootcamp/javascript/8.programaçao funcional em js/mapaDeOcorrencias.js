/*
USANDO REDUCE

Cria uma função que recebe um array como argumento e cria um mapa com o número de ocorrências de cada elemento.
*/

function mapaDeOcorrencias(array){
    // escreve aqui a função
    return array.reduce((ola, adeus) => {
        if(!ola.has(adeus)){
            return new Map ([...ola, [adeus,1]])
        }else{
            return new Map([...ola, [adeus, ola.get(adeus)+1]])
        }
    }, new Map())
}