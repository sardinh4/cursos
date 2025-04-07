function executarExercicio23() {
    alert(`Exercicio 23)\nEscreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos.`)

    let mes = parseInt(prompt(`Digite um mês em valor numérico: `))

    switch (mes) {
        case 1:
            alert(`Janeiro possui 31 dias`)
            break;
        case 2:
            alert(`Fevereiro possui 28 dias`)
            break;
        case 3:
            alert(`Março tem 31 dias`)
            break;
        case 4:
            alert(`Abril possui 30 dias`)
            break;
        case 5:
            alert(`Maio possui 30 dias`)
            break;
        case 6:
            alert(`Junho possui 30 dias`)
            break;
        case 7:
            alert(`Julho possui 30 dias`)
            break;
        case 8:
            alert(`Agosto possui 30 dias`)
            break;
        case 9:
            alert(`Setembro possui 30 dias`)
            break;
        case 10:
            alert(`Outubro possui 30 dias`)
            break;
        case 11:
            alert(`Novembro possui 30 dias`)
            break;
        case 12:
            alert(`Dezembro possui 30 dias`)
            break;
        default:
            alert(`Inválido`)
            break;
    }
}