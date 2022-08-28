/*
Cria uma função que recebe um array como argumento e retorna o número que mais vezes se repete.
*/

function calculaModa(array){
    // escreve aqui a função
    let cont = 0;
    let ns = -Infinity;
    let ntd = {};
    array.forEach(
        number =>{
            if(!ntd[number]){
                ntd[number] = 1;
            }else{
                ntd[number] += 1;
            }
        })
        for(let i in ntd){
            const total = ntd[i];
            if(total > cont){
                cont = total;
                ns = i;
            }
        }
    return Number(ns)
}