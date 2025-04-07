function executarExercicio25(){
    alert(`Exercicio 25)\nFaça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. Se o número de faltas for maior que 15, ele é reprovado por falta.`)

    let faltas = parseInt(prompt(`Digite a quantidade de faltas do aluno: `))

    if(faltas>15){
        alert(`Reprovado por falta`)
    }else{
        alert(`Aprovado`)
    }
}