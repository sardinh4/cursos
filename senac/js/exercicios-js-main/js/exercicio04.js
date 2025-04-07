function executarExercicio04(){
    alert(`Exercicio 04)\nFaça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente.`)

    let nota1 = parseFloat(prompt(`Digite a primeira nota: `))
    let nota2 = parseFloat(prompt(`Digite a segunda nota: `))
    let nota3 = parseFloat(prompt(`Digite a terceira nota: `))
    let media = ((nota1*2)+(nota2*3)+(nota3*5))/10

    alert(`A média final será: ${media}`)
}