function executarExercicio35() {
    alert(`Exercicio 35)\n) Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".`)

    let numero1 = parseFloat(prompt(`Digite a primeira nota: `))
    let numero2 = parseFloat(prompt(`Digite a segunda nota: `))
    let numero3 = parseFloat(prompt(`Digite a terceira nota: `))
    let media = (numero1 + numero2 + numero3) / 3

    if (media >= 7) {
        alert(`Aprovado`)
    } else {
        alert(`Reprovado`)
    }
}