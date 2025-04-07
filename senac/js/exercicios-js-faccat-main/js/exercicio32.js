function executarExercicio32() {
    alert(`Exercicio 32)\n Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.`)

    let time1 = prompt(`Escreva o nome do time 1: `)
    let time2 = prompt(`Escreva o nome do time 2: `)
    let gol1 = parseInt(prompt(`Digite quantos gols o time 1 fez: `))
    let gol2 = parseInt(prompt(`Digite quantos gols o time 2 fez: `))

    if (gol1 > gol2) {
        alert(`${time1} é o vencedor`)
    } else if (gol2 > gol1) {
        alert(`${time2} é o vencedor`)
    } else {
        alert(`Empate`)
    }
}