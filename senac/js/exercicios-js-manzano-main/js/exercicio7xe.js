function executarExercicio7xe() {
    alert(`Exercicio 7 E)\nEfetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).`)

    let valor = parseFloat(prompt(`Digite o valor da prestação: `))
    let taxa = parseFloat(prompt(`Digite o valor da taxa: `))
    let tempo = parseFloat(prompt(`Digite o valor do tempo: `))
    let prestacao = valor + (valor * taxa / 100 * tempo)

    alert(`O valor da prestação será: ${prestacao} reais`)
}