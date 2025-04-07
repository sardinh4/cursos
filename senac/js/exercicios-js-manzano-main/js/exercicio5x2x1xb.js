function executarExercicio5x2x1xb() {
    alert(`Exercicio 5.2.1 B)\nElaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. `)

    let contadora = 0; acumuladora = 0;

    do {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
        }
        contadora++
    } while (contadora <= 500)
    alert(acumuladora)
}