function executarExercicio3x10xb() {
    alert(`Exercicio 3.10 B)\nLer o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).`)

    let SM = parseFloat(prompt(`Digite o valor do salário mensal: `))
    let PR = parseFloat(prompt(`Digite o valor do percential de reajuste: : `))
    let NS = SM + (SM * (PR / 100))

    alert(`O novo salário serpa: ${NS}`)
}
