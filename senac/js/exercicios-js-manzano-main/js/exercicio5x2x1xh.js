function executarExercicio5x2x1xh() {
    alert(`Exercicio 5.2.1 H)\nlaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial. `)

    let comodo; resposta = "sim"
    let largura = 0; comprimento = 0; area = 0; valorTotal = 0;

    do {
        comodo = prompt(`Escreva o nome do cômodo: `)
        largura = parseFloat(prompt(`Digite a largura do cômodo: `))
        comprimento = parseFloat(prompt(`Digiteo o comprimento do cômodo: `))

        area = largura * comprimento
        valorTotal += area

        alert(`A área do cômodo ${comodo} é: ${area} metros quadrados.`)
        resposta = prompt(`Deseja calcular novos cômodos?: `)
    } while (resposta == "sim")

    alert(`A área total será: ${valorTotal}`)
}