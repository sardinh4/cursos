package org.example;

public class Exercicio07 {
    public static void main(String[] args) {
        System.out.println("7) Crie um método chamado converterCelsiusParaFahrenheit que recebe uma temperatura em " +
                "graus Celsius como parâmetro e retorna a temperatura equivalente em Fahrenheit. \n");

        double temperaturaCelsius = 100;
        double temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
        System.out.println(temperaturaCelsius+" graus Celsius equivalem a: "+ temperaturaFahrenheit+" graus Fahrenheit");
    }

    public static double converterCelsiusParaFahrenheit(double celsius){
        return (celsius*9/5)+32;
    }
}
