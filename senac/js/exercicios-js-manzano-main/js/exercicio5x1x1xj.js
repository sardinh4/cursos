function executarExercicio5x1x1xj() {
    alert(`Exercicio 5.1.1 J)\nElaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70`)

    let contadora = 50; acumuladora = 0; media = 0;

    while (contadora <= 70) {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora
            alert(`Soma ${contadora}: ${acumuladora}\nMédia ${contadora}: ${contadora / 2}`)

        }
        contadora++
    }
}