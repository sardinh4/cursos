function executarExercicio48(){
    alert(`Exercicio 48)\nEscreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. `)

    let nota1 = parseFloat(prompt(`Digite a primeira nota: `))
    let nota2 = parseFloat(prompt(`Digite a segunda nota: `))

    while((nota1<0)||(nota1>10)){
        nota1=parseFloat(prompt(`Digite a primeira nota novamente: `))
    }

    while((nota2<0)||(nota2>10)){
        nota2=parseFloat(prompt(`Digite a segunda nota novamente: `))
    }

    let media = (nota1+nota2)/2

    alert(`A média será: ${media}`)
}