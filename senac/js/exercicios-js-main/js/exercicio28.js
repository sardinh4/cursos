function executarExercicio28() {
    alert(`Exercicio 28)\nFaça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC.`)

    let peso = parseFloat(prompt(`Digite seu peso: `))
    let altura = parseFloat(prompt(`Digite sua altura: `))
    let IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        alert(`IMC = ${IMC}, Abaixo do peso`)
    } else if ((IMC >= 18.5) && (IMC <= 24.9)) {
        alert(`IMC = ${I}, Peso normal`)
    } else if ((IMC >= 25) && (IMC <= 29.9)) {
        alert(`IMC = ${IMC}, Sobrepeso`)
    } else if ((IMC >= 30) && (IMC <= 40)) {
        alert(`IMC = ${IMC}, Obesidade`)
    } else {
        alert(`Obesidade Mórbida`)
    }
}