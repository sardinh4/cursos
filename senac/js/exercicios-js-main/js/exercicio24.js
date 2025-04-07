function executarExercicio24() {
    alert(`Exercicio 24)\nCrie um programa que leia três números inteiros e exiba-os em ordem crescente.`)

    let numero1 = parseInt(prompt(`Digite o primeiro numero: `))
    let numero2 = parseInt(prompt(`Digite o segundo numero: `))
    let numero3 = parseInt(prompt(`Digite o terceiro numero: `))
    let menor = 0, medio = 0, maior = 0

    if ((numero1 < numero2) && (numero1 < numero3)) {
        menor = numero1
        if (numero2 < numero3) {
            medio = numero2
            maior = numero3
        } else {
            medio = numero3
            maior = numero2
        }
    } else if ((numero2 < numero1) && (numero2 < numero3)) {
        menor = numero2
        if (numero3 < numero1) {
            medio = numero3
            maior = numero1
        } else {
            medio = numero1
            maior = numero3
        }
    } else {
        menor = numero3
        if (numero2 < numero1) {
            medio = numero2
            maior = numero1
        } else {
            medio = numero1
            maior = numero2
        }
    }

    alert(`Os valores, em ordem crescente, ficam: ${menor}, ${medio}, ${maior}.`)
}