function executarExercicio30() {
    alert(`Exercicio 30)\nCrie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.`)

    let quantidade = parseFloat(prompt(`Digite a quantidade de maçãs compradas: `))
    let valorTotal

    if (quantidade < 12) {
        valorTotal = quantidade * 0.5
    } else {
        valorTotal = quantidade * 0.4
    }
    alert(`O valor total das maçãs será: ${valorTotal}.`)
}