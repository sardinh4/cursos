function executarExercicio5x1x1xi() {
    alert(`Exercicio 5.1.1 I)\nElaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.`)

    let contadora = 1; acumuladora = 0; media = 0; valor = 0

    while (contadora <= 10) {
        let valor = parseFloat(prompt(`Digite o valor ${contadora}:`))
        acumuladora = acumuladora + valor
        contadora++
    }
    alert(`A soma de todos os valores é: ${acumuladora}\nA média de todos os valores é: ${acumuladora / 10}`)
}