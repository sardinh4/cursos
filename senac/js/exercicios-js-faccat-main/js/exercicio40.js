function executarExercicio40() {
    alert(`Exercicio 40)\n Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto).`)

    let produto = prompt(`Escreva o nome do produto: `)
    let quantidade = parseInt(prompt(`Digite a quantidade do produto: `))
    let precoUnitario = parseInt(prompt(`Digite o preço unitário do produto: `))
    let desconto
    let total
    let totalPagar

    if (quantidade <= 5) {
        desconto = 0.02
    } else if ((quantidade > 5) && (quantidade <= 10)) {
        desconto = 0.03
    } else {
        desconto = 0.05
    }

    total = quantidade * precoUnitario
    totalPagar = total - desconto

    alert(`O valor total a pagar de ${produto} será: ${totalPagar}`)
}