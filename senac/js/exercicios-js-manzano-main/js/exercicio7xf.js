function executarExercicio7xf(){
    alert(`Exercicio 7xf)\nLer dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados`)

    let a = parseInt(prompt(`Digite o valor de A: `))
    let b = parseInt(prompt(`Digite o valor de B: `))
    let temp = 0

    temp = b
    b = a
    a = temp

    alert(`O novo valor de A será: ${a}`)
    alert(`O novo valor de B será: ${b}`)

}