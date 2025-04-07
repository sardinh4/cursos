function executarExercicio5x6x1xe(){
    alert(`Exercicio 5.6.1 E)\nApresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.`)

    for (let contadora = 1; contadora < 21; contadora++) {
        if(contadora%2!==0){
            alert(contadora)
        }
    }
}