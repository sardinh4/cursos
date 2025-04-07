function executarExercicio5x6x1xk() {
    alert(`Exercicio 5.6.1 K)\nElaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. `)


    let resultado = 1;

    for (let contadora = 1  ; contadora <= 10; contadora++) {
        if (contadora % 2 !== 0) {
            resultado = 1
            for (let contadora1 = 1; contadora1 < contadora; contadora1++) {
                resultado *= contadora1

            }
            alert(`${contadora}! =${resultado}`)
        }

    // let resultado = 1;

    // for (let contadora = 1  ; contadora <= 10; contadora++) {
    //         resultado *= contadora
    //         alert(`${contadora}! =${resultado}`)
        

    // } ^ Fatorial padrão, até 10

}
}