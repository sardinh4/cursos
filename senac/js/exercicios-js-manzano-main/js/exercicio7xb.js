function executarExercicio7xb(){
    alert(`Exercicio 7 B)\nLer uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
    conversão é C = (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.`)

    let f = parseFloat(prompt(`Digite a temperatura em fahrenheit para ser convertido em celsius: `))
    let c = (f-32)*(5/9)
    alert(`A temperatura convertida em celsius será: ${c}`)
}