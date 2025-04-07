function executarExercicio02(){
    alert(`Exercicio 02)\nEscreva um programa que leia o raio de um círculo e calcule sua área e perímetro.`)

    let raio = parseFloat(prompt(`Digite o raio do círculo: `))
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI*raio

    alert(`Área do círculo: ${area}`)
    alert(`Perímetro do círculo: ${perimetro}`)
}