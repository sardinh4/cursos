function executarExercicio35() {
    alert(`Exercicio 35)\n Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. `)

    let litrosVendidos = parseInt(prompt(`Digite a quantidade de litros vendidos:  `))
    let tipoCombustivel = prompt(`Escreva o tipo de combustível:  `)
    let valorAPagar
    let valorSemDesconto
    let desconto

    if ((tipoCombustivel == "A") || (tipoCombustivel == "a")) {
        if (litrosVendidos <= 20) {
            valorSemDesconto = litrosVendidos * 2.90
            desconto = valorSemDesconto * 0.03
            valorAPagar = valorSemDesconto - desconto
        } else {
            valorSemDesconto = litrosVendidos * 2.90
            desconto = valorSemDesconto * 0.05
            valorAPagar = valorSemDesconto - desconto
        }
    } else {
        if (litrosVendidos <= 20) {
            valorSemDesconto = litrosVendidos * 3.30
            desconto = valorSemDesconto * 0.04
            valorAPagar = valorSemDesconto - desconto
        } else {
            valorSemDesconto = litrosVendidos * 3.30
            desconto = valorSemDesconto * 0.06
            valorAPagar = valorSemDesconto - desconto

        }
    }
    alert(`O valor final da compra será: ${valorAPagar}`)
}