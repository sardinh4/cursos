function executarExercicio4xf(){
    alert(`Exercicio 4 F)\nEfetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.`)

    let a = parseInt(prompt(`Digite o valor de A: `))
    let b = parseInt(prompt(`Digite o valor de B: `))
    let c = parseInt(prompt(`Digite o valor de C: `))
    let temp = 0;

    if(a>b){
        temp = a
        a = b
        b= temp
    }
    if(a>c){
        temp = a
        a = c
        c = temp
    }
    if(b>c){
        temp = b
        b = c
        c = temp
    }
    alert(`Os valores em ordem crescente são: ${a},${b},${c}.`)
}