function executarExercicio80() {
    alert(`Exercicio 80)\nCrie um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades.`)

    let media = 0; idade = 0; 
    let nome

    for (let contadora = 1; contadora <= 3; contadora++) {
        nome = prompt(`Escreva seu nome: `)
        idade = parseFloat(prompt(`Digite sua idade: `))
        media = media + idade
    }
    alert(`A média de todas as idades será: ${media / 3}`)
}