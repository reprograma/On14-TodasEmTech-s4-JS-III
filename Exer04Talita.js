var nota1 = 2;
var nota2 = 5.5;
var nota3 = 7;

function media(nota1, nota2, nota3) {
    // isNan -> para garantir que os valores serão tipo number
    if ( (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) ) {
        console.warn("Necessário informar as 3 notas")     

    } else{

        let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3; 
        //parseFloat em cada variável pra que ele não concatene numero + string

        switch (true){
            case media >= 6:
                console.info(" Aprovado \o/ ps.Não fez mais do que sua obrigação kkkkk");
                break;
                case (media < 6 && media >= 5):
                console.info("Você está na final Campeão! (=");
                break;
            case media < 5:
                console.info("Reprovado :/");
                break;
            
            default:
                console.warn("Necessário informar as 3 notas válidas");
        }
    }
}

