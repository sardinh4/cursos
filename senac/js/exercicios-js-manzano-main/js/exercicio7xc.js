function executarExercicio7xc(){
    alert(`Exercicio 7 C)\nCalcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:Volume = pi *Raio² * Altura `)

    let raio = parseFloat(prompt(`Digite o valor do raio: `))
    let altura = parseFloat(prompt(`Digite o valor da altura: `))
    let volume = Math.PI * (raio*raio) * altura

    alert(`O valor do volume será: ${volume}`)
}