function executarExercicio61() {
    alert(`Exercicio 61)\nEscreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while".`)

    let numero = parseInt(prompt(`Digite um numero inteiro: `))
    let contadora = 1, acumuladora = 0

    do {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
        }
        contadora++
    } while (contadora <= numero)
    alert(acumuladora)
}