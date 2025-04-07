function executarExercicio26(){
    alert(`Exercicio26)\n Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'`)

    let quantidadeEstoque = parseFloat(prompt(`Digite a quantidade em estoque: `))
    let quantidadeMaxima = parseFloat(prompt(`Digite a quantidade máxima em estoque: `))
    let quantidadeMinima = parseFloat(prompt(`Digite a quantidade mínima em estoque: `))

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2  

    if(quantidadeEstoque >= quantidadeMedia){
        alert(`Não efetuar a compra`)
    }else{
        alert(`Efetuar a compra`)
    }
}