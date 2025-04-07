function executarExercicio10() {
    alert("Exercicio 10)\n O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do  distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidorseja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. ")

    let custoFabrica = parseFloat(prompt(`Informe o cuto de fábrica do carro`))

    let custoConsumidor = custoFabrica + (custoFabrica * 0.28) + (custoFabrica * 0.45)

    alert(`O custo do consumidor erá: ${custoConsumidor}`)
}