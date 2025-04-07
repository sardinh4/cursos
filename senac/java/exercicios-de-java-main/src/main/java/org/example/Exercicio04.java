package org.example;

public class Exercicio04 {
    public static void main(String[] args) {
        System.out.println("Crie um loop aninhado que imprima os números de 1 a 5 para cada interação do loop externo," +
                " pulando a impressão do número 3 em cada iteração interna usando continue.");
        for (int i = 1; i <=5; i++) {
            System.out.println("Interação externa: "+i);
            for (int j = 1; j <=5; j++) {
                if (j == 3) {
                    continue;
                }
                System.out.println(j);

            }
        }
    }
}
