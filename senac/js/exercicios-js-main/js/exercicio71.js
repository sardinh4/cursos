function executarExercicio71() {
    alert(`Exercicio 71)\nCrie um programa que leia um número inteiro positivo e exiba todos os divisores desse número.`)

    let numero = parseInt(prompt(`Digite um numero: `))

    for (let contadora = 1; contadora <= numero; contadora++) {
        if (numero % contadora == 0) {
            alert(contadora)
        }
    }
}