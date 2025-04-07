function executarExercicio60() {
    alert(`Exercicio 60)\nFaça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".`)

    let primeiroNumero = 1, segundoNumero = 1, fibonacci = 1,contadora=2
    alert(primeiroNumero)
    alert(segundoNumero)
    do {
        
        fibonacci = primeiroNumero + segundoNumero
        alert(fibonacci)
        primeiroNumero = segundoNumero
        segundoNumero = fibonacci
        contadora++
    } while (contadora < 20)


}