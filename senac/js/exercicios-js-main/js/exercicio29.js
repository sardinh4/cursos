function executarExercicio29() {
    alert(`Exercicio 29)\nEscreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.`)

    let nomeDoAluno = prompt(`Escreva o nome do aluno: `)
    let nota = parseInt(prompt(`Digite a nota do aluno ${nomeDoAluno}: `))

    if (nota >= 7) {
        alert(`Aluno ${nomeDoAluno} aprovado`)
    } else {
        alert(`Aluno ${nomeDoAluno} reprovado`)
    }
}