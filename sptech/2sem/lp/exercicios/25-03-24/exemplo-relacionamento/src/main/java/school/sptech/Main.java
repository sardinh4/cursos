package school.sptech;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Usuario usuario1 = new Usuario("11934483566", "leo@outlook.com", "Leo");

        Musica m1 = new Musica("Resenha do Arrocha", "Eskine", 5*60);

        Musica m2 = new Musica("Telefone fora de área", "Raquel dos teclados", 3*60);

        Musica m3 = new Musica("Coração sem noção", "Silvano Sales", 4*60);

        Playlist p1 = new Playlist("Summer Arrocha Hits (2025)", usuario1);

        p1.adicionar(m1);
        p1.adicionar(m2);
        p1.adicionar(m3);

        System.out.println(p1);
        System.out.println(p1.getDuracao());
    }
}