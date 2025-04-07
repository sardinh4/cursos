function executarExercicio19() {
    alert(`Exercicio 19)\n Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.`)

    let numero1 = parseInt(prompt(`Digite um numero: `))
    let numero2 = parseInt(prompt(`Digite outronumero: `))

    let maior
    let menor

    if (numero1 > numero2) {
        maior = numero1
        menor = numero2
    } else {
        maior = numero2
        menor = numero1
    }

    alert(`O maior e menor numero, respectivamente, é: ${maior},${menor}`)
}

