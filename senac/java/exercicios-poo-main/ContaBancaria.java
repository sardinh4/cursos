package ExerciciosPOO;

import java.util.Scanner;

public class ContaBancaria {
    private double saldo;
    private String numeroConta;

    public ContaBancaria(String numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }

    public double depositar(double valor) {
        return saldo+=valor;
    }

    public void sacar(double valor){
        if (valor>0 && saldo>=valor){
            saldo -= valor;
            System.out.println("Você sacou: "+ valor);
        }else {
            System.out.println("Você está sem saldo.");
        }
    }
    public void saldoAtual(){
         System.out.println(exibirSaldo(saldo+2000));
    }

    public String exibirSaldo(double saldo) {
        return "O seu saldo atual é: " + saldo;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ContaBancaria contaBancaria = new ContaBancaria("1234");

        contaBancaria.exibirSaldo(2000);

        System.out.println("Digite o valor para depósito: ");
        double depositar = sc.nextDouble();
        contaBancaria.depositar(depositar);

        contaBancaria.saldoAtual();

        System.out.println("Digite quanto você quer sacar: ");
        double valor = sc.nextDouble();
        contaBancaria.sacar(valor);

        contaBancaria.saldoAtual();

    }

}

