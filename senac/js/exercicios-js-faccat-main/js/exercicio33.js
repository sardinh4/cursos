function executarExercicio33(){
    alert(`Exercicio 33)\n  Ler dois valores e imprimir uma das três mensagens a seguir:'Números iguais', caso os números sejam iguais 'Primeiro é maior', caso o primeiro seja maior que o segundo; 'Segundo maior', caso o segundo seja maior que o primeiro. `)

    let valor1 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor2 = parseInt(prompt(`Digite o segundo valor: `))

    if(valor1>valor2){
        alert(`O valor 1 é maior`)
    }else if(valor2>valor1){
        alert(`O valor 2 é maior`)
    }else{
        alert(`O valor 1 é igual ao valor 2`)
    }
}