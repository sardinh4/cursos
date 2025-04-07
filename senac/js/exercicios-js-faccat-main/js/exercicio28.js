function executarExercicio28() {
    alert(`Exercicio 28) \n Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles `)

    let valor1 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor2 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor3 = parseInt(prompt(`Digite o primeiro valor: `))
    let maior

    if ((valor1 > valor2) && (valor1 > valor3)){
        maior = valor1
    }else if (valor2 > valor3) {
        maior = valor2
    } else {
        maior = valor3
    }
    alert(`O maior valor é: ${maior}`)
}