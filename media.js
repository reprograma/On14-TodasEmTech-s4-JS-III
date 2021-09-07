//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

var nota1 = 8;
var nota2 = 10;
var nota3 = 7;
var nota4 = 5;
var nota5 = 7;
var resultado

function calcularMedia (nota1, nota2, nota3, nota4, nota5) {
resultado =  (nota1 + nota2 + nota3 + nota4 + nota5)/5;
if (resultado >= 6) {
    return console.log("Parabéns!!! Você foi aprovada(o)! Sua nota é: " + resultado);
}
else{
    return console.log("Infelizmente você foi reprovado. Sua nota é: " + resultado);
}
}

calcularMedia (nota1, nota2, nota3, nota4, nota5)