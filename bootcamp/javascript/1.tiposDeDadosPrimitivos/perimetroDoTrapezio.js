/*
Cria uma função que recebe dois comprimentos (das bases) e a altura de um trapézio isósceles como argumentos e calcula o perímetro desse trapézio.
*/
function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    let x = 0
    let y = 0

    x = (comprimentoMaior - comprimentoMenor ) / 2
    y = Math.hypot(x, altura)

    return y + y + comprimentoMaior + comprimentoMenor
}