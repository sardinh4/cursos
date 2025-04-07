function executarExercicio57() {
    alert(`Exercicio57)\nFaça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while".`)

    let contadora = 0, contadoraPrimo = 0

    let numero = parseInt(prompt(`Digite um numero: `))

    do {
        if (numero % contadora == 0) {
            contadoraPrimo++
        }
        contadora++
    } while (numero >= contadora)

    if (contadoraPrimo == 2) {
        alert(`${numero} é primo`)
    } else {
        alert(`${numero} não é primo`)
    }
}