function executarExercicio14() {
    alert(`Exercicio 14) \n Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!`)

    let valor = parseInt(prompt(`Digite um valor inteiro maior ou menor que 10: `))

   if (valor > 10) {
        alert(`É MAIOR QUE 10!`)
    } else if(valor == 10) {
         alert(`É IGUAL A 10`)
    }else {
        alert(`É MENOR QUE 10`)
    }

   
}