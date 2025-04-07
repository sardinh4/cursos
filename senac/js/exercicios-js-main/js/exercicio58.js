function executarExercicio58() {
    alert(`Exercicio 58)\nEscreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while".`)

    let primeiroNumero = 1, segundoNumero = 1, fibonacci = 0, contadora = 1
    let numero = parseInt(prompt(`Digite um numero: `))
    alert(primeiroNumero)
    alert(segundoNumero)
    
    do {
        contadora++
        fibonacci = primeiroNumero + segundoNumero
        alert(fibonacci)
        primeiroNumero = segundoNumero
        segundoNumero = fibonacci
    } while (fibonacci < numero)


}
