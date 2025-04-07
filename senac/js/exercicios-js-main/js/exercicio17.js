function executarExercicio17() {
    alert(`Exercicio 17)\nEscreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.`)

    let idade = parseInt(prompt(`Digite sua idade: `))

    if (idade < 16) {
        alert(`Você é uma criança`)
    } else if (idade < 18) {
        alert(`Você é um pré-adolescente`)
    } else if (idade < 20) {
        alert(`Você é um adolescente`)
    } else if (idade < 60) {
        alert(`Você é uma adulto`)
    } else if (idade < 150) {
        alert(`Você é um idoso`)
    } else {
        alert(`Digite uma idade`)
    }
}