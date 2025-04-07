function executarExercicio53() {
    alert(`Exercicio 53)\nCrie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".`)

    let contadora = 0

    do {
        if (contadora % 2 == 0) {
            alert(contadora)
        }
        contadora++
    }while(contadora<=50)
}