function subtraiDias(data, dias) {
    // escreve aqui a função
   let a = dias * 86400000
   let date  = new Date(data.valueOf() - a)
   return date
}