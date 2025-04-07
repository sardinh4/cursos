function executarExercicio5x2x1xe() {
    alert(`Exercicio 5.2.1 E)\nElaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. `)

    let cont1 = 0; acumuladora = 0; valor = 0

    do {
        valor = parseFloat(prompt(`Digite um valor: `))
        let fatorial = 1
        let contadora = 1

        do {
            fatorial = fatorial * contadora
            contadora++
        } while (contadora <= valor)

        acumuladora = acumuladora + fatorial
        alert(fatorial)


        cont1++
    } while (cont1 < 15)

    alert(`O total da somatória é: ${acumuladora}`)
}