function executarExercicio55() {
    alert(`Exercicio55)\nEscreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while".`)

    let contadora = 0, multiplicacao = 0
    let numero = parseInt(prompt(`Digite um valor para a tabuada`))

    do {
        multiplicacao = contadora * numero
        alert(`${numero}X${contadora}=${multiplicacao}`)
        contadora++
    } while (contadora <= 10)

}