function executarExercicio20() {
    alert(`Exercicio 20)\nEscreva um programa que leia um número inteiro e exiba se ele é par ou ímpar.`)

    let numero = parseInt(prompt(`Digite um numero: `))

    if (numero % 2 == 0) {
        alert(`${numero} é par`)
    } else {
        alert(`${numero} é impar`)
    }
}