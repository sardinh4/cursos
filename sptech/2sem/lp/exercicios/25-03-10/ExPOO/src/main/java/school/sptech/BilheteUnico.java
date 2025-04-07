package school.sptech;

public class BilheteUnico {

    String nomeUsuario, numero;
    Double saldo;
    Boolean estudante, idoso;
    Integer anoEmissao;

    BilheteUnico(){};

    BilheteUnico(String nomeUsuario, String numero, Double saldo, Boolean estudante, Boolean idoso, Integer anoEmissao){
        this.nomeUsuario = nomeUsuario;
        this.numero = numero;
        this.saldo = saldo;
        this.estudante = estudante;
        this.idoso = idoso;
        this.anoEmissao = anoEmissao;

    };

    


    Boolean carregar(Double valor){
        if (valor < 2.00 || valor > 100.00){
            System.out.println("Valor inválido!");
            return false;
        };

        saldo += valor;

        System.out.println("Recarga realizada!");
        return true;
    };

    void  passar(Boolean integracao){
        if (integracao || idoso){
            System.out.println("Subsídio: R$ 0,00");
            return;
        };

        if (estudante){
            if (saldo >= 2.60){
                saldo -= 2.60;
                System.out.println("Subsídio: R$ 2,60");
                return;
            }else{
                System.out.println("Saldo insuficiente");
                return;
            }

        };

        if (saldo >= 5.20){
            saldo -= 5.20;
            System.out.println("Subsídio: R$ 5,20");
            return;
        }else{
            System.out.println("Saldo insuficiente");
            return;
        }



    }
}
