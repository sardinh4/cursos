function executarExercicio63() {
    alert(`Exercicio 63)\nFaça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".`)

    let numero = parseInt(prompt(`Digite um numero: `))

    do {
        alert(numero % 10)
        numero = numero - (numero % 10)
        numero = (numero) / 10
    } while (numero / 10 != 0)
}