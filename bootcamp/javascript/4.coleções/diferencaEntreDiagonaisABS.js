function diferencaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
    let dia1 = matrizquadrada[0][0] + matrizquadrada[1][1] + matrizquadrada [2][2] + matrizquadrada[3][3]
    let dia2 = matrizquadrada[0][3] + matrizquadrada[1][2] + matrizquadrada [2][1] + matrizquadrada[3][0]

    return Math.abs(dia1-dia2)
}