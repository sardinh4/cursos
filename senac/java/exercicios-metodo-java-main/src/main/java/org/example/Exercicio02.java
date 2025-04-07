package org.example;

import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("2) Implemente um método chamado ehPrimo que recebe um número como parâmetro e retorna true" +
                " se ele for primo e false caso contrário. \n");
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();

        boolean resultado = ehPrimo(numero);

        if (resultado){
            System.out.println(numero+" é primo.");
        }else{
            System.out.println(numero+" não é primo.");
        }
        scanner.close();
    }
    public static boolean ehPrimo(int numero){
        if (numero <= 1){
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero) ; i++) {
            if (numero%i==0){
                return false;
            }

        }
        return true;
    }
}
