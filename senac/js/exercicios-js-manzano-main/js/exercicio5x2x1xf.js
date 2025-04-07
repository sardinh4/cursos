function executarExercicio5x2x1xf(){
    alert(`Exercicio 5.2.1 F)\nElaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média. `)

    let numero = 0; totalValores = 0; media = 0; soma = 0;

    do{
        numero = parseFloat(prompt(`Digite um numero positivo: `))
        soma = soma + numero
        totalValores++
    }while(numero>0)
    media = soma/totalValores

    alert(`A soma de todos os valores é: ${soma}\n\nO total de valores é: ${totalValores}\n\nA média de todos os valores é: ${media}`)
}