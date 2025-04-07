function executarExercicio08() {
    alert(`Exercicio 08)\nEscreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa. `)

    let valor1 = parseInt(prompt(`Digite o valor 1: `))
    let valor2 = parseInt(prompt(`Digite o valor 2: `))
    let temp

    temp = valor1
    valor1 = valor2
    valor2 = temp

    alert(`Os valores trocados ficam: ${valor1}, ${valor2}`)
}