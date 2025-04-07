package org.example;

public class Exercicio05 {


    public static void main(String[] args) {
        System.out.println("Crie um método chamado contarVogais que recebe uma string como parâmetro e retorna o" +
                " número de vogais nela. ");
        int vogais = contarVogais("Hernando");
        System.out.println("O número de vogais na string é: "+ vogais);
    }
    public static int contarVogais(String texto){
        int contador = 0;
        texto = texto.toLowerCase();//converte para minúscula para facilitar a contagem
        for (int i = 0; i <texto.length() ; i++) {
            char caractere = texto.charAt(i);
            if (caractere == 'a'||caractere =='e'||caractere=='i'||caractere=='o'||caractere=='u') {
                contador++;
            }
        }
        return contador;
    }
}
