package school.sptech;

import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Integer[] vetor = new Integer[10];
//        Integer[][] matriz = new Integer[5][5];
        Integer[][] matriz = new Integer[][]{
                {1,2,3},{4,5,6},{7,8,9}
        };

        for (int i = 0; i < vetor.length; i++){
            vetor[i] = 1;
        }

        for (int i = 0; i < matriz.length; i++){
            System.out.println(Arrays.deepToString(matriz[i]));
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.println(matriz[i][j]);
            }
        }

        System.out.println(Arrays.toString(vetor));
        System.out.println(Arrays.deepToString(matriz));
    }
}