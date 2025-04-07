function executarExercicio73() {
    alert(`Exercicio 73)\nEscreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido.`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let termoAnterior = 1, termoAtual = 1, proximoTermo = 0

    alert(`Termo 1: ${termoAnterior}`)
    alert(`Termo 2: ${termoAtual}`)

    for (let contadora = 3; termoAtual < numero; contadora++) {
        proximoTermo = termoAnterior + termoAtual
        alert(`Termo ${contadora}: ${proximoTermo}`)
        termoAnterior = termoAtual
        termoAtual = proximoTermo

    }
}