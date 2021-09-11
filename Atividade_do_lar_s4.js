// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

nota1 = 2;
nota2 = 8;
nota3 = 7;
nota4 = 5;
somanotas = nota1+nota2+nota3+nota4;
var nota1; nota2; nota3; nota4;

function mediaaluno(nota1, nota2, nota3,nota4)
{

if ((somanotas/4)>=5){
    console.log("você foi aprovado!Parabéns")}

else {
  console.log("Infelizmente você foi reprovdo");
}
}
return mediaaluno ()