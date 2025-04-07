function executarExercicio10() {
    alert(`Exercicio 10)\nFaça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.`)

    let numero = parseFloat(prompt(`Digite um numero: `))
    let contadora = 0

    do {
        alert(`${numero}X${contadora}=${numero * contadora}`)
        contadora++
    } while (contadora < 11)
}