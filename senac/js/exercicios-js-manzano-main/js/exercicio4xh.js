function executarExercicio4xh() {
    alert(`Exercicio 4 H)\nEfetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. `)

    let numero = parseInt(prompt(`Informe o 1° numero: `))
    let maior = numero
    let menor = numero

    for (let contadora = 2; contadora < 6; contadora++) {
        numero = parseInt(prompt(`Informe o ${contadora}° numero: `))
        if (numero > maior) {
            maior = numero
        } else {
            if (numero < menor) {
                menor = numero
            }
        }

    }
    alert(`O maior numero é: ${maior}\nO menor numero é: ${menor}`)


}