function executarExercicio7xa(){
    alert(`Exercicio 7 A)\nLer uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
    conversão é F = (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius`)


    let c = parseFloat(prompt(`Digite a temperatura em celsius para converter em fahrenheit`))
    let f = (9*c+160)/5
    alert(`A temperatura convertida será: ${f}`)
    
}