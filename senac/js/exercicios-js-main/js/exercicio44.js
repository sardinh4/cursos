function executarExercicio44(){
    alert(`Exercicio 44)\nCrie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades.`)

    let contadora = 0,mediaIdades=0,idade=10,nome = ""

    while(contadora<5){
        nome = prompt(`Digite seu nome: `)
        idade = parseInt(prompt(`Digite sua idade: `))

        mediaIdades = mediaIdades + idade
        contadora++
    }
    mediaIdades=mediaIdades/contadora

    alert(`A media das idades é de: ${mediaIdades}`)
}