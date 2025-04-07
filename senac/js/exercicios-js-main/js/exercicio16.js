function executarExercicio16() {
    alert(`Exercicio 16)\nFaça um programa que verifique se um número é positivo, negativo ou zero.`)

    let numero = parseInt(prompt(`Digite um numero: `))

    if (numero < 0) {
        alert(`${numero} é negativo`)
    } else if (numero == 0) {
        alert(`${numero} é zero`)
    } else
        alert(`${numero} é positivo`)
}