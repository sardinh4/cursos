package org.example;

import java.util.Scanner;

public class Exercicio01 {

    static  int soma(int numero1, int numero2){
        return numero1+numero2;
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println ("1) Crie um método chamado soma que recebe dois números como parâmetros e retorna a soma" +
                " deles.\n ");
        System.out.println("Digite um número: ");
        int numero1 = scanner.nextInt();
        System.out.println("Digite outro número: ");
        int numero2 = scanner.nextInt();
        System.out.println("A soma total será: "+soma(numero1,numero2));
    }


}
