function executarExercicio37() {
    alert(`Exercicio 27)\n De acordo com a tabela, se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente`)

    let quantidadeMorangos = parseInt(prompt(`Informe a quantidade (em Kg) de morangos adquiridos:`))
    let quantidadeMacas = parseInt(prompt(`Informe a quantidade (em Kg) de maçãs adquiridos:`))
    let valorMorangos
    let valorMacas
    let valorDesconto
    let valorTotal

    if (quantidadeMorangos <= 5) {
        valorMorangos = quantidadeMorangos * 2.50
    } else {
        valorMorangos = quantidadeMorangos * 2.20
    }

    if (quantidadeMacas <= 5) {
        valorMacas = quantidadeMacas * 1.80
    } else {
        valorMacas = quantidadeMacas * 1.50
    }
    valorTotal = valorMorangos + valorMacas

    if ((quantidadeMacas + quantidadeMorangos > 8) || (valorTotal > 25)) {
        valorDesconto = valorTotal * 0.10
        valorTotal = valorTotal - valorDesconto
    }
    alert(`Valor a ser pago pelo cliente: R$${valorTotal}`)
}