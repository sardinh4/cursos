function executarExercicio12() {
    alert(`Exercicio 12)\n Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius: C= (5/9*(F-32))`)

    let F = parseFloat(prompt(`Digite a temperatura em Fahrenheit: `))

    let C = (5 / 9 * (F - 32))

    alert(`A temperatura em Celsius é: ${C}`)
}