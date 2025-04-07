function executarExercicio40(){
    alert(`Exercicio 40)\nEscreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".`)

    let contadora = 0, multiplicacao = 0
    let numero = parseInt(prompt(`Digite um valor para a tabuada`))

    while (contadora <= 10) {
        multiplicacao = contadora * numero
        alert(`${numero}X${contadora}=${multiplicacao}`)
        contadora++
    }
}