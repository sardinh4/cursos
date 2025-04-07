function executarExercicio74() {
    alert(`Exercicio 74)\nCrie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades.`)

    let idade = 0, media = 0, nome
    for (let contadora = 1; contadora <= 5; contadora++) {
        nome = prompt(`Escreva seu nome: `)
        idade = parseFloat(prompt(`Digite sua idade: `))
        media = media + idade
    }

    alert(`A média das idades será: ${media / 5}`)
}