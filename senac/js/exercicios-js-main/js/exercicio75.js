function executarExercicio75() {
    alert(`Exercicio 75)\nFaça um programa que exiba os primeiros 20 números da sequência de Fibonacci.`)

    let termoAnterior = 1; termoAtual = 1; proximoTermo = 0;

    alert(`Termo 1: ${termoAnterior}`)
    alert(`Termo 2: ${termoAtual}`)
    for (let contadora = 3; contadora <= 20; contadora++) {
        proximoTermo = termoAnterior + termoAtual
        alert(`Termo ${contadora}: ${proximoTermo}`)
        termoAnterior = termoAtual
        termoAtual = proximoTermo
    }
}