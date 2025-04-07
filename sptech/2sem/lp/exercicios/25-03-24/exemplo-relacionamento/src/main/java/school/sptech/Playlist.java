package school.sptech;

import java.util.ArrayList;
import java.util.List;

public class Playlist {

    private String nome;
    private Usuario usuario;
    private List<Musica> musicas;

    public Playlist(String nome, Usuario usuario) {
        this.nome = nome;
        this.usuario = usuario;
        this.musicas= new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Musica> getMusicas() {
        return musicas;
    }

    public void setMusicas(List<Musica> musicas) {
        this.musicas = musicas;
    }

    @Override
    public String toString() {
        return "Playlist{" +
                "nome='" + nome + '\'' +
                ", usuario='" + usuario + '\'' +
                ", musicas=" + musicas +
                '}';
    }

    public void adicionar (Musica musica){
        this.musicas.add(musica);
    }

    public Integer getDuracao(){
        Integer duracao = 0;
        for (int i = 0; i < musicas.size(); i++) {
            duracao += musicas.get(i).getDuracao();
        }

        return duracao;
    };
}
