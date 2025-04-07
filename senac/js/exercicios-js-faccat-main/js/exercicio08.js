function executarExercicio08() {
    alert("Exercicio 8)\n Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total  de eleitores.")

    let votosBrancos = parseFloat(prompt("Digite o numero de votos brancos: "))
    let votosNulos = parseFloat(prompt("Digite o numero de votos nulos: "))
    let votosValidos = parseFloat(prompt("Digite o numero de votos válidos: "))

    let eleitores = (votosBrancos + votosNulos + votosValidos)

    let percentualBrancos = (votosBrancos / eleitores) * 100
    let percentualNulos = (votosNulos / eleitores) * 100
    let percentualValidos = (votosValidos / eleitores) * 100

    alert("O percentual de votos brancos é: " + percentualBrancos + " %")
    alert("O percentual de votos nulos é: " + percentualNulos + " %")
    alert("O percentual de votos válidos é: " + percentualValidos + " %")

}