function executarExercicio5x1x1xf() {
    alert(`Exercicio 5.1.1 F)\nElaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). `)

    let expoenteEscolha = parseInt(prompt(`Digite um valor para expoente: `))
    let expoenteMaximo = parseInt(prompt(`Digite o limite para a conta: `))
    let resultado = 1; contadora = 0

    while (contadora <= expoenteMaximo) {
        alert(`${expoenteEscolha} ^ ${contadora} = ${resultado}`)
        contadora++
        resultado = resultado * expoenteEscolha
    }

}