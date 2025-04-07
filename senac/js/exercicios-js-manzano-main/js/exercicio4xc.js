function executarExercicio4xc() {
    alert(`Exercicio 4 C)\nLer quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição. `)

    let nota1 = parseFloat(prompt(`Digite a primeira nota: `))
    let nota2 = parseFloat(prompt(`Digite a segunda nota: `))
    let nota3 = parseFloat(prompt(`Digite a terceira nota: `))
    let nota4 = parseFloat(prompt(`Digite a quarta nota: `))
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 5) {
        alert(`Aluno aprovado! Média final: ${media}`)
    } else {
        alert(`Aluno reprovado. Média final: ${media}`)
    }
}