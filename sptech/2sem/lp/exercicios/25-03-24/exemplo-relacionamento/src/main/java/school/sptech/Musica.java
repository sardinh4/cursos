package school.sptech;

public class Musica {
    private String musica, artista;
    private Integer duracao;

    public Musica(String musica, String artista, Integer duracao) {
        this.musica = musica;
        this.artista = artista;
        this.duracao = duracao;
    }

    public String getMusica() {
        return musica;
    }

    public void setMusica(String musica) {
        this.musica = musica;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public Integer getDuracao() {
        return duracao;
    }

    public void setDuracao(Integer duracao) {
        this.duracao = duracao;
    }

    @Override
    public String toString() {
        return "Musica{" +
                "musica='" + musica + '\'' +
                ", artista='" + artista + '\'' +
                ", duracao='" + duracao + '\'' +
                '}';
    }
}
