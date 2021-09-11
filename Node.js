// Calcular média da aluna Estefanya - Nodes.js
// Questão: (UTILIZAR PARAMETRO) 
// ETAPA 1 = Elaborar um programa que calcule a média do aluno.
// ETAPA 2 = Informar se ele foi aprovado (utilizar a estrutura condicional)
// ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar retornar)

function  alunomedia (av1 , av2 , av3, av4) {
    let  Media = (av1 + av2 + av3 +av4) / 4;

if (isNaN (av1)  ||  isNaN (av2)  ||  isNaN (av3) ||  isNaN (av4)  ||  av1  ==  undefined  ||  av2  ==  undefined  ||  av3  ==  undefined ||  av4  ==  undefined ) {
    console . log ("Digite só números!");
}  else  if (Media  >=  8) {
    console.log ("Parabéns, você foi aprovado! Sua média é " + Media); 
}  else  { 
    console.log ("Você foi reprovado, tente novamente! Sua média foi "  +  Media);
}
return  Media;
}

alunomedia (9,  8,  9,  8);
alunomedia (8, 10,  0,  2);
alunomedia (7,  9,  8, 10);
alunomedia (0,  7,  0,  4);