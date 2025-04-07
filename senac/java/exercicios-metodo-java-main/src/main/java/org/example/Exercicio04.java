package org.example;

public class Exercicio04 {
    public static void main(String[] args) {
        System.out.println("4) Implemente um método chamado fatorial que calcula o fatorial de um número passado como" +
                " parâmetro.  ");

        int numero = 5;
        int resultadoFatorial = fatorial(numero);
        System.out.println("O fatorial de "+numero+" é "+resultadoFatorial);
    }
    public static int fatorial(int numero){
        if (numero == 0 || numero == 1) {
            return 1;
        }else {
            int resultado = 1;
            for (int i = 2; i <= numero; i++) {
            resultado*=i;
            }
            return resultado;
        }
    }
}
