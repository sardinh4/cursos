function executarExercicio41() {
    alert(`Exercicio 41)\n Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: Média_de_Aproveitamento = N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios/7 `)
    let numero1 = parseFloat(prompt(`Digite a primeira nota: `))
    let numero2 = parseFloat(prompt(`Digite a segunda nota: `))
    let numero3 = parseFloat(prompt(`Digite a terceiro nota: `))
    let mediaExercicios = (numero1 + numero2 + numero3) / 3
    let mediaAproximada = (numero1 + (numero2 * 2) + (numero3 * 3) + mediaExercicios) / 7
    let conceito

    if (mediaAproximada < 6) {
        conceito = "D"
    } else if ((mediaAproximada >= 6) && (mediaAproximada < 7.5)) {
        conceito = "C"
    } else if ((mediaAproximada >= 7.5) && (mediaAproximada < 9)) {
        conceito = "B"
    } else {
        conceito = "A"
    }
    alert(`A nota final será: ${conceito}`)
}