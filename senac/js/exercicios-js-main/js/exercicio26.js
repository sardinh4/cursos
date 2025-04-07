function executarExercicio26() {
    alert(`Exercicio 26)\nEscreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente.`)

    let codigo = parseInt(prompt(`Digite o código do produto: `))
    let quantidade = parseInt(prompt(`Digite a quantidade do produto: `))
    let valorTotal

    switch (codigo) {
        case 1:
            valorTotal = quantidade * 1
            break;
        case 2:
            valorTotal = quantidade * 2
            break;
        case 3:
            valorTotal = quantidade * 3
            break;
        case 4:
            valorTotal = quantidade * 4
            break;
        case 5:
            valorTotal = quantidade * 5
            break;
        default:
            alert(`Código inválido.`)
            break;
    }
    alert(`O valor a pagar pelo produto ${codigo} será: ${valorTotal}`)
}