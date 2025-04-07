function executarExercicio5x1x1xb() {
    alert(`Exercicio 5.1.1 B)\nApresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). `)

    let contadora = 0; acumuladora = 0
    while (contadora < 101) {
        acumuladora = acumuladora + contadora
        contadora++
    }
    alert(acumuladora)
}