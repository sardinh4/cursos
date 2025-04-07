function executarExercicio44(){
    alert(`Exercicio 44)\n Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).`)

    let valor1 = parseFloat(prompt(`Digite um valor: `))
    let valor2 = parseFloat(prompt(`Digite outro valor: `))
    
    while(valor2==0){
        valor2=parseFloat(prompt(`Digite outro valor: `))
    }

    let divisao = valor1/valor2
    
    alert(`${valor1}/${valor2}=${divisao}`)
}