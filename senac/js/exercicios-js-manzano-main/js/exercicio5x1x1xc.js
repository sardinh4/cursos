function executarExercicio5x1x1xc() {
    alert(`Exercicio 5.1.1 C)\nElaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500`)

    let contadora = 0; acumuladora = 0;

    while (contadora < 501) {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
        }
        contadora++
    }
    alert(acumuladora)
}