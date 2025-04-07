function executarExercicio3x10xa() {
    alert(`Exercicio 3.10 A)\nElaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.`)

    let valora = parseFloat(prompt(`Digite o valor de a: `))
    let valorb = parseFloat(prompt(`Digite o valor de b: `))
    let valorc = parseFloat(prompt(`Digite o valor de c: `))
    let valord = parseFloat(prompt(`Digite o valor de d: `))
    let produto = valora * valorc
    let soma = valorb + valord

    alert(`O produto do valor A e valor C será: ${produto}\nA soma do valor B e valor D será: ${soma}`)
}