function executarExercicio13(){
    alert(`Exercicio 13)\nFaça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo.`)
    
    let numero1 = parseFloat(prompt(`Digite o primeiro numero: `))
    let numero2 = parseFloat(prompt(`Digite o segundo numero: `))

    if(numero1%numero2==0){
        alert(`${numero1} é multiplo de ${numero2}`)
    }else{
    alert(`${numero1} não é multiplo de ${numero2}`)
    }
}