function executarExercicio33() {
    alert(`Exercicio 33)\nCrie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".z`)

    let nome = prompt(`Escreva o nome do aluno: `)
    let turno = prompt(`Escreva qual o turno do aluno, matutino(M) ou vespertino(V): `)

    if ((turno == "M") || (turno == "m")) {
        alert(`Bom dia ${nome}!`)
    } else if ((turno == "V") || (turno == "v")) {
        alert(`Boa tarde ${nome}!`)
    } else {
        alert(`Turno inválido`)
    }
}