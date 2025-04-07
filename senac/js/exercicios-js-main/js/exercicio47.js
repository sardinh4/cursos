function executarExercicio47() {
    alert(`Exercicio 47)\nCrie um programa que exiba os números ímpares de 1 a 50 usando o loop "while".`)

    let contadora = 0

    while (contadora < 51) {
        if (contadora % 2 != 0) {
            alert(contadora)
        }
        contadora++
    }
}