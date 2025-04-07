function executarExercicio07() {
    alert("Exercicio 7)\n Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade  dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias")

    let anos = parseInt(prompt("Digite quantos anos você tem de idade: "))
    let meses = parseInt(prompt("Digite quantos meses você tem de idade: "))
    let dias = parseInt(prompt("Digite quantos dias você tem de idade: "))

    let idade = anos * 365 + meses * 30 + dias

    alert("Você tem " + idade + " dias de vida")
}