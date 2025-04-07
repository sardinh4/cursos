function executarExercicio4xe() {
    alert(`Exercicio 4 E)\nEfetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. `)

    let a = parseFloat(prompt(`Digite o valor de A: `))
    let b = parseFloat(prompt(`Digite o valor de B: `))
    let c = parseFloat(prompt(`Digite o valor de C: `))
    let resultado = 0; delta = 0; raiz1 = 0; raiz2 = 0

    if (a == 0) {
        alert(`Sua equação é de primeiro grau\n${resultado = -1 * (c) / b}\nO resultado da equação de primeiro grau é: ${resultado}`)
    } else {
        delta = (b) ** 2 - (4 * a * c)
        if (delta < 0) {
            alert(`Não existe raiz real`)
        } else {
            raiz1 = (-b - delta ** (1 / 2)) / (2 * a)
            raiz2 = (-b + delta ** (1 / 2)) / (2 * a)
            alert(`A primeira raiz será: ${raiz1}\nA segunda raiz será: ${raiz2}`)
        }
    }
}