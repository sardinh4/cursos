function executarExercicio24(){
    alert(`Exercicio24)\n Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.  `)


let salarioFixo = parseInt(prompt(`Digite o salário fixo atual: `))
let valorVendas = parseInt(prompt(`Digite o valor em vendas: `))
let total
if (valorVendas <= 1500){
    total = salarioFixo + (valorVendas * 0.03)
}else{
    total = salarioFixo + (valorVendas * 0.05)
}
alert(`O valor total será: ${total}`)

}