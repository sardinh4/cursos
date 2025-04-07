function executarExercicio76() {
    alert(`Exercicio 76)\nEscreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido.`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let acumuladora = 0

    for (let contadora = 0; contadora <= numero; contadora++) {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
        }

    }
    alert(`A soma dos numero será: ${acumuladora}`)
}