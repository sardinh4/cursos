package ExerciciosPOO;
//atr modelo, ano e cor
//metodos ligar, desligar e exibir info sobre o carro
public class Carro {
    public Carro(String modelo, int ano, String cor, String preco) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = false;
        this.preco = preco;
    }

    private String modelo;
    private int ano;
    private String cor;
    private boolean ligado;
    private String preco;


    public void exibirInfo(){
        System.out.println("Informações do carro:");
        System.out.println("O modelo é: "+modelo);
        System.out.println("O ano é: "+ano);
        System.out.println("A cor é: "+cor);
        System.out.println("Estado: "+(ligado?"Ligado":"Desligado"));
        System.out.println("O preço é: "+preco);

    }

    public void ligar(){
        if (!ligado){
            ligado = true;
            System.out.println("O carro foi ligado.");
        }else {
            System.out.println("O carro já está ligado.");
        }
    }

    public void desligar(){
        if (ligado){
            ligado = false;
            System.out.println("O carro foi desligado.");

        }else{
            System.out.println("O carro já está desligado.");
        }
    }

    public static void main(String[] args) {
        Carro carro = new Carro("Gol",2022,"Branco","57.490,00");

        carro.ligar();
        carro.exibirInfo();

        carro.desligar();
        carro.exibirInfo();
    }
}
