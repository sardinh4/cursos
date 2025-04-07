function executarExercicio5x1x1xg() {
    alert(`Exercicio 5.1.1 G)\nEscreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc`)

    let termoAnterior = 1; termoAtual = 1; proximoTermo = 0; contadora = 3;

    alert(`Termo 1 = ${termoAnterior}`)
    alert(`Termo 2 = ${termoAtual}`)

    while (contadora < 16) {
        proximoTermo = termoAnterior + termoAtual
        alert(`Termo ${contadora} = ${proximoTermo}`)
        termoAnterior = termoAtual
        termoAtual = proximoTermo
        contadora++
    }
}