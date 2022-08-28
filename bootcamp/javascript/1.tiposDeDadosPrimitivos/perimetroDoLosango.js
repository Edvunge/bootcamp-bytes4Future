function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    let a = diagonalMaior/2
    let b = diagonalMenor/2
    let x = 0

    x = Math.hypot(a,b)

    return x*4
}