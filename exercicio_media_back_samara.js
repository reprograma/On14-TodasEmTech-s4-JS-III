// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO (EXERCÍCIO PARA O LAR)

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)


let nota1 = 9;
let nota2 = 8;
let nota3 = 10;

function calculoMedia (nota1, nota2, nota3) {
    media = ((nota1+nota2+nota3)/3).toFixed(2)
    if(media >= 7){
        console.log(`Aluno aprovado!`);
        console.log(`Média: ${media}`);
    }else if(media < 7 && media >= 4){
        console.log(`Aluno em exame final`);
        console.log(`Média: ${media}`)
    }else{
        console.log('Aluno reprovado!');
        console.log('Média: ${media}');
    }
}

calculoMedia(nota1, nota2, nota3);
