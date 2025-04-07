function executarExercicio3x10xc() {
    alert(`Exercicio 3.10 C)\nEm uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.`)

    let votosParaCandidatoA = parseFloat(prompt(`Digite a quantidade de votos do candidato A: `))
    let votosParaCandidatoB = parseFloat(prompt(`Digite a quantidade de votos do candidato B: `))
    let votosParaCandidatoC = parseFloat(prompt(`Digite a quantidade de votos do candidato C: `))
    let votosNulos = parseFloat(prompt(`Digite a quantidade de votos nulos: `))
    let votosBrancos = parseFloat(prompt(`Digite a quantidade de votos brancos: `))

    let somaTotalEleitores = votosParaCandidatoA + votosParaCandidatoB + votosParaCandidatoC + votosNulos + votosBrancos
    let percentualVotosCandidatoA = (votosParaCandidatoA * 100) / somaTotalEleitores
    let percentualVotosCandidatoB = (votosParaCandidatoB * 100) / somaTotalEleitores
    let percentualVotosCandidatoC = (votosParaCandidatoC * 100) / somaTotalEleitores
    let percentualVotosValidos = percentualVotosCandidatoA + percentualVotosCandidatoB + percentualVotosCandidatoC + votosBrancos + votosNulos
    let percentualVotosNulos = (votosNulos * 100) / somaTotalEleitores
    let percentualVotosBrancos = (votosBrancos * 100) / somaTotalEleitores

    alert(`Numero total de eleitores: ${somaTotalEleitores}`)
    alert(`A % de votos válidos é: ${percentualVotosValidos}`)
    alert(`A % de votos do candidato A é: ${percentualVotosCandidatoA}`)
    alert(`A % de votos do candidato B é: ${percentualVotosCandidatoB}`)
    alert(`A % de votos do candidato C é: ${percentualVotosCandidatoC}`)
    alert(`A % de votos nulos é: ${percentualVotosNulos}`)
    alert(`A % de votos em branco é: ${percentualVotosBrancos}`)

}