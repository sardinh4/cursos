package beer.data;

import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite um numero entre 1 e 7:");
        Integer dia = scanner.nextInt();

        String respostaDia;

        switch (dia){
            case 1:
                respostaDia = "Domingo";
                break;
            case 2:
                respostaDia = "Segunda";
                break;
            case 3:
                respostaDia = "Terça";
                break;
            case 4:
                respostaDia = "Quarta";
                break;
            case 5:
                respostaDia = "Quinta";
                break;
            case 6:
                respostaDia = "Sexta";
                break;
            case 7:
                respostaDia = "Sábado";
                break;

            default:
                respostaDia = "Número inválido";
                break;
        };

        System.out.println(respostaDia);

        System.out.println("Digite um numero entre 1 e 7:");
        dia = scanner.nextInt();

        switch (dia){
            case 1, 7 ->{
                respostaDia = "Final de semana";
            } case 2, 3, 4, 5, 6 ->{
                respostaDia = "Dia de semana";
            } default ->{
                respostaDia = "Número inválido";
            }
        };

        System.out.println(respostaDia);

        System.out.println("Digite um numero entre 1 e 7:");
        dia = scanner.nextInt();

        respostaDia = switch (dia){
            case 1, 7 -> "FS";
            case 2, 3, 4, 5, 6 -> "DS";
            default -> "Número inválido";
        };

        System.out.println(respostaDia);
    }


}
