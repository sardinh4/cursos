package school.sptech;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

//        BilheteUnico bilheteUnico = new BilheteUnico();
//
//        bilheteUnico.nomeUsuario = "Leonardo";
//        bilheteUnico.saldo = 0.0;
//        bilheteUnico.numero = "0000001";
//        bilheteUnico.anoEmissao = 2025;
//        bilheteUnico.idoso = false;
//        bilheteUnico.estudante = true;

        BilheteUnico bilheteUnico = new BilheteUnico("Leonardo", "0000001", 0.0, true, false, 2025);

        BilheteUnico bilheteUnico2 = new BilheteUnico();

        bilheteUnico2.nomeUsuario = "Rennan";
        bilheteUnico2.saldo = 5.0;
        bilheteUnico2.numero = "0000002";
        bilheteUnico2.anoEmissao = 2024;
        bilheteUnico2.idoso = true;
        bilheteUnico2.estudante = false;

        System.out.println(bilheteUnico.saldo);

        bilheteUnico.carregar(2.00);

        System.out.println(bilheteUnico.saldo);

        bilheteUnico.passar(false);

        System.out.println(bilheteUnico.saldo);

    }
}