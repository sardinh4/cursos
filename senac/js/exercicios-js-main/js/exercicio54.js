function executarExercicio54() {
    alert(`Exercicio 54)\nFaça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.`)

    
    let numero = 0, contadora = 0, media = 0
    
    do {
        numero = parseFloat(prompt(`Digite um numero: `))
        media = media + numero
        contadora++
    } while (contadora < 5) {
        media = media / contadora
    }
        alert(`A média é: ${media}`)
    }