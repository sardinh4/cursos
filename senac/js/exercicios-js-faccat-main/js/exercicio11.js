function executarExercicio11() {
    alert(`Exercicio 11)\n Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.`)

    let carrosVendidos = parseInt(prompt(`Digite a quantidade de carros vendidos: `))
    let valorTotalVendas = parseFloat(prompt(`Digite o valor total da vendas: `))
    let salarioFixo = parseFloat(prompt(`Digite o salário fixo: `))
    let valorPorCarro = parseFloat(prompt(`Digite o valor por carro vendido: `))

    let salarioFinal = salarioFixo + (carrosVendidos * valorPorCarro) + (0.05 * valorTotalVendas)

    alert(`O salário atual é: ${salarioFinal}`)
}