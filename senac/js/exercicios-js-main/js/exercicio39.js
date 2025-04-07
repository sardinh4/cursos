function executarExercicio39(){
    alert(`Exercicio 39)\nFaça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos.`)
    
    let numero = 0, contadora = 0, media = 0

    while(contadora<5){
        numero = parseFloat(prompt(`Digite um numero: `))
        media = media + numero
        contadora++
    }
    media = media/contadora

    alert(`A média é: ${media}`)
}