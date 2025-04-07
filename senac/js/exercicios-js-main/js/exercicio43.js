function executarExercicio43(){
    alert(`Exercicio 43)\nEscreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while".`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let termo1 = 1, termo2 = 1, termoN = 0, contadora = 1

    while (numero >= contadora) {
        termoN = termo2
        alert(termoN)

        termo2 = termo1
        termo1 = termo2 + termoN
        contadora++
    }
}