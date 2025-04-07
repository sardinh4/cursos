function executarExercicio65() {
    alert(`Exercicio 65)\nCrie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.`)

    let contadora = 0, idade = 0, acumuladora = 0, media = 0, nome

    do {
        nome = prompt(`Escreva seu nome: `)
        idade = parseInt(prompt(`Digite sua idade: `))
        acumuladora = acumuladora + idade

        contadora++
        nome = prompt(`Deseja adicionar mais pessoas? Escreva 'fim' para encerrar: `)

    } while (nome != "fim")
    media = acumuladora / contadora
    alert(`A média das idades será: ${media}`)
}