function executarExercicio45() {
    alert(`Exercicio 45)\nFaça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".`)

    let primeiroNumero = 1, segundoNumero = 1, fibonacci = 1, contadora = 2
    alert(primeiroNumero)
    alert(segundoNumero)

    while (contadora < 20) {
        fibonacci = primeiroNumero + segundoNumero
        alert(fibonacci)
        primeiroNumero = segundoNumero
        segundoNumero = fibonacci
        contadora++
    }
}