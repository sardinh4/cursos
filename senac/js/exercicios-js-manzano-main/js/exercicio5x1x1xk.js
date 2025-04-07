function executarExercicio5x1x1xk() {
    alert(`Exercicio 5.1.1 K)\nElaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área`)

    let valorTotal = 0; largura = 0; comprimento = 0; area = 0; resposta = 0; 
    let comodo

    while (resposta == 0) {
        comodo = prompt(`Escreva o nome do comodo: `)
        largura = parseFloat(prompt(`Digite a largura do cômodo: `))
        comprimento = parseFloat(prompt(`Digite o comprimento do cômodo: `))

        area = largura * comprimento
        valorTotal = valorTotal + area

        alert(`A área do cômodo ${comodo} é: ${area} metros quadrados.`)
        resposta = parseInt(prompt(`Deseja calcular novos cômodos? 0 para sim e outro numero para não: `))

    }
    alert(`A área total da residência é: ${valorTotal} metros quadrados`)
}