function executarExercicio19() {
    alert(`Exercicio 19)\nFaça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7.`)

    let nota1 = parseFloat(prompt(`Digite a primeira nota: `))
    let nota2 = parseFloat(prompt(`Digite a segunda nota: `))
    let nota3 = parseFloat(prompt(`Digite a terceira nota: `))
    let media = (nota1 + nota2 + nota3) / 3

    if (media < 7) {
        alert(`Aluno reprovado, média final: ${media}`)
    } else
        alert(`Aluno aprovado, média final: ${media}`)
}