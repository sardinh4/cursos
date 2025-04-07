function executarExercicio09() {
    alert("Exercicio 9)\n Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.")

    let salarioAtual = parseFloat(prompt("Digite o salário atual"))
    let ajuste = parseFloat(prompt(`Digite o percetual de reajuste: `))

    let novoSalario = salarioAtual + (salarioAtual * (ajuste / 100))//(ajuste/100) irá transformar o valor de ajuste em porcentagem

    alert(`O novo salário será: ${novoSalario}`)

}