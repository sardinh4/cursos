package org.example;

import java.util.Scanner;

public class Exercicio09 {
    public static void main(String[] args) {
        System.out.println("9)Crie um loop infinito que solicita ao usuário um número. Pare o loop quando o número 0" +
                " for inserido.");
        Scanner scanner = new Scanner(System.in);

        while (true){
            System.out.println("Digite um número (0 para parar): ");
            int numero = scanner.nextInt();

            if (numero == 0){
                System.out.println("Numero 0 inserido. O loop foi interrompido.");
                break;
            }
            System.out.println("Você digitou: "+numero);
        }


    }
}
