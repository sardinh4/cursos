package org.example;

public class Exercicio10 {
    public static void main(String[] args) {
        System.out.println("10) Implemente um método chamado ordenarCrescente que recebe um array de inteiros como " +
                "parâmetro e o ordena em ordem crescente.");
        int[] numeros = {245, 489, 589, 438, 125};
        ordenarCrescente(numeros);
        System.out.println("Array ordenado em ordem crescente:");
        for (int numero : numeros) {
            System.out.print(numero + " ");
        }
    }
    public static void ordenarCrescente(int[] array) {
        int tamanho = array.length;
        for (int i = 0; i < tamanho - 1; i++) {
            for (int j = 0; j < tamanho - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Troca os elementos se estiverem fora de ordem
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}
