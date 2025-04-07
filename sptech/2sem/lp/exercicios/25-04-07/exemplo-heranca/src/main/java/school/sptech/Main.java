// exemplo-heranca

package school.sptech;

public class Main {

    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("Manoel", "01192012",
                        5.0, 8.0);

        AlunoPos aluno2 = new AlunoPos("Murilo", "01192892",
                9.0, 7.0, 8.5);

        Faculdade faculdade = new Faculdade("SPTech");
        faculdade.matricular(aluno1);
        faculdade.matricular(aluno2);

        faculdade.exibirMedia();
        faculdade.exibirNotaTCC();
    }
}