function executarExercicio5x6x1xb() {
    alert(`Exercicio 5.6.1 B)\nApresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer`)

    let numero = parseInt(prompt(`Digite um numero: `))


    for (let contadora = 0; contadora < 11; contadora++) {
        alert(`${numero}X ${contadora} = ${numero * contadora}`)
    }
}