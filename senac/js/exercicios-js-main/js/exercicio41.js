function executarExercicio41(){
    alert(`Exercicio 41)\nCrie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".`)

    let contadora = 0
    let numero = parseInt(prompt(`Digite um numero: `))

    while (numero >= contadora) {
        if (numero % contadora == 0) {
            alert(`${numero} é divisivel por: ${contadora}`)
        }
        contadora++
    }
}