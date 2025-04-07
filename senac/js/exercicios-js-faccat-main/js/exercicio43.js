function executarExercicio43() {
    alert(`Exercicio 43)\n Siga o algoritmo da página e faça um teste de mesa completando o quadro para as variaveis designadas `)

    let a = parseInt(prompt(`Digite o valor de A: `))
    let b = parseInt(prompt(`Digite o valor de B: `))
    let c = parseInt(prompt(`Digite o valor de C: `))
    let mens

    if ((a < b + c) && (b < a + c) && (c < a + b)){
        if((a==b)&&(b==c)){
            mens = "Triângulo Equilátero"
        }else if((a==b)||(b==c)||(a==c)){
            mens = "Triângulo Isóceles"
        }else{
            mens = "Triângulo Escaleno"
        }
    }else{
        mens = "Não é possível formar um triângulo"
    }
    alert(`O valor inserido é: ${mens}`)
}