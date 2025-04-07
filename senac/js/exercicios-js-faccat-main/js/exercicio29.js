function executarExercicio29() {
    alert(`Exercicio29) \n Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores`)

    let valor1 = parseInt(prompt(`Digite o valor 1: `))
    let valor2 = parseInt(prompt(`Digite o valor 2: `))
    let valor3 = parseInt(prompt(`Digite o valor 3: `))
    let soma

    if ((valor1 > valor2) && (valor1 > valor3)) {
        if (valor2 > valor3) {
            soma = (valor1 + valor2)
        } else {
            soma = (valor1 + valor3)
        }

    } else if ((valor2 > valor1) && (valor2 > valor3)) {
        if (valor1 > valor3) {
            soma = valor2 + valor1
        } else {
            soma = valor2 + valor3
        }
    } else {
        if (valor1 > valor2) {
            soma = valor3 + valor1
        } else {
            soma = valor3 + valor2
        }
    }
    alert(`A soma dos maiores valores é: ${soma}`)
}