function executarExercicio17() {
    alert(`Exercicio 17)\n Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga so aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. `)

    let numero1 = parseFloat(prompt(`Digite a primeira nota: `))
    let numero2 = parseFloat(prompt(`Digite a segunda nota: `))

    let resultado = (numero1 + numero2) / 2

    alert(`A média será: ${resultado}`)

}