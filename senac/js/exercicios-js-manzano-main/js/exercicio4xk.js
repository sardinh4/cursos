function executarExercicio4xk() {
    alert(`Exercicio 4 K)\nElaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.`)

    let valor = parseInt(prompt(`Digite um valor inteiro que não seja maior que 3: `))

    if (valor < 4) {
        alert(`O valor informado é: ${valor}`)
    } else {
        alert(`O valor informado é maior que 3`)
    }
}