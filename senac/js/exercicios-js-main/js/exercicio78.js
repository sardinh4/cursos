function executarExercicio78() {
    alert(`Exercicio 78)\nFaça um programa que leia um número inteiro e exiba os seus dígitos separadamente.`)

    let numero = parseFloat(prompt(`Digite um numero inteiro: `))

    let divisor = 1, quantidadeDigitos = 0

    while(divisor<numero){
        quantidadeDigitos = quantidadeDigitos + 1
        divisor = (divisor) * 10
    }

    divisor = (divisor)/10

    for (let contadora = 0; contadora < quantidadeDigitos; contadora++) {
        alert(numero % 10)
        numero = numero - (numero % 10)
        numero = (numero) / 10

    }
}