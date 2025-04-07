function executarExercicio5x1x1xl() {
    alert(`Exercicio 5.1.1 L)\nElaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário. `)

    let numero = 0; maior = 0; menor = 0;

    while (numero >= 0) {
        numero = parseInt(prompt(`Digite um numero: `))

        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }
    alert(`O menor e maior numero, respectivamente, são: ${menor} e ${maior}`)
}