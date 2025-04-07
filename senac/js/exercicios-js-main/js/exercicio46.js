function executarExercicio46() {
    alert(`Exercicio 46)\nEscreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while".`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let contadora = 0, acumuladora = 0

    while (contadora < numero) {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
        }
        contadora++
    }
    alert(acumuladora)
}