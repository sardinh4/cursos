function executarExercicio48() {
    alert(`Exercicio 48)\nFaça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".`)

    let numero = parseFloat(prompt(`Digite um numero inteiro: `))

    while (numero / 10 != 0) {
        alert(numero % 10)
        numero = numero - (numero % 10)
        numero = (numero) / 10
    }
}