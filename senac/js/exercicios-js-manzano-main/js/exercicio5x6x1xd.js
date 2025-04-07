function executarExercicio5x6x1xd() {
    alert(`Exercicio 5.6.1 D)\nElaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. `)

    let acumuladora = 0;

    for (let contadora = 1; contadora < 501; contadora++) {
        if (contadora % 2 == 0) {
            acumuladora += contadora
        }

    }
    alert(acumuladora)
}