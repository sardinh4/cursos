function executarExercicio07() {
    alert(`Exercicio 07)\nFaça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base.`)
    let salarioBase = parseFloat(prompt(`Digite o salário base do funcionario: `))
    let salarioLiquido = salarioBase + (salarioBase * 0.05)

    alert(`O salário líquido será: ${salarioLiquido}`)
}