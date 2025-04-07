function executarExercicio72() {
    alert(`Exercicio 72)\nFaça um programa que leia um número inteiro e exiba se ele é um número primo.`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let divisor = 0

    for (let contadora = 1; contadora <= numero; contadora++) {
        if (numero % contadora == 0) {
            divisor = divisor + 1
        }

    }
    if (divisor == 2) {
        alert(`${numero} é um numero primo`)
    } else {
        alert(`${numero} não é um numero primo`)
    }
}