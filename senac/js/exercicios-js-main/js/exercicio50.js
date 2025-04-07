function executarExercicio50() {
    alert(`Exercicio 50)\nCrie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.`)

    let media = 0
    let contadora = 0, acumuladora = 0, idade = 0
    let nome

    while (nome != "fim") { 
        nome = prompt(`Escreva seu nome: `)
        idade = parseFloat(prompt(`Digite sua idade: `))

        acumuladora = acumuladora + idade
        contadora++
        nome = prompt(`Deseja adicionar mais pessoas? Escreva 'fim' para encerrar: `)
    }
    media = acumuladora / contadora

    alert(`A média das idades será: ${media}`)

}