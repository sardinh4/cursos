package school.sptech;

import java.util.ArrayList;
import java.util.List;

public class Faculdade {

    private String nome;
    private List<Aluno> alunos;

    public Faculdade(String nome) {
        this.nome = nome;
        this.alunos = new ArrayList<>();
    }

    public void matricular(Aluno aluno) {
        this.alunos.add(aluno);
    }

    public void exibirMedia() {
        for (Aluno alunoDaVez : alunos) {
            System.out.println("Média do aluno (%s): %.2f"
                    .formatted(alunoDaVez.getNome(),
                            alunoDaVez.calcularMedia()));
        }
    }

    // Crie um método que exibe a nota tcc
    //  de todos os alunos de pós graduação


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Faculdade{" +
                "nome='" + nome + '\'' +
                ", alunos=" + alunos +
                '}';
    }
}
