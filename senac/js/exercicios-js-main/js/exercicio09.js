function executarExercicio09() {
    alert(`Exercicio 09)\nCrie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses.`)

    let depositoMensal = parseFloat(prompt(`Digite o valor do depósito mensal: `))
    let taxaJuros = parseFloat(prompt(`Digite o valor da taxa de juros mensal: `))
    let montante = 0

    for (let contadora = 1; contadora < 13; contadora++) {
        montante = (montante + depositoMensal) + ((montante + depositoMensal) * (taxaJuros / 100))
    }

    alert(`O montante após 12 meses é: ${montante.toFixed(2)}`)
}
// usando boliano
//  for (let contadora = 1; resposta == true; contadora++) {
//     montante = (montante + depositoMensal) + ((montante + depositoMensal) * (taxaJuros / 100))
//     if(contadora==12){
//         resposta = false
//     }
// }