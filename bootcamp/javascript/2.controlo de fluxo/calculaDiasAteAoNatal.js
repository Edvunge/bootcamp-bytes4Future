function calculaDiasAteAoNatal(dia, mes){
    // escreve aqui a função
    const MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let indexMes = mes - 1
    let soma = 0
    let mesdia = 0
    let natal = 0
    let natal2 = 0

    for(let i = 0; i < indexMes; i++) {
        mesdia += MES[i]
    }
    soma = mesdia + dia
    natal = 359 - soma

    if (natal == 0) return "Hoje é Natal."
    if (natal > 0 && natal < 359) return `Faltam ${natal} dias até ao Natal.`
    if (natal > 359){
        natal2 = 360 + (365 - natal)
        return `Faltam ${natal2} dias até ao Natal.`
    }

}
