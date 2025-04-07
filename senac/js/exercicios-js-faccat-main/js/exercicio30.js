function executarExercicio30() {
    alert(`Exercicio 30)\n Ler três valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente`)

    let numero1 = parseInt(prompt(`Digite o priemeiro número: `))
    let numero2 = parseInt(prompt(`Digite o segundo número: `))
    let numero3 = parseInt(prompt(`Digite o terceiro número: `))

    let temp

    if (numero1 > numero2) {
        temp = numero1
        numero1 = numero2
        numero2 = temp
    }
    if (numero1 > numero3) {
        temp = numero1
        numero1 = numero3
        numero3 = temp
    }
    if (numero2 > numero3) {
        temp = numero2
        numero2 = numero3
        numero3 = temp
    }

    alert(`A sequencia, em ordem crescente, será: ${numero1},${numero2},${numero3}`)
}