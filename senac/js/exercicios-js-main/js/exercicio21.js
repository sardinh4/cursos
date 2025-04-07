function executarExercicio21() {
    alert(`Exercicio 21)\nCrie um programa que leia a idade de um grupo de pessoas e exiba quantas são menores de idade e quantas são maiores de idade.`)

    let menorDeIdade = 0, maiorDeIdade = 0, resposta;
    
    do {
        let idade = parseInt(prompt(`Digite sua idade: `))
        if (idade < 18) {
            menorDeIdade++
        } else {
            maiorDeIdade++
        }
        resposta = prompt(`Deseja adicionar mas pessoas?`)
    } while ((resposta == "SIM") || (resposta == "sim"))

    alert(`Quantidade de menores de idade: ${menorDeIdade}\nQuantidade de maiores de idade: ${maiorDeIdade}`)
}