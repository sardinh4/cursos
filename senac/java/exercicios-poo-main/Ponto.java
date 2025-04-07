package ExerciciosPOO;

public class Ponto {

    private double x;
    private double y;


    public void definirCoordenadas(double novoX, double novoY) {
        x = novoX;
        y = novoY;
    }

    public void exibirCoordenadas() {
        System.out.println("Coordenadas do Ponto: (" + x + ", " + y + ")");
    }


    public static void main(String[] args) {
        //objeto ponto
        Ponto ponto = new Ponto();

        // Definindo e exibindo as coordenadas
        ponto.definirCoordenadas(1.0, 4.0);
        ponto.exibirCoordenadas();
    }
}
