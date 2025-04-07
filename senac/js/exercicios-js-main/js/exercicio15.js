function executarExercicio15() {
    alert(`Exercicio 15)\nCrie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%.`)

    let salarioFuncionario = parseFloat(prompt(`Digite o salário do funcionário`))
    let novoSalario = salarioFuncionario + (salarioFuncionario * 0.15)

    alert(`O novo salário do funcionário será: ${novoSalario}`)
}