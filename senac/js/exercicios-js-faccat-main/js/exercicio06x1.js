function executarExercicio06x1(){
alert("Exercicio 6-1)\n Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever o perimetro do retângulo.")

let base = parseInt(prompt("Digite a base do retângulo: "))
let altura = parseInt(prompt("Digite a altura do retângulo: "))

let perimetro = base+ base+ altura + altura

alert(`A área do retângulo é ${perimetro} m²`)
}