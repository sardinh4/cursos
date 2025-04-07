function executarExercicio62() {
    alert(`Exercicio 62)\nCrie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while".`)

    let contadora = 0

    do {
        if (contadora % 2 != 0) {
            alert(contadora)
        }
        contadora++
    } while (contadora < 50)
}