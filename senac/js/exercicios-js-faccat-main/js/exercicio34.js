function executarExercicio34() {
    alert(`Exercicio 34)\nFaça um teste de mesa e complete o quadro(página 7):`)

    let x = parseInt(prompt(`Digite o valor de X:`))
    let y = parseInt(prompt(`Digite o valor de Y:`))
    let z = (x * y) + 5
    let resposta

    if (z <= 0) {
        resposta = "A"
    } else if (z <= 100) {
        resposta = "B"
    } else {
        resposta = "C"
    }
    alert(`A resposta e o valor de Z será: ${resposta},${z}.`)
}