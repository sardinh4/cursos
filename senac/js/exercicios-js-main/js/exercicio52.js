function executarExercicio52() {
    alert(`Exercicio 52) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while".`)

    let soma = 0
    let contadora = 1

    do {
         soma = contadora + soma
         contadora++
    } while (contadora <= 100)

    alert(soma)
}