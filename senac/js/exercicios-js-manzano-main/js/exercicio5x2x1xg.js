function executarExercicio5x2x1xg() {
    alert(`Exercicio 5.2.1 G)\nElaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. `)

    let fatorial = 1; contadora = 1
    do {
        fatorial *= contadora
        if (contadora % 2 != 0) {
            alert(fatorial)
        }
        contadora++
    } while (contadora <= 10)
}