function executarExercicio31() {
    alert(`Exercicio 31)\n Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. `)

    let valor1 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor2 = parseInt(prompt(`Digite o segundo valor: `))
    let valor3 = parseInt(prompt(`Digite o terceiro valor: `))

    if (valor1 < (valor2 + valor3)) {
        if (valor2 < (valor1 + valor3)) {
            if (valor3 < (valor1 + valor2))
                alert(`Forma um triângulo`)
        }
    } else {
        alert(`Não forma um triângulo`)
    }
}