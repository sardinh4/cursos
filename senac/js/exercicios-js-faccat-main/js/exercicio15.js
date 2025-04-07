function executarExercicio15() {
    alert(`Exercicio 15)\n Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).`)

    let valor = parseInt(prompt(`Digite um valor: `))

    if (valor < 0) {
        alert(`O valor ${valor} é negativo`)
    } else {
        alert(`O valor ${valor} é positivo`)
    }
}