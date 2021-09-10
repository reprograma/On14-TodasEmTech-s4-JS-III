   // EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)



var soma, media, n1, n2, n3 , n4;

n1 = 6;
n2 = 6.5;
n3 = 7;
n4 = 8.5;
soma = n1 + n2+ n3+ n4;
media = soma/4; 

function mediadoalune(){

if (media >= 6) {
console.log ("Parabéns, você foi aprovade");

} else if (media <= 5) {
console.log ("Desculpe, você foi reprovade");

} else {

	return soma;
}

}

mediadoalune()