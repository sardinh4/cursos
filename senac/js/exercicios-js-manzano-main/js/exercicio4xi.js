function executarExercicio4xi() {
    alert(`Exercicio 4 I)\nElaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar.`)

    let numero = parseInt(prompt(`Digite um numero: `))

    if (numero % 2 == 0) {
        alert(`O numero é par.`)
    } else {
        alert(`O numero é impar.`)
    }
}