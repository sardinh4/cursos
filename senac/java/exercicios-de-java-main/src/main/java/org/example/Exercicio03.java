package org.example;

public class Exercicio03 {
    public static void main(String[] args) {
        System.out.println("3)Crie um loop aninhado que imprima os números de 1 a 5 para cada interação do loop" +
                " externo. Use break para interromper o loop interno quando o número 3 for atingido. ");
        for (int i = 1; i <6; i++) {
        System.out.println("Interação com o loop externo: "+ i);
            for (int j = 1; j <=5; j++) {
                if (j ==3) {
                    break;
                }
                System.out.println(j);
            }
        }
    }
}
