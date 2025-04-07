function executarExercicio20() {
    alert(`Exercicio 20)\n Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente`)

    let valor1 = parseInt(prompt(`Digite o primeiro número: `))
    let valor2 = parseInt(prompt(`Digite o segundo número: `))
  
    if(valor1>valor2){
        alert(`Os valores em ordem crescente serão: ${valor2},${valor1}`)
    }else{
        alert(`Os valores em ordem crescente serão: ${valor1},${valor2}`)

    }

 
}