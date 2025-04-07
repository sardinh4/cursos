function executarExercicio18() {
    alert(`Exercicio 18)\nCrie um programa que leia dois números inteiros e exiba o maior deles.`)

    let numero1 = parseInt(prompt(`Digite o primeiro numero: `))
    let numero2 = parseInt(prompt(`Digite o segundo numero: `))
    let maior

    if (numero1 > numero2) {
        maior = numero1
    } else {
        maior = numero2
    }
    alert(`O maior numero é: ${maior}`)
}