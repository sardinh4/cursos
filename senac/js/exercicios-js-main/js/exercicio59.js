function executarExercicio59() {
    alert(`Exercicio 59)\nCrie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades.`)

    let contadora = 0, mediaIdades = 0, idade = 10, nome = ""

    do {
        nome = prompt(`Digite seu nome: `)
        idade = parseInt(prompt(`Digite sua idade: `))

        mediaIdades = mediaIdades + idade
        contadora++
    } while (contadora <= 4) {
        mediaIdades = mediaIdades / contadora

        alert(`A media das idades é de: ${mediaIdades}`)
    }
}