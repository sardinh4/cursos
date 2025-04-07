function executarExercicio5x6x1xh() {
    alert(`Exercicio 5.6.1 H)\nElaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).`)

    let resultado = 1; 

    let base = parseInt(prompt(`Digite o valor da base: `))
    let expoente = parseInt(prompt(`Digite o valor do expoente: `))

    for (contadora = 0; contadora < expoente; contadora++) {
        resultado *= base
    } 
    alert(`${base} ^ ${contadora} = ${resultado}`)
}