function executarExercicio13() {
    alert(`Exercicio 13)\n Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5`)

    let n1 = parseFloat(prompt(`Digite a primeira nota: `))
    let n2 = parseFloat(prompt(`Digite a segunda nota: `))
    let n3 = parseFloat(prompt(`Digite a terceira nota: `))

    let mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10

    alert(`A média final será: ${mediaFinal}`)
}