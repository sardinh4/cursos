    function executarExercicio31(){
        alert(`Exercicio 31)\nFaça um programa que leia o valor do salário-mínimo e o salário de um funcionário, e exiba quantos salários-mínimos ele recebe.`)

        let salarioMinimo = parseFloat(prompt(`Digite o valor do salário mínimo: `))
        let salarioFuncionario = parseFloat(prompt(`Digite o valor do saário do funcionário: `))
        let quantidadeSalarios = salarioFuncionario/salarioMinimo

        alert(`O funcionário recebe ${quantidadeSalarios} salários mínimos.`)
    }