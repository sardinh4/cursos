function executarExercicio4xb() {
    alert(`Exercicio 4 B)\nEfetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. `)

    let numero = parseInt(prompt(`Digite um numero: `))
    let valor = 0

    if (numero < 0) {
        valor = numero * -1
    } else {
        valor = numero
    }

    alert(`O valor absoluto é: ${valor}`)
}