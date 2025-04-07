function executarExercicio5x6x1xj() {
    alert(`Exercicio 5.6.1 J)\nElaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é F = 9C + 160/5 , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.`)

    let Fahrenheit = 0

    for (let Celsius = 10; Celsius < 101; Celsius += 10) {
        Fahrenheit = ((9 * Celsius) + 160) / 5
        alert(`Celsius: ${Celsius}\nFahrenheit: ${Fahrenheit}`)

    }
}