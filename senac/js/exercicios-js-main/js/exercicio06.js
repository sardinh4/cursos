function executarExercicio06() {
    alert(`Exercicio06)\nCrie um programa que leia um número inteiro e exiba se ele é par ou ímpar.`)

    let numero = parseInt(prompt(`Digite um número: `))

    if (numero % 2 != 0) {
        alert(`O numero ${numero} é impar.`)
    } else {
        alert(`O numero ${numero} é par`)
    }
}