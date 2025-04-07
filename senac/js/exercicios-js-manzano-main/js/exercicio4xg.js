function executarExercicio4xg() {
    alert(`Exercicio 4 G)\nEfetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3`)

    let numero1 = parseFloat(prompt(`Digite o primeiro numero: `))
    let numero2 = parseFloat(prompt(`Digite o segundo numero: `))
    let numero3 = parseFloat(prompt(`Digite o terceiro numero: `))
    let numero4 = parseFloat(prompt(`Digite o quarto numero: `))

    if ((numero1 % 2 == 0) && (numero1 % 3 == 0)) {
        alert(`${numero1} é divisível por 2 e 3.`)
    } else {
        alert(`${numero1} não é divisível por 2 e 3.`)
    }
    if ((numero2 % 2 == 0) && (numero2 % 3 == 0)) {
        alert(`${numero2} é divisível por 2 e 3.`)
    } else {
        alert(`${numero2} não é divisível por 2 e 3.`)
    }
    if ((numero3 % 2 == 0) && (numero3 % 3 == 0)) {
        alert(`${numero3} é divisível por 2 e 3.`)
    } else {
        alert(`${numero3} não é divisível por 2 e 3.`)
    }
    if ((numero4 % 2 == 0) && (numero4 % 3 == 0)) {
        alert(`${numero4} é divisível por 2 e 3.`)
    } else {
        alert(`${numero4} não é divisível por 2 e 3.`)
    }
}