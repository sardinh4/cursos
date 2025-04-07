package ExerciciosPOO;

public class Livro {

    private String titulo;
    private String autor;
    private int numeroPaginas;

    public Livro(String titulo,String autor, int numeroPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    public void exibirInformacoes(){
        System.out.println("O livro se chama: "+titulo);
        System.out.println("O autor se chama: "+autor);
        System.out.println("O livro possui: "+numeroPaginas);
    }

    public static void main(String[] args) {
        Livro info = new Livro("Como não ser braço curto","Jailson Obama",584);
        info.exibirInformacoes();
    }
}
