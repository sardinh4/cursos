function executarExercicio14(){
    alert(`Exercicio 14)\nEscreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem.`)

    let anos = parseInt(prompt(`Digite a idade em anos: `))
    let meses = parseInt(prompt(`Digite a idade em meses: `))
    let dias = parseInt(prompt(`Digite a idade em dias: `))
    let totalDias = (anos*365)+(meses*30)+dias

    alert(`A idade total em dias é: ${totalDias}`)
}