function executarExercicio7xj(){
    alert(`Exercicio 7 J)\nElaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.`)

    let dolar = parseInt(prompt(`Digite o valor do dolar atualmente: `))
    let dolarUsuario = parseInt(prompt(`Digite a quantidade de dolares do usuário: `))
    let valorEmReais = dolar * dolarUsuario

    alert(`O valor convertido em reais será: ${valorEmReais}`)
}