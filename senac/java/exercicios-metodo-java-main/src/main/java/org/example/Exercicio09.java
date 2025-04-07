package org.example;

public class Exercicio09 {
    public static void main(String[] args) {
        System.out.println("9) Crie um método chamado ehPalindromo que recebe uma string como parâmetro e retorna true" +
                " se ela for um palíndromo e false caso contrário. \n");
        String palavra = "Socorram-me, subi no ônibus em Marrocos.";
        boolean resultado = ehPalindromo(palavra);

        if (resultado) {
            System.out.println("'" + palavra + "' é um palíndromo.");
        } else {
            System.out.println("'" + palavra + "' não é um palíndromo.");
        }
    }

    public static boolean ehPalindromo(String texto) {
        texto = texto.replaceAll("[^a-zA-Z0-9]", "").toLowerCase(); // Espaços e caracteres especiais
        int esquerda = 0;
        int direita = texto.length() - 1;

        while (esquerda < direita) {
            if (texto.charAt(esquerda) != texto.charAt(direita)) {
                return false;
            }
            esquerda++;
            direita--;
        }
        return true;
    }
}
