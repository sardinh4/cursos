function executarExercicio06() {
    alert("Exercicio 6)\n Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.")

    let base = parseInt(prompt("Digite a base do retângulo: "))
    let altura = parseInt(prompt("Digite a altura do retângulo: "))

    let area = base * altura

    alert(`A área do retângulo é ${area} m²`)
}