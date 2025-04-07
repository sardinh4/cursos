function executarExercicio7xl(){
    alert(`Exercicio L)\nElaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.`)

    let valor1 = (parseInt(prompt(`Digite o primeiro valor: `)))
    let valor2 = (parseInt(prompt(`Digite o segundo valor: `)))
    let valor3 = (parseInt(prompt(`Digite o terceiro valor: `)))
    let resultado = (valor1**2+valor2**2+valor3**2) 

    alert(`O resultado final será: ${resultado}`)
}