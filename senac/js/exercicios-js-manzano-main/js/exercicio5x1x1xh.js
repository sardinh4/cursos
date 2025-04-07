function executarExercicio5x1x1xh() {
    alert(`Exercicio 5.1.1 H)\nElaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é f = (9*c+160)/5 , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.`)

    let c = 10; let f = 0

    while (c <= 100) {
        f = (9 * c + 160) / 5
        alert(`Celsius: ${c} || Fahrenheit: ${f}`)
        c = c + 10
    }

}