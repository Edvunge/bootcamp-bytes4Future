function arrayDePares(array){
    // escreve aqui a função
    console.log(array)
    let arr = []
    for(let i = 0;i < array.length;i++){
        if(array[i]%2 == 0){
            arr.push(array[i])
        }
}
return arr
}