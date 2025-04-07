function executarExercicio05() {
    alert(`Exercicio 05)\nEscreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.`)

    let precoProduto = parseFloat(prompt(`Digite o preço do produto: `))
    let quantidade = parseFloat(prompt(`Digite a quantidade comprada: `))
    let valorTotal

    if (quantidade >= 10) {
        valorTotal = precoProduto * quantidade * 0.9
    } else {
        valorTotal = precoProduto * quantidade
    }
    alert(`Valor total a ser pago: ${valorTotal}`)
}