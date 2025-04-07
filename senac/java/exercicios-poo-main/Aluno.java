package ExerciciosPOO;

import java.util.Scanner;

public class Aluno {
    public Aluno(String nome, String matricula, int numNotas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = new double[numNotas];
        this.inserirNotas();
    }

    private String nome;
    private String matricula;
    private double []notas;

    private void inserirNotas(){
        Scanner scanner =new Scanner(System.in);
        for (int i = 0; i <notas.length; i++) {
            System.out.println("Digite a nota "+(i+1)+": ");
            notas[i] = scanner.nextDouble();
        }
    }

    public double calcularMedia(){
        double soma =0;
        for (double nota: notas){
            soma += nota;
        }
        return soma/notas.length;
    }

    public void exibirInformacoes(){
        System.out.println("Nome: "+nome);
        System.out.println("Matrícula: "+matricula);
        System.out.println("Notas: ");
        for (int i = 0; i <notas.length ; i++) {
            System.out.println(" Nota "+(i+1)+": "+notas[i]);
        }
        System.out.println("Media: "+calcularMedia());
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o nome do aluno: ");
        String nome = scanner.next();

        System.out.println("Digite a matricula do aluno: ");
        String matricula = scanner.next();

        System.out.println("Digite a quantidade de notas do aluno: ");
        int numNotas = scanner.nextInt();

        Aluno aluno = new Aluno(nome,matricula,numNotas);
        aluno.exibirInformacoes();
    }

}
