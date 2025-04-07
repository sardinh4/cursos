function executarExercicio49() {
    alert(`Exercicio 49)\nEscreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let contadora = 1, fatorial = 1

    while (contadora <= numero) {
        fatorial = fatorial * contadora
        contadora++
    }
    alert(fatorial)
}