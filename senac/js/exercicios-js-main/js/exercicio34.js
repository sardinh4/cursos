function executarExercicio34() {
    alert(`Exercicio 34)\nFaça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos.`)

    let idade = parseInt(prompt(`Digite sua idade: `))

    if (idade < 16) {
        alert(`Não pode votar`)
    } else if ((idade >= 16) || (idade < 19)) {
        alert(`Voto opcional`)
    } else {
        alert(`Voto obrigatório`)
    }
}