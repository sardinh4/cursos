function executarExercicio25(){
    alert(`Exercicio25)\n Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'`)

    let numeroConta = parseInt(prompt(`Digite o numero da conta: `))
    let saldo = parseInt(prompt(`Digite o numero do saldo: `))
    let debito = parseInt(prompt(`Digite o numero do debito: `))
    let credito = parseInt(prompt(`Digite o numero do credito: `))

    let saldoAtual = (saldo - debito + credito)
    
    if(saldoAtual >= 0){
        alert(`Saldo Positivo`)
    }else{
        alert(`Saldo Negativo`)
    }
    
}