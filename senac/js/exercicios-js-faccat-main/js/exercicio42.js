function executarExercicio42() {
    alert(`Exerccicio 42)\n Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: Ter no mínimo 65 anos de idade, Ter trabalhado no mínimo 30 anos e Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.`)

    let codigo = prompt(`Digite o código do funcionario: `)
    let anoNascimento = parseInt(prompt(`Digite o ano de nascimento do funcionário: `))
    let anoIngresso = parseInt(prompt(`Digite o ano de ingresso do funcionário na empresa: `))
    let idade = 2023 - anoNascimento
    let tempoTrabalho = 2023 - anoIngresso
    let requerAposentadoria

    // let requerAposentadoria = ((idade >= 65) || (tempoTrabalho >= 30) || ((idade >= 30) && (tempoTrabalho >= 25)))
    if ((idade >= 65) || (tempoTrabalho >= 30) || ((idade >= 30) && (tempoTrabalho >= 25))) {
        requerAposentadoria = true
    } else {
        requerAposentadoria = false
    }

     alert(`Idade do funcionário: ${idade}anos\n Tempo de trabalho na empresa: ${tempoTrabalho}anos`)

    if (requerAposentadoria == true) {
        alert(`Pode se aposentar`)
    } else {
        alert(`Não pode se aposentar`)
    }
   

}