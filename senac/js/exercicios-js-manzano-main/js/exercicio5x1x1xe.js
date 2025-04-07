function executarExercicio5x1x1xe() {
    alert(`Exercicio 5.1.1 E)\nApresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). `)

    let contadora = 0; resultado = 1

    while (contadora < 16) {
        alert(`3^${contadora}=${resultado}`)
        contadora++
        resultado = resultado * 3
    }
}