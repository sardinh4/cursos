function executarExercicio5x6x1xc() {
    alert(`Exercicio 5.6.1 C)\nApresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).`)

    let acumuladora = 0;

    for (let contadora = 1; contadora < 101; contadora++) {
        acumuladora += contadora
    }
    alert(acumuladora)
}