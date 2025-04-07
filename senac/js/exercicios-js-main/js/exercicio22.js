function executarExercicio22() {
    alert(`Exercicio 22)\nFaça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.`)

    let salario = parseFloat(prompt(`Digite o salário atual: `))
    let salarioFinal

    if (salario >= 2000) {
        salarioFinal = salario + (salario * 0.10)
    } else {
        salarioFinal = salario + (salario * 0.05)
    }
    alert(`O salário final será: ${salarioFinal}`)
}