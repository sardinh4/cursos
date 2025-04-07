function executarExercicio69(){
    alert(`Exercicio 69)\nFaça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos.`)

    let media = 0

    for (let contadora = 0; contadora < 5; contadora++) {
        let nota = parseFloat(prompt(`Digite a nota:`))
        media = media+nota
    }
    alert(`A média final será: ${media/5}`)
}