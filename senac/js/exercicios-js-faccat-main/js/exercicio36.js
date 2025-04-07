function executarExercicio36() {
    alert(`Exercicio 36)\n Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.`)

    let homem1 = parseInt(prompt(`Digite a idade do primeiro homem: `))
    let homem2 = parseInt(prompt(`Digite a idade do segundo homem: `))
    let mulher1 = parseInt(prompt(`Digite a idade da primeira mulher: `))
    let mulher2 = parseInt(prompt(`Digite a idade da segunda mulher: `))
    let maiorHomem
    let menorHomem
    let maiorMulher
    let menorMulher

    if (homem1 > homem2) {
        maiorHomem = homem1
        menorHomem = homem2
    } else {
        maiorHomem = homem2
        menorHomem = homem1
    }
    if (mulher1 > mulher2) {
        maiorMulher = mulher1
        menorMulher = mulher2
    } else {
        maiorMulher = mulher2
        menorMulher = mulher1
    }

    alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${maiorHomem + menorMulher}`)
    alert(`O produto da idade do homem mais novo com a mulher mais velha é: ${menorHomem * maiorMulher}`)
}