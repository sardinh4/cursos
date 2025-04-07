function executarExercicio32() {
    alert(`Exercicio 32)\nEscreva um programa que leia a nota de um aluno em uma prova e exiba a sua conceituação conforme a tabela de notas.`)

    let nota = parseFloat(prompt(`Digite a nota do aluno de 1 a 10: `))
    let conceito

    if ((nota >= 9) && (nota <= 10)) {
        conceito = "A"
    } else if ((nota >= 7.5) && (nota < 9)) {
        conceito = "B"
    } else if ((nota >= 6) && (nota < 7.5)) {
        conceito = "C"
    } else if ((nota >= 4) && (nota < 6)) {
        conceito = "D"
    } else {
        conceito = "F"
    }
    alert(`Conceito do aluno: ${conceito}`)
}