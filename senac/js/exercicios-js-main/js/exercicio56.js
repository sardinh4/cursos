function executarExercicio56() {
    alert(`Exercicio 56)\nCrie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".`)

    let contadora = 0
    let numero = parseInt(prompt(`Digite um numero: `))

    do {
        if (numero % contadora == 0) {
            alert(`${numero} é divisivel por: ${contadora}`)
        }
        contadora++
    } while (numero >= contadora)
}