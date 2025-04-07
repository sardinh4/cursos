function executarExercicio03(){
    alert(`Exercicio 03)\nCrie um programa que leia a base e a altura de um triângulo e calcule sua área.`)

    let base = parseFloat(prompt(`Digite o valor de base: `))
    let altura = parseFloat(prompt(`Digite o valor da altura: `))
    let area = base * altura

    alert(`A área do triângulo é: ${area}`)
}