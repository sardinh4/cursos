function executarExercicio23() {
    alert(`Exercicio 23)\n Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:  para sexo masculino: peso ideal = (72.7 * altura) - 58 para sexo feminino: peso ideal = (62.1 * altura) - 44.7`)

    let nome = prompt(`Escreval seu nome: `)
    let genero = prompt(`Escreva seu gênero: `)
    let altura = parseFloat(prompt(`Digite sua altura`))

    let pesoIdeal

    if ((genero == `F`) || (genero == `f`)) {
        alert(`feminino`)
        pesoIdeal = (62.1 * altura) - 44.7
    } else if ((genero == `M`) || (genero == `m`)) {
        pesoIdeal = (72.7 * altura) - 58
    } else {
        alert(`Inválido`)
    }

    alert(`O peso ideal para ${nome} será: ${pesoIdeal}`)

}