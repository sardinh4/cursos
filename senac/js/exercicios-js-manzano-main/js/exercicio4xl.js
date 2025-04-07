function executarExercicio4xl() {
    alert(`Exercicio 4 L)\nElaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado. `)

    let nome = prompt(`Informe seu nome: `)
    let genero = prompt(`Informe seu genero, M para masculino, F para feminino, NB para não binario e OUTRO  para outro genero:`)

    if ((genero == "M") || (genero == "m")) {
        alert(`Ilmo Sr. ${nome}`)
    } else if ((genero == "F") || (genero == "f")) {
        alert(`Ilmo Sra. ${nome}`)
    } else if ((genero == "NB") || (genero == "Nb") || (genero == "nb")) {
        alert(`Ilmo Sre. ${nome}`)
    } else {
        alert(`Ilmo Sre. ${nome}`)
    }
}