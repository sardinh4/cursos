function executarExercicio4xa(){
    alert(`Exercicio 4 A)\nLer dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor`)

    let valor1 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor2 = parseInt(prompt(`Digite o segundo valor: `))
    let maior = 0; menor = 0; diferenca = 0

    if(valor1>valor2){
        maior = valor1
        menor = valor2
    }else{
        maior = valor2
        menor = valor1
    }
    diferenca = maior - menor

    alert(`A diferença do maior pelo menor será: ${diferenca}`)
}