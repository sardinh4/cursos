package beer.data;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExemploTryCatch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Digite um número:");
            Integer n1 = scanner.nextInt();
            System.out.println("Número digitado " + n1);

            System.out.println("Digite um número:");
            Integer n2 = scanner.nextInt();

            System.out.println("Divisão: "+ n1/n2);


        } catch (InputMismatchException e){
            System.out.println("Número inválido");
        } catch (ArithmeticException e){
            System.out.println("Não é possível divisão por zero");
        }
    }
}
