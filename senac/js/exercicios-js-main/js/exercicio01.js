function executarExercicio01() {
    alert(`Exercicio 01)\nFaça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.`)

    let numero1 = parseInt(prompt(`Digite o primeiro numero: `))
    let numero2 = parseInt(prompt(`Digite o segundo numero: `))

    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let divisao = numero1 / numero2
    let multiplicacao = numero1 * numero2

    alert(`A soma, subtração, divisão e multiplicação, respectivamente, de ${numero1} e ${numero2} é:\n\nSoma: ${soma}\nSubtração: ${subtracao}\nDivisão: ${divisao}\nMultiplicação: ${multiplicacao}.`)
}