package school.sptech;

public class AlunoPos extends Aluno {

    private Double notaTcc;

    public AlunoPos(String nome, String ra, Double notaContinuada, Double notaEntrega, Double notaTcc) {
        super(nome, ra, notaContinuada, notaEntrega);
        this.notaTcc = notaTcc;
    }

    @Override
    public Double calcularMedia() {
        return (this.getNotaContinuada()
                + this.getNotaEntrega() + this.notaTcc) / 3;
    }

    @Override
    public String toString() {
        return super.toString() + " AlunoPos{" +
                "notaTcc=" + notaTcc +
                '}';
    }
}
