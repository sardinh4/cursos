function executarExercicio7xk(){
    alert(`Exercicio 7 K)\nElaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.`)

    let dolar = parseInt(prompt(`Digite o valor do dolar atualmente: `))
    let realUsuario = parseInt(prompt(`Digite a quantidade de reais que você deseja converter: `))
    let valorEmDolar = realUsuario/dolar

    alert(`O valor convertido em dolar será: ${valorEmDolar}`)
}