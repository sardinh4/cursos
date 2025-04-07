function executarExercicio5x2x1xj() {
    alert(`Exercicio 5.2.1 J)\nElaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.`)

    let quociente = 0;

    let dividendo = parseInt(prompt(`Digite o dividendo: `))
    let divisor = parseInt(prompt(`Digite o divisor: `))

    do {
        dividendo -= divisor
        if (dividendo >= 0) {
            alert(dividendo)
            quociente++
        }
    } while (dividendo >= 0)

    alert(`O resultado inteiro da didivão é: ${quociente}`)
}