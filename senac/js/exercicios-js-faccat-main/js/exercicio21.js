function executarExercicio21() {
    alert(`Exercicio 21)\n Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.`)

    let horaDeInicio = parseInt(prompt(`Digite a hora de inicio: `))
    let horaDeFim = parseInt(prompt(`Digite a hora de termino: `))

    let duracao

    if (horaDeFim < horaDeInicio) {
        duracao = (24 - horaDeInicio) + horaDeFim
    } else {
        duracao = horaDeFim - horaDeInicio
    }

    alert(`A duração do foi foi de ${duracao} hrs`)

}