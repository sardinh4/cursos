package org.example;

public class Exercicio03 {
    public static void main(String[] args) {
        System.out.println("3) Crie um método chamado calcularMedia que recebe um array de números como parâmetro e " +
                "retorna a média deles. ");

        int[] arrayNumeros = {10,20,30,40,50};
        double media = calcularMedia(arrayNumeros);
        System.out.println("A média é: "+ media);
    }
    
    public static double calcularMedia(int[] numeros){
        if ( numeros.length == 0) {
            return 0.0;
        }
        int soma = 0;
        for (int numero : numeros){
            soma+= numero;
        }
        return(double) soma/ numeros.length;
    }
}
