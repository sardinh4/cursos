function executarExercicio79() {
    alert(`Exercicio 79)\nEscreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário.`)

    let numero = parseInt(prompt(`Digite um numero: `))
    let fatorial = 1

    for (let contadora = 1; contadora <= numero; contadora++) {
        fatorial = fatorial * contadora 
    }
    alert(fatorial)
}