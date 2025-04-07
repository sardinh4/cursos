function executarExercicio5x2x1xi() {
    alert(`Exercicio 5.2.1 I)\nElaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário. `)

    let maior = 0; menor = 0; numero = 0

    do {
        numero = parseInt(prompt(`Digite um numero: `))

        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    } while (numero >= 0)

    alert(`O menor e maior numero, respectivamente, são: ${menor}, ${maior}`)
}