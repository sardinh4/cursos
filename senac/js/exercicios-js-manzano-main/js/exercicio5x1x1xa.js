function executarExercicio5x1x1xa() {
    alert(`Exercicio 5.1.1 A)\nApresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let contadora = 0

    while (contadora < 11) {
        alert(`${numero}X${contadora}=${numero * contadora}`)
        contadora++
    }
}