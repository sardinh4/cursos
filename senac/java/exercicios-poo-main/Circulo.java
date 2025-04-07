package ExerciciosPOO;

import java.lang.Math;

public class Circulo {

    private double raio;
    private Ponto centro; // Utiliza a classe Ponto para representar o centro do círculo

    public Circulo(double raio, Ponto centro) {
        this.raio = raio;
        this.centro = centro;
    }

    public double calcularArea() {
        return Math.PI * Math.pow(raio, 2);
    }

    public double calcularPerimetro() {
        return 2 * Math.PI * raio;
    }


    public static void main(String[] args) {
        Ponto pontoCentro = new Ponto();
        Circulo circulo = new Circulo(5.0, pontoCentro);
        System.out.println("Área do Círculo: " + circulo.calcularArea());
        System.out.println("Perímetro do Círculo: " + circulo.calcularPerimetro());
    }
}

