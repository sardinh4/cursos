function executarExercicio70() {
    alert(`Exercicio 70)\n) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor.`)

    let numero = parseInt(prompt(`Digite um numero: `))

    for (let contadora = 0; contadora < 11; contadora++) {
        alert(`${numero}X${contadora}=${contadora * numero}`)
    }
}