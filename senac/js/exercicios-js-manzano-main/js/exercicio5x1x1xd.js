function executarExercicio5x1x1xd() {
    alert(`Exercicio 5.1.1 D)\nApresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. `)

    let contadora = 0

    while (contadora < 21) {
        if (contadora % 2 != 0) {
            alert(contadora)
        }
        contadora++
    }
}