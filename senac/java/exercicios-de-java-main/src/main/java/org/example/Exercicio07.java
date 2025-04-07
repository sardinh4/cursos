package org.example;

public class Exercicio07 {
    public static void main(String[] args) {
        System.out.println("7)Use um loop para iterar sobre os números de 1 a 5. Pare o loop quando encontrar o " +
                "número 3. Use switch para imprimir uma mensagem diferente para cada número.");
        System.out.println("--------------------------------------------");

        for (int i = 1; i <=5 ; i++) {

            switch (i){
                case 1:
                    System.out.println("Número 1 - Segunda");
                    break;
                case 2:
                    System.out.println("Número 2 - Terça");
                    break;
                case 3:
                    System.out.println("Número 3 - Quarta");
                    return;
                case 4:
                    System.out.println("Número 4 - Quinta");
                    break;
                case 5:
                    System.out.println("Número 5 - Sexta");
                    break;
                default:
                    System.out.println("Número inválido");
                    break;

            }
        }
    }
}
