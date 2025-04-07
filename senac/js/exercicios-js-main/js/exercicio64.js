function executarExercicio64() {
    alert(`Exercicio 64)\nEscreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".`)

    let valor = parseInt(prompt(`Digite um valor: `))
    let contadora = 1
    let fatorial = 1

    do {
        fatorial = fatorial * contadora
        contadora++
    } while (contadora <= valor)
    alert(fatorial)
}