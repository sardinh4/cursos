function executarExercicio37(){
    alert(`Exercicio 37)\nEscreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while".`)

    let soma = 0
    let numero = 1

    while (numero <= 100) {
        soma = numero + soma
        numero++
    }

    alert(soma)
}