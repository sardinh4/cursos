function executarExercicio12() {
    alert(`Exercicio 12)\nCrie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC).`)

    let peso = parseFloat(prompt(`Digite seu peso: `))
    let altura = parseFloat(prompt(`Digite sua altura: `))
    let iMC = (peso) / (altura * altura)

    alert(`O seu Índice de Massa Corporal(IMC) é: ${iMC}`)
}