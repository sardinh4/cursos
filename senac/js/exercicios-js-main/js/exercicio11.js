function executarExercicio11() {
    alert(`Exercicoi 11)\nEscreva um programa que calcule a média aritmética entre três números reais inseridos pelo usuário.`)

    let numero1 = parseFloat(prompt(`Digite o primeiro numero: `))
    let numero2 = parseFloat(prompt(`Digite o sefundo numero: `))
    let numero3 = parseFloat(prompt(`Digite o terceiro numero: `))
    let media = (numero1 + numero2 + numero3) / 3

    alert(`A média aritmética será: ${media}`)
}