package school.sptech;
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Auxiliar mensagem = new Auxiliar();
        mensagem.exibirMensagem(mensagem.somar(4,42).toString());
        mensagem.exibirMensagem(mensagem.media(4.0,5.0,8.0).toString());

    }
}