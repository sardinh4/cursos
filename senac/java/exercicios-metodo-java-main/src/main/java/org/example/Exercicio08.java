package org.example;

public class Exercicio08 {
    public static void main(String[] args) {
        System.out.println("8) Implemente um método chamado encontrarMaiorElemento que recebe uma matriz de inteiros" +
                " como parâmetro e retorna o maior elemento presente nela. ");
        int[][]matriz ={
                {3,7,12},
                {8,21,5},
                {15,9,4}
        };

        int maiorElemento = encontrarMaiorElemento(matriz);
        System.out.println("O maior elemento na matriz é: "+ maiorElemento);
    }
    public static int encontrarMaiorElemento(int[][] matriz){
        int maior = matriz[0][0];//assumir que o primeiro elemento é o maior

        for (int i = 0; i <matriz.length ; i++) {
            for (int j = 0; j <matriz[i].length ; j++) {
                if (matriz[i][j]>maior){
                    maior = matriz[i][j];
                }
            }
        }
        return maior;
    }
}
